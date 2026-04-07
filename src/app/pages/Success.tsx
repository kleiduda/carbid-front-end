import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Success() {
  const referenceNumber = Math.floor(
    10000000 + Math.random() * 90000000,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 text-center">
          <h1 className="text-4xl font-bold text-[#1e3a8a] mb-2">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            You're almost set and we will come to you for
            pickup.
          </p>

          {/* Ilustração central */}
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

          <div className="space-y-6 text-lg text-gray-800 max-w-lg mx-auto leading-relaxed">
            <p>
              Our team is reviewing your vehicle now. Once the
              assessment is complete, you'll receive your offer
              with next steps.
            </p>

            <p>
              Once you accept the offer, we'll schedule free
              vehicle removal at its location.
            </p>

            <div className="pt-6">
              <p className="font-medium">
                Need help? Call us or email
              </p>
              <a
                href="mailto:support@carbid.com"
                className="text-[#4169e1] font-bold text-xl hover:underline"
              >
                support@carbid.com
              </a>
            </div>

            <p className="text-[#4169e1] font-bold text-2xl pt-4">
              Reference #{referenceNumber}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}