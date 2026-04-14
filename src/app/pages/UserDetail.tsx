import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Car, MapPin, ClipboardList, Info } from "lucide-react";
import { MOCK_SUBMISSIONS } from "../data/mockData";

export default function UsersDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = MOCK_SUBMISSIONS.find(item => item.id === id);

  if (!data) return <div className="p-10 text-center">User not found</div>;

  const InfoGroup = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col p-3 bg-gray-50 rounded-lg">
      <span className="text-[10px] uppercase font-bold text-gray-400 mb-1">{label}</span>
      <span className="text-gray-700 font-medium capitalize">{value || "---"}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 text-blue-600 font-bold mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to list
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* TOP BANNER - Step 1 & Status */}
          <div className="bg-blue-600 p-8 text-white flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{data.vehicle.year} {data.vehicle.make}</h1>
              <p className="opacity-80 uppercase tracking-widest text-sm">{data.vehicle.model} • VIN: {data.vin}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase block opacity-70 mb-2">Offer Status</span>
              <span className="bg-white text-blue-600 px-4 py-1 rounded-full font-bold">{data.status}</span>
            </div>
          </div>

          <div className="p-8 space-y-10">
            {/* SECTION 1: CONTACT & BASIC (Step 1) */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <Car className="w-5 h-5" /> Step 1: Basic & Contact Info
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <InfoGroup label="Year" value={data.vehicle.year} />
                <InfoGroup label="Make" value={data.vehicle.make} />
                <InfoGroup label="Model" value={data.vehicle.model} />
                <InfoGroup label="Zip Code" value={data.vehicle.zipCode} />
                <div className="md:col-span-2">
                  <div className="flex flex-col p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-[10px] uppercase font-bold text-blue-400 mb-1">Primary Phone Number</span>
                    <span className="text-blue-900 font-bold text-lg">{data.vehicle.phone}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: OPERATIONAL & BODY (Step 2 - The Details Object) */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <ClipboardList className="w-5 h-5" /> Step 2: Vehicle Details
              </div>

              <div className="space-y-6">
                {/* Operational */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <InfoGroup label="Mileage" value={`${data.details.mileage} mi`} />
                  <InfoGroup label="Drivable" value={data.details.doesItDrive} />
                  <InfoGroup label="Tires Inflated" value={data.details.tiresInflated} />
                  <InfoGroup label="Wheels Attached" value={data.details.wheelsAttached} />
                  <InfoGroup label="Engine" value={data.details.engineCondition} />
                  <InfoGroup label="Glass" value={data.details.glassCondition} />
                  <InfoGroup label="Airbag Deployed" value={data.details.airbagDeployed} />
                </div>

                {/* Body Conditions */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 text-left">Body Condition Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <InfoGroup label="Front" value={data.details.frontCondition} />
                    <InfoGroup label="Rear" value={data.details.rearCondition} />
                    <InfoGroup label="Left Side" value={data.details.leftSideCondition} />
                    <InfoGroup label="Right Side" value={data.details.rightSideCondition} />
                  </div>
                </div>

                {/* Damage */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg border ${data.details.floodDamage === 'yes' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <span className="text-[10px] uppercase font-bold opacity-70 block">Flood Damage</span>
                    <span className="font-bold">{data.details.floodDamage.toUpperCase()}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${data.details.fireDamage === 'yes' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <span className="text-[10px] uppercase font-bold opacity-70 block">Fire Damage</span>
                    <span className="font-bold">{data.details.fireDamage.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: TITLE & LOCATION (Step 3) */}
            <section>
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b pb-2 mb-4">
                <MapPin className="w-5 h-5" /> Step 3: Title & Location
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoGroup label="Has Title?" value={data.titleAndLocation.hasTitle} />
                <InfoGroup label="Vehicle Color" value={data.titleAndLocation.vehicleColor} />
                <div className="md:col-span-3">
                  <InfoGroup label="Full Pickup Address" value={data.titleAndLocation.address} />
                </div>
              </div>
            </section>

            {/* SECTION 4: VIN (Step 4) */}
            <section className="bg-slate-900 p-6 rounded-2xl text-white">
              <div className="flex items-center gap-2 text-blue-400 font-bold border-b border-white/10 pb-2 mb-4">
                <Info className="w-5 h-5" /> Step 4: Final Identification
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 mb-1 block">VIN (Vehicle Identification Number)</span>
                <span className="text-2xl font-mono tracking-[0.3em] break-all">{data.vin}</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}