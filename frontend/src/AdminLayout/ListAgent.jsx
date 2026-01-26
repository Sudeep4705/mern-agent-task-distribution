import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const viewtask = async () => {
      try {
        const res = await axios.get("http://localhost:8003/task/getdata", {
          withCredentials: true,
        });
        setTasks(res.data.info);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch tasks.");
      } finally {
        setLoading(false);
      }
    };

    viewtask();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Distributed Tasks</h1>
          <p className="text-gray-500 mt-2">
            Overview of tasks assigned to agents.
          </p>
        </header>

        {tasks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-lg">No tasks found available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col"
              >
                {/* Card Header: Agent Info */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {task.agentId?.name || "Unknown Agent"}
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {task.agentId?.email || "No email provided"}
                    </p>
                  </div>
                  {/* Initials Badge */}
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {task.agentId?.name ? task.agentId.name.charAt(0).toUpperCase() : "?"}
                  </div>
                </div>

                {/* Card Body: Task Details */}
                <div className="p-6 flex-grow flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">
                      Customer Name
                    </label>
                    <p className="text-sm font-medium text-gray-800">
                      {task.firstName}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">
                      Contact
                    </label>
                    <p className="text-sm text-gray-800 font-mono bg-gray-50 inline-block px-2 py-1 rounded">
                      {task.phone}
                    </p>
                  </div>

                  {task.notes && (
                    <div className="mt-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">
                        Notes
                      </label>
                      <p className="text-sm text-gray-600 leading-relaxed bg-yellow-50 p-3 rounded-md border border-yellow-100">
                        {task.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}