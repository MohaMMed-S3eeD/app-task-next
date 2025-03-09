import TaskInput from "./(component-me)/TaskInput";
import TaskList from "./(component-me)/TaskList";

export default function Home() {
  return (
    <main className=" dark:bg-black p-8">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="pb-4 text-blue-600 dark:text-yellow-500 text-sm font-semibold tracking-wider">WELCOME</h2>
          <h1 className=" text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
            Task App
          </h1>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </main>
  );
}
