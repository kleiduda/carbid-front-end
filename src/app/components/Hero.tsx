import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Navegar para a página de detalhes com os dados do veículo
    navigate("/vehicle-details", {
      state: {
        vehicleData: {
          year,
          make,
          model,
          zipCode,
          phone,
        },
      },
    });
  };

  return (
    <section className="relative">
      {/* Background Image with Form Overlay */}
      <div className="relative min-h-[615px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763165524637-9067debdc80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwJTIwc2hvd3Jvb218ZW58MXx8fHwxNzczMTAyMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car dealership showroom"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Registration Form */}
        <div className="relative z-10 flex items-center justify-start min-h-[615px] py-12 px-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Year and Make - 2 columns */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  placeholder="2010"
                  className="h-12"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
                <Input
                  placeholder="Make"
                  className="h-12"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  required
                />
              </div>

              {/* Model and Submodel - 2 columns */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Model"
                  className="h-12"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
                <Input
                  placeholder="Car Zip Code"
                  className="h-12"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>

              {/* Zip Code and Phone - 2 columns */}
              <div className="grid grid-cols-1 gap-4">
                <Input
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="h-12"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
              >
                Get Offer
              </Button>

              <p className="text-xs text-gray-600 text-center">
                We will contact you when your car is sold.
                <br />
                By submitting, you acknowledge our{" "}
                <a href="#" className="text-blue-600 underline">
                  privacy policy
                </a>{" "}
                and agree to receive messages from Car Bid and
                our partners.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}