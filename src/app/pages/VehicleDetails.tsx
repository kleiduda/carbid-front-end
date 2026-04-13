import { useNavigate, useLocation } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

interface VehicleData {
  year: string;
  make: string;
  model: string;
  zipCode: string;
  phone: string;
}

interface FullVehicleFormData extends VehicleData {
  mileage: string;
  doesItDrive: string;
  tiresInflated: string;
  wheelsAttached: string;
  frontCondition: string;
  rearCondition: string;
  leftSideCondition: string;
  rightSideCondition: string;
  engineCondition: string;
  floodDamage: string;
  fireDamage: string;
  glassCondition: string;
  airbagDeployed: string;
}

export default function VehicleDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicleData = (location.state as { vehicleData?: VehicleData })?.vehicleData;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FullVehicleFormData>({
    defaultValues: {
      ...vehicleData,
      mileage: "",
      doesItDrive: "",
      tiresInflated: "",
      wheelsAttached: "",
      frontCondition: "",
      rearCondition: "",
      leftSideCondition: "",
      rightSideCondition: "",
      engineCondition: "",
      floodDamage: "",
      fireDamage: "",
      glassCondition: "",
      airbagDeployed: "",
    },
  });

  const onSubmit = (data: FullVehicleFormData) => {
    const jsonStep2 = {
      vehicle: {
        year: vehicleData?.year,
        make: vehicleData?.make,
        model: vehicleData?.model,
        zipCode: vehicleData?.zipCode,
        phone: vehicleData?.phone,
        details: {
          mileage: data.mileage,
          doesItDrive: data.doesItDrive,
          tiresInflated: data.tiresInflated,
          wheelsAttached: data.wheelsAttached,
          frontCondition: data.frontCondition,
          rearCondition: data.rearCondition,
          leftSideCondition: data.leftSideCondition,
          rightSideCondition: data.rightSideCondition,
          engineCondition: data.engineCondition,
          floodDamage: data.floodDamage,
          fireDamage: data.fireDamage,
          glassCondition: data.glassCondition,
          airbagDeployed: data.airbagDeployed,
        }
      }
    };

    console.log("=== STEP 2: VEHICLE DETAILS ===");
    console.log(JSON.stringify(jsonStep2, null, 2));

    navigate("/call-later", { state: jsonStep2 });
  };

  // Componente auxiliar para renderizar campos Yes/No repetitivos
  const YesNoField = ({ name, label, control, error, className }: any) => (
    <div className={`bg-gray-50 p-5 rounded-lg border border-gray-200 ${className}`}>
      <Label className="text-base font-semibold mb-3 block text-gray-700">{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Required" }}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className="flex gap-4"
          >
            {/* Opção YES */}
            <div className={`flex-1 border-2 rounded-md transition-all ${field.value === "yes" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300 bg-white"
              }`}>
              <Label
                htmlFor={`${name}-yes`}
                className="flex items-center space-x-3 p-3 w-full h-full cursor-pointer"
              >
                <RadioGroupItem value="yes" id={`${name}-yes`} />
                <span className="font-normal flex-1">Yes</span>
              </Label>
            </div>

            {/* Opção NO */}
            <div className={`flex-1 border-2 rounded-md transition-all ${field.value === "no" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300 bg-white"
              }`}>
              <Label
                htmlFor={`${name}-no`}
                className="flex items-center space-x-3 p-3 w-full h-full cursor-pointer"
              >
                <RadioGroupItem value="no" id={`${name}-no`} />
                <span className="font-normal flex-1">No</span>
              </Label>
            </div>
          </RadioGroup>
        )}
      />
      {error && <p className="text-red-500 text-[10px] mt-1 italic">{error.message}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Vehicle Info</span>
          </button>

          {vehicleData && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg mb-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Vehicle Details</h2>
              <p className="text-blue-100 text-lg">
                {vehicleData.year} {vehicleData.make} {vehicleData.model}
              </p>
              <p className="text-blue-50 text-sm opacity-90">
                ZIP: {vehicleData.zipCode} | Phone: {vehicleData.phone}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 1. OPERATIONAL STATUS */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Operational Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label className="text-base font-semibold mb-3 block">Current Mileage</Label>
                  <Controller
                    name="mileage"
                    control={control}
                    rules={{
                      required: "Mileage is required",
                      min: { value: 0, message: "Mileage cannot be negative" }
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        min="0"
                        onKeyDown={(e) => {
                          if (e.key === '-' || e.key === 'e' || e.key === ',') {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          const val = Math.abs(parseInt(e.target.value) || 0);
                          field.onChange(val.toString());
                        }}
                        placeholder="Enter mileage"
                        className={`h-12 max-w-xs ${errors.mileage ? "border-red-500" : ""}`}
                      />
                    )}
                  />
                  {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage.message}</p>}
                </div>

                <YesNoField name="doesItDrive" label="Does it drive?" control={control} error={errors.doesItDrive} />
                <YesNoField name="tiresInflated" label="Are the tires inflated?" control={control} error={errors.tiresInflated} />
                <YesNoField
                  name="wheelsAttached"
                  label="Are all wheels attached?"
                  control={control}
                  error={errors.wheelsAttached}
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* 2. BODY CONDITION */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Body Condition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {['frontCondition', 'rearCondition', 'leftSideCondition', 'rightSideCondition'].map((name) => (
                  <div key={name} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <Label className="text-base font-semibold mb-3 block capitalize">{name.replace('Condition', '').replace(/([A-Z])/g, ' $1')}</Label>
                    <Controller
                      name={name as any}
                      control={control}
                      rules={{ required: "Required" }}
                      render={({ field }) => (
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                          {['Good', 'Minor Damage', 'Major Damage'].map((val) => (
                            <div
                              key={val}
                              className={`border-2 rounded-md transition-all ${field.value === val.toLowerCase() ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300 bg-white"
                                }`}
                            >
                              <Label
                                htmlFor={`${name}-${val}`}
                                className="flex items-center space-x-3 p-3 w-full h-full cursor-pointer"
                              >
                                <RadioGroupItem value={val.toLowerCase()} id={`${name}-${val}`} />
                                <span className="font-normal flex-1">{val}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    />
                    {errors[name as keyof FullVehicleFormData] && <p className="text-red-500 text-xs mt-2">Required</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. ENGINE & DAMAGE */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Engine & Damage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Engine */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">Engine Status</Label>
                  <Controller
                    name="engineCondition"
                    control={control}
                    rules={{ required: "Required" }}
                    render={({ field }) => (
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                        {['Runs', 'Does Not Run', 'Missing'].map((val) => {
                          const id = `engine-${val.toLowerCase().replace(/\s+/g, '-')}`;
                          return (
                            <div
                              key={id}
                              className={`border-2 rounded-md transition-all ${field.value === val.toLowerCase().replace(/\s+/g, '-') ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                                }`}
                            >
                              <Label htmlFor={id} className="flex items-center space-x-3 p-3 w-full h-full cursor-pointer">
                                <RadioGroupItem value={val.toLowerCase().replace(/\s+/g, '-')} id={id} />
                                <span className="font-normal flex-1">{val}</span>
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    )}
                  />
                  {errors.engineCondition && <p className="text-red-500 text-[10px] mt-1 italic">Required</p>}
                </div>

                {/* Glass */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">Glass Condition</Label>
                  <Controller
                    name="glassCondition"
                    control={control}
                    rules={{ required: "Required" }}
                    render={({ field }) => (
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                        {['Good', 'Cracked', 'Broken'].map((val) => {
                          const id = `glass-${val.toLowerCase()}`;
                          return (
                            <div
                              key={id}
                              className={`border-2 rounded-md transition-all ${field.value === val.toLowerCase() ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                                }`}
                            >
                              <Label htmlFor={id} className="flex items-center space-x-3 p-3 w-full h-full cursor-pointer">
                                <RadioGroupItem value={val.toLowerCase()} id={id} />
                                <span className="font-normal flex-1">{val}</span>
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    )}
                  />
                  {errors.glassCondition && <p className="text-red-500 text-[10px] mt-1 italic">Required</p>}
                </div>

                <YesNoField name="floodDamage" label="Has the car been in a flood?" control={control} error={errors.floodDamage} />
                <YesNoField name="fireDamage" label="Has the car been in a fire?" control={control} error={errors.fireDamage} />
                <YesNoField
                  name="airbagDeployed"
                  label="Has the airbag been deployed?"
                  control={control}
                  error={errors.airbagDeployed}
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col sm:flex-row justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="h-12 px-8 border-2 font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-12 px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl shadow-lg active:bg-blue-800 transition-colors w-full sm:w-auto"
              >
                Get Offer
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}