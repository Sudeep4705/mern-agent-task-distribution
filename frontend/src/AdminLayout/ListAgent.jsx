import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const viewtask = async () => {
      try {
        const res = await axios.get("http://localhost:8003/agent/getagent", {
          withCredentials: true,
        });
        toast.success(res.data.message)
        setTasks(res.data.agent);
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
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Active Agents</h1>
        <p className="text-gray-500 mt-2">List of agents currently assigned to tasks.</p>
      </header>

      {tasks.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500 text-lg">No agents found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4"
            >
              {/* Initials Badge */}
              <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                {task.name ? task.name.charAt(0).toUpperCase() : "?"}
              </div>
              
              {/* Agent Name */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                 Name: {task.name || "Unknown Agent"}
                </h2>
                <h2 className="text-lg font-semibold text-gray-900">
                  Email:{task.email || "Unknown Agent"}
                </h2>
                <h2 className="text-lg font-semibold text-gray-900">
                  Mobile:{task.mobile || "Unknown Agent"}
                </h2>
                {/* <div className="btn flex gap-2 mt-2">
                     <button className="bg-red-500 rounded-md w-30 p-1 text-center">Edit</button>
                     <button className="bg-red-500 rounded-md w-30 p-1 text-center">Delete</button>
                </div> */}
               
                
             
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}