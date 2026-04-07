import { FileText, Truck, Banknote } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Register your vehicle",
    description:
      "Enter your basic vehicle information and we will get in touch with you in just a few minutes.",
  },
  {
    icon: Truck,
    title: "Schedule a pickup",
    description:
      "We offer free vehicle removal and will come to pick it up whenever it's most convenient for you.",
  },
  {
    icon: Banknote,
    title: "Get paid on the spot",
    description:
      "Receive your payment at the time of pickup. We take care of all the ownership transfer paperwork.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selling your car has never been easier. Just follow
            these three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (visible only on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[65%] w-[70%] h-0.5 bg-blue-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}