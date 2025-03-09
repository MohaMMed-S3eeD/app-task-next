/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
"use client";
import { useState } from "react";
import useTaskStore from "../store/taskStore";

const TaskList = () => {
  const { tasks, removeTask, updateTask } = useTaskStore();
  const [editingTask, setEditingTask] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditedText(task.text);
  };

  const handleSaveEdit = (id) => {
    if (!editedText.trim()) return;
    updateTask(id, editedText);
    setEditingTask(null);
  };

  const toggleComplete = (taskId) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-zinc-400 text-center select-none flex flex-col items-center gap-2">
        <span className="text-2xl">📝</span>
        No tasks yet
      </p>
      
      ) : null}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-4 rounded-xl group border border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={completedTasks.has(task.id)}
              onChange={() => toggleComplete(task.id)}
              className="w-5 h-5 rounded-md border-2 border-blue-500 dark:border-yellow-500 checked:bg-blue-500 dark:checked:bg-yellow-500 appearance-none cursor-pointer transition-all hover:border-blue-400 dark:hover:border-yellow-400"
            />
            {completedTasks.has(task.id) && (
              <svg
                className="absolute w-3.5 h-3.5 text-black pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.55 18.2L3.65 12.3a.996.996 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.95 4.95 9.9-9.9c.39-.39 1.01-.39 1.4 0 .39.39.39 1.01 0 1.4L9.55 18.2z" />
              </svg>
            )}
          </div>
          {editingTask === task.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={() => handleSaveEdit(task.id)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(task.id)}
              className="flex-1 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white p-2 rounded-lg outline-none"
              autoFocus
            />
          ) : (
            <span
              className={`flex-1 text-gray-800 dark:text-white ${completedTasks.has(task.id) ? "line-through text-gray-400 dark:text-zinc-500" : ""} transition-all`}
            >
              {task.text}
            </span>
          )}
          <div className="opacity-0 group-hover:opacity-100 transition-all flex gap-1">
            <button
              onClick={() => handleEdit(task)}
              className="p-1.5 rounded-lg text-gray-400 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-all"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            <button
              onClick={() => removeTask(task.id)}
              className="p-1.5 rounded-lg text-gray-400 dark:text-zinc-400 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-all"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
