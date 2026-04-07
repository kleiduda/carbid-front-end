import {
  CheckCircle,
  Shield,
  Truck,
  Clock,
  CreditCard,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "Free Inspection",
    description: "Vehicle inspection at no cost to you.",
  },
  {
    icon: Shield,
    title: "Offers",
    description:
      "If the vehicle condition matches what was described, your offer is locked in and will not change at pickup. If something is different, we can revise the offer.",
  },
  {
    icon: Truck,
    title: "Free Towing",
    description:
      "Your car will be picked up for free from any location we service.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Get your car sold and paid for in as little as 24 hours.",
  },
  {
    icon: CreditCard,
    title: "On-spot payment.",
    description:
      "Receive payment immediately upon vehicle pickup.",
  },
  {
    icon: FileCheck,
    title: "Paperwork",
    description:
      "All title transfer paperwork handled for you.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Carbid?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make selling your car simple, fast and
            hassle-free with our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}