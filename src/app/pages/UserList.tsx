import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../../api/api";
import { Pencil, Trash2, Eye, Search, Loader2 } from "lucide-react";

export default function UsersList() {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOffers = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/offers");
      setOffers(response.data);
    } catch (err: any) {
      console.error("Error fetching offers:", err);
      setError("Failed to load offers. Make sure you are logged in.");

      if (err.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await api.delete(`/offers/${id}`);
        setOffers(offers.filter((o: any) => o.id_offer !== id));
      } catch (err) {
        alert("Error deleting offer");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Offer Management</h1>
            <p className="text-sm text-gray-500">Real-time data from CarBid API</p>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button onClick={handleLogout} className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
              Logout
            </button>
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white outline-none w-full" />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-blue-600">
            <Loader2 className="w-10 h-10 animate-spin mb-2" />
            <p className="font-medium">Loading offers...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-xl text-center border border-red-100">
            {error}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Vehicle</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Contact</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Mileage</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {offers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-10 text-center text-gray-400">No offers found in database.</td>
                  </tr>
                ) : (
                  offers.map((item: any) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-gray-700">
                          {item.vehicleYear} {item.vehicleMake} {item.vehicleModel}
                        </div>
                        <div className="text-gray-400 text-[10px] font-mono">ID: {item.id}</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        <div className="font-bold text-blue-600">{item.vehiclePhone}</div>
                        <div className="text-gray-400 text-xs">Zip: {item.vehicleZipCode}</div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-medium text-gray-700">
                          {item.mileage?.toLocaleString()} mi
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-3 text-gray-400">
                          <button
                            onClick={() => navigate(`/admin/details/${item.id}`)}
                            className="hover:text-blue-600 transition-colors"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="hover:text-blue-600 transition-colors">
                            <Pencil className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id_offer)}
                            className="hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}