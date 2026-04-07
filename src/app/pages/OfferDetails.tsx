import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone } from "lucide-react";

export default function OfferDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicleData = location.state;

  const handleCallNow = () => {
    window.location.href = "tel:8558141336";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#1e3a8a] mb-6">
              Your Offer Details
            </h1>

            {/* Subtitle */}
            <p className="text-center text-gray-800 text-lg sm:text-xl mb-8 leading-relaxed">
              Speak with our purchasing team to review how much
              we're offering for your vehicle.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <div className="relative w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center overflow-visible">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                  <div className="absolute top-0 right-0 animate-bounce text-4xl">
                    💸
                  </div>
                  <div className="absolute bottom-10 left-0 animate-pulse text-4xl">
                    💸
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Text */}
            <p className="text-center text-gray-900 text-lg font-semibold mb-6">
              Sell your car now - speak with our team to confirm
              details and get paid.
            </p>

            {/* Phone Button */}
            <button
              onClick={handleCallNow}
              className="w-full bg-[#4169e1] hover:bg-[#3457cc] text-white font-bold text-xl sm:text-2xl py-4 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] mb-6 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              (123) 456-7890
            </button>

            {/* Call Later Section */}
            <div className="text-center space-y-2">
              <p className="text-gray-700 text-base">
                I cannot call right now.
              </p>
              <button
                onClick={() =>
                  navigate("/call-later", {
                    state: vehicleData,
                  })
                }
                className="text-[#4169e1] hover:text-[#3457cc] font-semibold text-lg underline transition-colors"
              >
                Call me at a later time
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}