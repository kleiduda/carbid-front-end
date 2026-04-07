import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function CallLater() {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicleData = location.state;

  const [step, setStep] = useState(1);

  // Step 1 - Title and Location
  const [hasTitle, setHasTitle] = useState<boolean | null>(
    null,
  );
  const [address, setAddress] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");

  // Step 2 - VIN Information
  const [vin, setVin] = useState("");

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasTitle !== null && address && vehicleColor) {
      setStep(2);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();

    const completeData = {
      ...vehicleData,
      hasTitle,
      address,
      vehicleColor,
      vin,
    };

    console.log("Complete Submission Data:", completeData);
    navigate("/success");
  };

  const handleSkipVIN = () => {
    const completeData = {
      ...vehicleData,
      hasTitle,
      address,
      vehicleColor,
      vin: "Not provided",
    };

    console.log(
      "Complete Submission Data (No VIN):",
      completeData,
    );
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
            {step === 1 && (
              <form onSubmit={handleStep1Submit}>
                {/* Title */}
                <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">
                  Title and Location
                </h1>
                <p className="text-gray-700 mb-8">
                  Please enter the title and car location info
                </p>

                {/* Car Title Information */}
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                  Car Title Information
                </h2>

                <div className="mb-8">
                  <label className="block text-gray-900 text-lg mb-4">
                    Do you have the title for the car?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setHasTitle(true)}
                      className={`flex-1 py-3 px-6 rounded-lg border-2 font-semibold transition-all ${hasTitle === true
                        ? "bg-blue-50 border-[#4169e1] text-[#4169e1]"
                        : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasTitle(false)}
                      className={`flex-1 py-3 px-6 rounded-lg border-2 font-semibold transition-all ${hasTitle === false
                        ? "bg-blue-50 border-[#4169e1] text-[#4169e1]"
                        : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Car Location & Color */}
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                  Car Location & Color
                </h2>

                <div className="mb-6">
                  <label className="block text-gray-900 text-lg mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-blue-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-gray-900 text-lg mb-2">
                    Vehicle color
                  </label>
                  <div className="relative">
                    <select
                      value={vehicleColor}
                      onChange={(e) =>
                        setVehicleColor(e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-blue-50 text-gray-900 appearance-none focus:outline-none focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20"
                      required
                    >
                      <option value="">Color</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="Silver">Silver</option>
                      <option value="Gray">Gray</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Brown">Brown</option>
                      <option value="Green">Green</option>
                      <option value="Beige">Beige</option>
                      <option value="Orange">Orange</option>
                      <option value="Gold">Gold</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Purple">Purple</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                  </div>
                </div>

                {/* Complete Button */}
                <button
                  type="submit"
                  className="w-full bg-[#4169e1] hover:bg-[#3457cc] text-white font-bold text-xl py-4 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] mb-4"
                >
                  Complete
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-gray-600">
                  We only contact you about your car.
                  <br />
                  By submitting, you acknowledge our{" "}
                  <a
                    href="#"
                    className="text-[#4169e1] underline"
                  >
                    privacy policy
                  </a>{" "}
                  and agree to receive messages from Carbid and
                  our partners.
                </p>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleStep2Submit}>
                {/* Title */}
                <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">
                  VIN Information
                </h1>
                <p className="text-gray-700 mb-8">
                  We need your Vehicle Identification Number
                </p>

                {/* Subtitle */}
                <h2 className="text-2xl font-bold text-[#374a7d] mb-8 leading-snug">
                  In order to Schedule a Pickup Appointment We
                  Need a Valid VIN
                </h2>

                <div className="mb-8">
                  <label className="block text-gray-900 text-lg mb-2">
                    Vehicle Identification Number (VIN)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={vin}
                      onChange={(e) =>
                        setVin(e.target.value.toUpperCase())
                      }
                      placeholder="Enter your VIN"
                      maxLength={17}
                      className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-blue-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      title="VIN is a 17-character unique code found on your vehicle registration or dashboard"
                    >
                      <HelpCircle className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Skip VIN Link */}
                <div className="mb-8">
                  <button
                    type="button"
                    onClick={handleSkipVIN}
                    className="text-[#4169e1] hover:text-[#3457cc] font-semibold text-lg underline transition-colors"
                  >
                    I cannot provide a VIN now
                  </button>
                </div>

                {/* Complete Button */}
                <button
                  type="submit"
                  className="w-full bg-[#4169e1] hover:bg-[#3457cc] text-white font-bold text-xl py-4 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Complete
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}