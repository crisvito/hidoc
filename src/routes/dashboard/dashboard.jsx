import { Home, Sidebar } from "../../contents";

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-200 ">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
          <Home />
        </div>
      </main>
    </div>
  );
}
