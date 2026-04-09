import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VehicleFormData {
  year: string;
  make: string;
  model: string;
  zipCode: string;
  phone: string;
}

export function Hero() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleFormData>({
    defaultValues: {
      year: "",
      make: "",
      model: "",
      zipCode: "",
      phone: "",
    }
  });

  const onSubmit = (data: VehicleFormData) => {
    console.log("Dados enviados com sucesso:", data);
    navigate("/vehicle-details", {
      state: { vehicleData: data },
    });
  };

  return (
    <section className="relative">
      <div className="relative min-h-[615px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763165524637-9067debdc80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwJTIwc2hvd3Jvb218ZW58MXx8fHwxNzczMTAyMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-start min-h-[615px] py-12 px-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

              <div className="grid grid-cols-2 gap-4">
                {/* YEAR */}
                <div className="flex flex-col">
                  <Controller
                    name="year"
                    control={control}
                    rules={{
                      required: "Required",
                      pattern: { value: /^\d{4}$/, message: "4 digits only" }
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        placeholder="Year"
                        className={`h-12 ${errors.year ? "border-red-500" : ""}`}
                        onChange={(e) => {
                          const val = e.target.value.slice(0, 4);
                          field.onChange(val);
                        }}
                      />
                    )}
                  />
                  {errors.year && <span className="text-red-500 text-[10px] mt-1">{errors.year.message}</span>}
                </div>

                {/* MAKE */}
                <div className="flex flex-col">
                  <Controller
                    name="make"
                    control={control}
                    rules={{ required: "Required", minLength: { value: 2, message: "Min 2 chars" } }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Make"
                        className={`h-12 ${errors.make ? "border-red-500" : ""}`}
                      />
                    )}
                  />
                  {errors.make && <span className="text-red-500 text-[10px] mt-1">{errors.make.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* MODEL */}
                <div className="flex flex-col">
                  <Controller
                    name="model"
                    control={control}
                    rules={{ required: "Required", minLength: { value: 2, message: "Min 2 chars" } }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Model"
                        className={`h-12 ${errors.model ? "border-red-500" : ""}`}
                      />
                    )}
                  />
                  {errors.model && <span className="text-red-500 text-[10px] mt-1">{errors.model.message}</span>}
                </div>

                {/* ZIP CODE */}
                <div className="flex flex-col">
                  <Controller
                    name="zipCode"
                    control={control}
                    rules={{
                      required: "Required",
                      pattern: { value: /^\d{5}$/, message: "5 digits" }
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Zip Code"
                        className={`h-12 ${errors.zipCode ? "border-red-500" : ""}`}
                        onChange={(e) => field.onChange(e.target.value.slice(0, 5))}
                      />
                    )}
                  />
                  {errors.zipCode && <span className="text-red-500 text-[10px] mt-1">{errors.zipCode.message}</span>}
                </div>
              </div>

              {/* PHONE */}
              <div className="flex flex-col">
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Required",
                    pattern: { value: /^\d{10,14}$/, message: "Invalid phone" }
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      placeholder="Phone"
                      className={`h-12 ${errors.phone ? "border-red-500" : ""}`}
                      onChange={(e) => field.onChange(e.target.value.slice(0, 14))}
                    />
                  )}
                />
                {errors.phone && <span className="text-red-500 text-[10px] mt-1">{errors.phone.message}</span>}
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