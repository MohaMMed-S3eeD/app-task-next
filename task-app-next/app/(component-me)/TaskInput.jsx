/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
"use client";
import { useState } from "react";
import useTaskStore from "../store/taskStore";
const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTaskStore();
  const handleAddTask = () => {
    if (!text.trim()) return;
    addTask({ id: Date.now(), text });
    setText("");
  };

  return (
    <div className="flex gap-2 bg-white dark:bg-zinc-900 p-2 rounded-full shadow-sm">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your task..."
        className="flex-1 bg-transparent text-gray-800 dark:text-white p-2 outline-none placeholder:text-gray-400 dark:placeholder:text-zinc-500"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 dark:bg-yellow-500 hover:bg-blue-600 dark:hover:bg-yellow-400 text-white dark:text-black px-6 py-2 rounded-full font-medium transition-colors shadow-lg"
      >
        ADD
      </button>
    </div>
  );
};

export default TaskInput;
