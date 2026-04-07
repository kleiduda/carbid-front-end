import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Sell Your Car?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get your free quote today and see why thousands of
          customers trust Carbid for their vehicle needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg">
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white hover:bg-blue-700 h-14 px-8 text-lg text-[#000000]"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call (123) 456-7890
          </Button>
        </div>
      </div>
    </section>
  );
}