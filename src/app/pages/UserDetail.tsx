import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Car, MapPin, ClipboardList, Loader2 } from "lucide-react";
import api from "../../api/api";

export default function UsersDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await api.get(`/offers/${id}`);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching detail:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (isLoading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>;
  if (!data) return <div className="p-10 text-center">Offer not found</div>;

  const InfoGroup = ({ label, value }: { label: string; value: any }) => (
    <div className="flex flex-col p-3 bg-gray-50 rounded-lg">
      <span className="text-[10px] uppercase font-bold text-gray-400 mb-1">{label}</span>
      <span className="text-gray-700 font-medium capitalize">{value || "---"}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <main className="max-w-4xl mx-auto">
        <button onClick={() => navigate("/admin")} className="flex items-center gap-2 text-blue-600 font-bold mb-6">
          <ArrowLeft className="w-5 h-5" /> Back to list
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-blue-600 p-8 text-white flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{data.vehicleYear} {data.vehicleMake}</h1>
              <p className="opacity-80 uppercase text-sm">{data.vehicleModel} • ID: #{data.id}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold block opacity-70">OFFER DATE</span>
              <span className="font-bold">{new Date(data.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="p-8 space-y-10">
            {/* Step 1: Basic Info */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <Car className="w-5 h-5" /> Basic & Contact Info
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InfoGroup label="Year" value={data.vehicleYear} />
                <InfoGroup label="Make" value={data.vehicleMake} />
                <InfoGroup label="Model" value={data.vehicleModel} />
                <InfoGroup label="Zip Code" value={data.vehicleZipCode} />
                <div className="md:col-span-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-[10px] uppercase font-bold text-blue-400 mb-1 block">Phone Number</span>
                  <span className="text-blue-900 font-bold text-lg">{data.vehiclePhone}</span>
                </div>
              </div>
            </section>

            {/* Step 2: Conditions */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <ClipboardList className="w-5 h-5" /> Vehicle Conditions
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InfoGroup label="Mileage" value={`${data.mileage} mi`} />
                <InfoGroup label="Drivable" value={data.doesItDrive} />
                <InfoGroup label="Tires" value={data.tiresInflated} />
                <InfoGroup label="Wheels" value={data.wheelsAttached} />
                <InfoGroup label="Front" value={data.frontCondition} />
                <InfoGroup label="Rear" value={data.rearCondition} />
                <InfoGroup label="Left Side" value={data.leftSideCondition} />
                <InfoGroup label="Right Side" value={data.rightSideCondition} />
                <InfoGroup label="Engine" value={data.engineCondition} />
                <InfoGroup label="Glass" value={data.glassCondition} />
                <InfoGroup label="Airbag" value={data.airbagDeployed} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className={`p-3 rounded-lg border ${data.floodDamage === 'yes' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50'}`}>
                  <span className="text-[10px] uppercase font-bold block">Flood Damage</span>
                  <span className="font-bold">{data.floodDamage.toUpperCase()}</span>
                </div>
                <div className={`p-3 rounded-lg border ${data.fireDamage === 'yes' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50'}`}>
                  <span className="text-[10px] uppercase font-bold block">Fire Damage</span>
                  <span className="font-bold">{data.fireDamage.toUpperCase()}</span>
                </div>
              </div>
            </section>

            {/* Step 3 & 4 */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <MapPin className="w-5 h-5" /> Location & Title
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoGroup label="Has Title?" value={data.hasTitle} />
                <InfoGroup label="Color" value={data.vehicleColor} />
                <div className="md:col-span-3">
                  <InfoGroup label="Address" value={data.pickupAddress} />
                </div>
              </div>
            </section>

            <section className="bg-slate-900 p-6 rounded-2xl text-white">
              <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">VIN Number</span>
              <span className="text-2xl font-mono tracking-widest">{data.vin}</span>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}