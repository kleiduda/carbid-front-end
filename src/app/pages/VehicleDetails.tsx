import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

interface VehicleData {
  year: string;
  make: string;
  model: string;
  zipCode: string;
  phone: string;
}

export default function VehicleDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicleData = (
    location.state as { vehicleData?: VehicleData }
  )?.vehicleData;

  // Car Conditions
  const [mileage, setMileage] = useState("");
  const [doesItDrive, setDoesItDrive] = useState("");
  const [tiresInflated, setTiresInflated] = useState("");
  const [wheelsAttached, setWheelsAttached] = useState("");

  // Body Condition
  const [frontCondition, setFrontCondition] = useState("");
  const [rearCondition, setRearCondition] = useState("");
  const [leftSideCondition, setLeftSideCondition] =
    useState("");
  const [rightSideCondition, setRightSideCondition] =
    useState("");
  const [engineCondition, setEngineCondition] = useState("");
  const [floodDamage, setFloodDamage] = useState("");
  const [fireDamage, setFireDamage] = useState("");
  const [glassCondition, setGlassCondition] = useState("");
  const [airbagDeployed, setAirbagDeployed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const detailsData = {
      ...vehicleData,
      mileage,
      doesItDrive,
      tiresInflated,
      wheelsAttached,
      frontCondition,
      rearCondition,
      leftSideCondition,
      rightSideCondition,
      engineCondition,
      floodDamage,
      fireDamage,
      glassCondition,
      airbagDeployed,
    };

    console.log("Complete Vehicle Data:", detailsData);
    // Navegar para a página de oferta
    navigate("/offer-details", { state: detailsData });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {/* Vehicle Info Header */}
          {vehicleData && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg mb-8 text-white">
              <h2 className="text-3xl font-bold mb-2">
                Vehicle Details
              </h2>
              <p className="text-blue-100 text-lg">
                {vehicleData.year} {vehicleData.make}{" "}
                {vehicleData.model}
              </p>
              <p className="text-blue-100">
                ZIP Code: {vehicleData.zipCode} | Telephone:{" "}
                {vehicleData.phone}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Car Conditions Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
                Car Conditions
              </h3>

              {/* Grid layout for questions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Mileage */}
                <div className="lg:col-span-2">
                  <Label
                    htmlFor="mileage"
                    className="text-base font-semibold mb-3 block text-gray-700"
                  >
                    Mileage
                  </Label>
                  <Input
                    id="mileage"
                    type="number"
                    placeholder="Enter mileage"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="h-12 max-w-md"
                    required
                  />
                </div>

                {/* Does it drive */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Does it drive?
                  </Label>
                  <RadioGroup
                    value={doesItDrive}
                    onValueChange={setDoesItDrive}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="yes"
                        id="drive-yes"
                      />
                      <Label
                        htmlFor="drive-yes"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="no"
                        id="drive-no"
                      />
                      <Label
                        htmlFor="drive-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Tires Inflated */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Are the tires inflated?
                  </Label>
                  <RadioGroup
                    value={tiresInflated}
                    onValueChange={setTiresInflated}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="yes"
                        id="tires-yes"
                      />
                      <Label
                        htmlFor="tires-yes"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="no"
                        id="tires-no"
                      />
                      <Label
                        htmlFor="tires-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Wheels Attached */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 lg:col-span-2">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Are all the wheels attached to the car?
                  </Label>
                  <RadioGroup
                    value={wheelsAttached}
                    onValueChange={setWheelsAttached}
                    required
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                        <RadioGroupItem
                          value="yes"
                          id="wheels-yes"
                        />
                        <Label
                          htmlFor="wheels-yes"
                          className="cursor-pointer font-normal flex-1"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                        <RadioGroupItem
                          value="no"
                          id="wheels-no"
                        />
                        <Label
                          htmlFor="wheels-no"
                          className="cursor-pointer font-normal flex-1"
                        >
                          No
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Body Condition Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
                Body Condition
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Front */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Front
                  </Label>
                  <RadioGroup
                    value={frontCondition}
                    onValueChange={setFrontCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="good"
                        id="front-good"
                      />
                      <Label
                        htmlFor="front-good"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Good
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="minor-damage"
                        id="front-minor"
                      />
                      <Label
                        htmlFor="front-minor"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Minor Damage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="major-damage"
                        id="front-major"
                      />
                      <Label
                        htmlFor="front-major"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Major Damage
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Rear */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Rear
                  </Label>
                  <RadioGroup
                    value={rearCondition}
                    onValueChange={setRearCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="good"
                        id="rear-good"
                      />
                      <Label
                        htmlFor="rear-good"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Good
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="minor-damage"
                        id="rear-minor"
                      />
                      <Label
                        htmlFor="rear-minor"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Minor Damage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="major-damage"
                        id="rear-major"
                      />
                      <Label
                        htmlFor="rear-major"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Major Damage
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Left Side */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Left Side
                  </Label>
                  <RadioGroup
                    value={leftSideCondition}
                    onValueChange={setLeftSideCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="good"
                        id="left-good"
                      />
                      <Label
                        htmlFor="left-good"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Good
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="minor-damage"
                        id="left-minor"
                      />
                      <Label
                        htmlFor="left-minor"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Minor Damage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="major-damage"
                        id="left-major"
                      />
                      <Label
                        htmlFor="left-major"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Major Damage
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Right Side */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Right Side
                  </Label>
                  <RadioGroup
                    value={rightSideCondition}
                    onValueChange={setRightSideCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="good"
                        id="right-good"
                      />
                      <Label
                        htmlFor="right-good"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Good
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="minor-damage"
                        id="right-minor"
                      />
                      <Label
                        htmlFor="right-minor"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Minor Damage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="major-damage"
                        id="right-major"
                      />
                      <Label
                        htmlFor="right-major"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Major Damage
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Engine */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Engine
                  </Label>
                  <RadioGroup
                    value={engineCondition}
                    onValueChange={setEngineCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="runs"
                        id="engine-runs"
                      />
                      <Label
                        htmlFor="engine-runs"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Runs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="does-not-run"
                        id="engine-no"
                      />
                      <Label
                        htmlFor="engine-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Does Not Run
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="missing"
                        id="engine-missing"
                      />
                      <Label
                        htmlFor="engine-missing"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Missing
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Flood Damage */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Has the car been in a flood?
                  </Label>
                  <RadioGroup
                    value={floodDamage}
                    onValueChange={setFloodDamage}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="yes"
                        id="flood-yes"
                      />
                      <Label
                        htmlFor="flood-yes"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="no"
                        id="flood-no"
                      />
                      <Label
                        htmlFor="flood-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Fire Damage */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Has the car been in a fire?
                  </Label>
                  <RadioGroup
                    value={fireDamage}
                    onValueChange={setFireDamage}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="yes"
                        id="fire-yes"
                      />
                      <Label
                        htmlFor="fire-yes"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem value="no" id="fire-no" />
                      <Label
                        htmlFor="fire-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Glass */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Glass
                  </Label>
                  <RadioGroup
                    value={glassCondition}
                    onValueChange={setGlassCondition}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="good"
                        id="glass-good"
                      />
                      <Label
                        htmlFor="glass-good"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Good
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="cracked"
                        id="glass-cracked"
                      />
                      <Label
                        htmlFor="glass-cracked"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Cracked
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="broken"
                        id="glass-broken"
                      />
                      <Label
                        htmlFor="glass-broken"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Broken
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Airbag */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <Label className="text-base font-semibold mb-3 block text-gray-700">
                    Has the airbag been deployed?
                  </Label>
                  <RadioGroup
                    value={airbagDeployed}
                    onValueChange={setAirbagDeployed}
                    required
                  >
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value="yes"
                        id="airbag-yes"
                      />
                      <Label
                        htmlFor="airbag-yes"
                        className="cursor-pointer font-normal flex-1"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer mt-2">
                      <RadioGroupItem
                        value="no"
                        id="airbag-no"
                      />
                      <Label
                        htmlFor="airbag-no"
                        className="cursor-pointer font-normal flex-1"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="h-12 px-8 text-base border-2 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  Get offer
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}