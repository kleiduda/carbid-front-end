import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";
interface AllSubmissionData {
  year?: string;
  make?: string;
  model?: string;
  zipCode?: string;
  phone?: string;
  mileage?: string;
  doesItDrive?: string;
  hasTitle: string;
  address: string;
  vehicleColor: string;
  vin: string;
}

export default function CallLater() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousData = location.state || {};

  const [step, setStep] = useState(1);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AllSubmissionData>({
    defaultValues: {
      ...previousData,
      hasTitle: "",
      address: "",
      vehicleColor: "",
      vin: "",
    },
  });

  const onStep1Submit = () => {
    setStep(2);
  };

  const onFinalSubmit = (data: AllSubmissionData) => {
    console.log("=== FINAL COMPLETE SUBMISSION JSON ===");
    console.log(JSON.stringify(data, null, 2));
    navigate("/success");
  };

  const handleSkipVIN = () => {
    const currentData = getValues();
    const finalData = { ...currentData, vin: "Not provided" };
    console.log("=== SUBMISSION WITHOUT VIN ===");
    console.log(JSON.stringify(finalData, null, 2));
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">

            {step === 1 && (
              <form onSubmit={handleSubmit(onStep1Submit)}>
                <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">Title and Location</h1>
                <p className="text-gray-600 mb-8">Please enter the title and car location info</p>

                <h2 className="text-xl font-bold text-[#1e3a8a] mb-6 border-l-4 border-blue-600 pl-3">
                  Car Title Information
                </h2>

                <div className="mb-8">
                  <label className="block text-gray-900 font-semibold mb-4 text-lg">
                    Do you have the title for the car?
                  </label>
                  <Controller
                    name="hasTitle"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <div className="flex gap-4">
                        <div className={`flex-1 border-2 rounded-xl transition-all ${field.value === "yes" ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"}`}>
                          <label className="flex items-center justify-center py-4 cursor-pointer w-full">
                            <input
                              type="radio"
                              className="hidden"
                              onChange={() => field.onChange("yes")}
                              checked={field.value === "yes"}
                            />
                            <span className={`font-bold ${field.value === "yes" ? "text-blue-600" : "text-gray-500"}`}>YES</span>
                          </label>
                        </div>
                        <div className={`flex-1 border-2 rounded-xl transition-all ${field.value === "no" ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"}`}>
                          <label className="flex items-center justify-center py-4 cursor-pointer w-full">
                            <input
                              type="radio"
                              className="hidden"
                              onChange={() => field.onChange("no")}
                              checked={field.value === "no"}
                            />
                            <span className={`font-bold ${field.value === "no" ? "text-blue-600" : "text-gray-500"}`}>NO</span>
                          </label>
                        </div>
                      </div>
                    )}
                  />
                  {errors.hasTitle && <p className="text-red-500 text-xs mt-2">{errors.hasTitle.message}</p>}
                </div>

                <h2 className="text-xl font-bold text-[#1e3a8a] mb-6 border-l-4 border-blue-600 pl-3">
                  Car Location & Color
                </h2>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Address</label>
                  <Controller
                    name="address"
                    control={control}
                    rules={{ required: "Address is required", minLength: { value: 5, message: "Too short" } }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter pickup address"
                        className={`w-full px-4 py-4 rounded-xl border ${errors.address ? "border-red-500" : "border-gray-300"} bg-blue-50 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                      />
                    )}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div className="mb-10">
                  <label className="block text-gray-700 font-semibold mb-2">Vehicle Color</label>
                  <div className="relative">
                    <Controller
                      name="vehicleColor"
                      control={control}
                      rules={{ required: "Color is required" }}
                      render={({ field }) => (
                        <select
                          {...field}
                          className={`w-full px-4 py-4 rounded-xl border ${errors.vehicleColor ? "border-red-500" : "border-gray-300"} bg-blue-50 appearance-none outline-none focus:ring-2 focus:ring-blue-200`}
                        >
                          <option value="">Select a color</option>
                          {["Black", "White", "Silver", "Gray", "Red", "Blue", "Brown", "Green", "Beige", "Orange", "Gold", "Yellow", "Purple", "Other"].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      )}
                    />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.vehicleColor && <p className="text-red-500 text-xs mt-1">{errors.vehicleColor.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4169e1] hover:bg-[#3457cc] text-white font-bold text-xl py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
                >
                  Continue
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit(onFinalSubmit)}>
                <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">VIN Information</h1>
                <p className="text-gray-700 mb-8">Almost there! We just need your VIN.</p>

                <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                  <h2 className="text-lg font-bold text-[#374a7d] leading-snug">
                    In order to schedule a pickup appointment we need a valid VIN.
                  </h2>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Vehicle Identification Number (VIN)</label>
                  <div className="relative">
                    <Controller
                      name="vin"
                      control={control}
                      rules={{
                        required: "VIN is required",
                        pattern: { value: /^[A-HJ-NPR-Z0-9]{17}$/i, message: "VIN must be 17 valid characters" }
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                          placeholder="Enter 17-character VIN"
                          maxLength={17}
                          className={`w-full px-4 py-4 pr-12 rounded-xl border ${errors.vin ? "border-red-500" : "border-gray-300"} bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all uppercase`}
                        />
                      )}
                    />
                    <HelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 cursor-help" />
                  </div>
                  {errors.vin && <p className="text-red-500 text-xs mt-1">{errors.vin.message}</p>}
                </div>

                <div className="mb-8 text-center">
                  <button
                    type="button"
                    onClick={handleSkipVIN}
                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-4"
                  >
                    I cannot provide a VIN now
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4169e1] hover:bg-[#3457cc] text-white font-bold text-xl py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
                >
                  Complete Submission
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