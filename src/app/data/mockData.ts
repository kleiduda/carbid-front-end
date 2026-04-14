export interface VehicleSubmission {
  id: string;
  status: "Active" | "Pending" | "Sold" | "Cancelled";
  vehicle: {
    year: string;
    make: string;
    model: string;
    zipCode: string;
    phone: string;
  };
  details: {
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
  };
  titleAndLocation: {
    hasTitle: string;
    address: string;
    vehicleColor: string;
  };
  vin: string;
}

export const MOCK_SUBMISSIONS: VehicleSubmission[] = [
  {
    id: "1",
    status: "Active",
    vehicle: { 
      year: "2020", 
      make: "Honda", 
      model: "Civic", 
      zipCode: "06622", 
      phone: "(11) 98097-6622" 
    },
    details: { 
      mileage: "10500", 
      doesItDrive: "yes", 
      tiresInflated: "yes",
      wheelsAttached: "yes",
      frontCondition: "minor damage",
      rearCondition: "good",
      leftSideCondition: "good",
      rightSideCondition: "minor damage",
      engineCondition: "runs", 
      glassCondition: "cracked",
      floodDamage: "no",
      fireDamage: "no",
      airbagDeployed: "no"
    },
    titleAndLocation: { 
      hasTitle: "yes", 
      address: "123 Maple Avenue, Deer Park, WI 54007", 
      vehicleColor: "Modern Steel Metallic" 
    },
    vin: "4T1BE32KX5U975028"
  },
  {
    id: "2",
    status: "Pending",
    vehicle: { 
      year: "2018", 
      make: "Ford", 
      model: "F-150", 
      zipCode: "77001", 
      phone: "(713) 555-0122" 
    },
    details: { 
      mileage: "82000", 
      doesItDrive: "no", 
      tiresInflated: "no",
      wheelsAttached: "yes",
      frontCondition: "major damage",
      rearCondition: "minor damage",
      leftSideCondition: "minor damage",
      rightSideCondition: "good",
      engineCondition: "does-not-run", 
      glassCondition: "broken",
      floodDamage: "yes",
      fireDamage: "no",
      airbagDeployed: "yes"
    },
    titleAndLocation: { 
      hasTitle: "no", 
      address: "456 Houston St, Houston, TX 77002", 
      vehicleColor: "Oxford White" 
    },
    vin: "1FTFW1RG5JFA05678"
  },
  {
    id: "3",
    status: "Sold",
    vehicle: { 
      year: "2022", 
      make: "Tesla", 
      model: "Model 3", 
      zipCode: "94105", 
      phone: "(415) 555-9988" 
    },
    details: { 
      mileage: "5200", 
      doesItDrive: "yes", 
      tiresInflated: "yes",
      wheelsAttached: "yes",
      frontCondition: "good",
      rearCondition: "good",
      leftSideCondition: "good",
      rightSideCondition: "good",
      engineCondition: "runs", 
      glassCondition: "good",
      floodDamage: "no",
      fireDamage: "no",
      airbagDeployed: "no"
    },
    titleAndLocation: { 
      hasTitle: "yes", 
      address: "888 Market St, San Francisco, CA 94103", 
      vehicleColor: "Pearl White Multi-Coat" 
    },
    vin: "5YJ3E1EB0PF654321"
  }
];