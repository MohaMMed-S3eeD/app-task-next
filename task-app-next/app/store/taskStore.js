import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  updateTask: (id, updatedText) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task,
      ),
    })),
}));

export default useTaskStore;
