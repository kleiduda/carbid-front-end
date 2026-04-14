import { useNavigate } from "react-router";
import { Pencil, Trash2, Eye, Search } from "lucide-react";
import { MOCK_SUBMISSIONS } from "../data/mockData";

export default function UsersList() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Offer Management</h1>
            <p className="text-sm text-gray-500">Monitor all incoming vehicle offers</p>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleLogout}
              className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
            >
              Logout
            </button>
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search vehicle or email..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-semibold text-gray-600 text-sm">CODE</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Vehicle</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Contact</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-gray-600 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_SUBMISSIONS.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 text-gray-500 text-sm font-medium">#{item.id}</td>
                  <td className="p-4">
                    <div className="font-semibold text-gray-700">
                      {item.vehicle.year} {item.vehicle.make} {item.vehicle.model}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    <div className="font-medium">{item.vehicle.phone}</div>
                    <div className="text-gray-400 text-xs">ZIP: {item.vehicle.zipCode}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3 text-gray-400">
                      <button
                        onClick={() => navigate(`/admin/details/${item.id}`)}
                        className="hover:text-blue-600 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="hover:text-blue-600 transition-colors" title="Edit">
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button className="hover:text-red-600 transition-colors" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}