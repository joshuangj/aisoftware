import threading
import tkinter as tk
from tkinter import ttk
import time

class GameAutomationApp:
    def __init__(self, root):
        self.root = root
        root.title("테무 게임 자동화")
        self.running = False
        self.turns_var = tk.IntVar(value=5)

        self.status_label = tk.Label(root, text="준비 완료")
        self.status_label.pack(pady=10)

        controls = tk.Frame(root)
        controls.pack(pady=5)
        tk.Label(controls, text="반복 횟수:").pack(side=tk.LEFT)
        tk.Entry(controls, textvariable=self.turns_var, width=5).pack(side=tk.LEFT)

        tk.Button(root, text="시작", command=self.start_automation).pack(fill='x')
        tk.Button(root, text="중지 (DEL)", command=self.stop_automation).pack(fill='x')

        self.progress = ttk.Progressbar(root, length=200, mode='determinate')
        self.progress.pack(pady=10, fill='x')

        root.bind('<Delete>', lambda event: self.stop_automation())
        root.protocol("WM_DELETE_WINDOW", self.on_close)

    def start_automation(self):
        if self.running:
            return
        self.running = True
        turns = self.turns_var.get()
        self.progress.config(maximum=turns, value=0)
        self.status_label.config(text="자동화 실행 중...")
        threading.Thread(target=self.game_loop, args=(turns,), daemon=True).start()

    def stop_automation(self):
        if not self.running:
            return
        self.running = False
        self.status_label.config(text="자동화 중지됨")

    def game_loop(self, turns):
        for i in range(turns):
            if not self.running:
                break
            print(f"[턴 {i+1}] 게임 명령 수행 중...")
            self.progress.config(value=i+1)
            time.sleep(1)
        self.running = False
        self.status_label.config(text="자동화 완료")

    def on_close(self):
        self.running = False
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = GameAutomationApp(root)
    root.mainloop()
