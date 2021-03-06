export interface IDataCars {
    mileage: number;
    model_year: number;
    manufacturing_year: number;
    ad_selling_price: number;
    evaluation_type: string;
    version_uuid: string;
    name: string;
    transmission_type: string;
    fuel_type: string;
    vehicle_uuid: string;
    model_name: string;
    version_name: string;
    image: string;
    brand_name: string;
    model_uuid: string;
    brand_uuid: string;
    expired: boolean;
    date_test: Date;
}

export interface IStatusTestDriver {
    vehicle_uuid: string;
    date_test: string;
    expired: boolean;
}

export interface ILastLeads {
    id: string;
    image: string;
    quantity: number;
    name: string;
}

export interface ICustomer {
    id: string;
    name: string;
    lastName: string;
    email: string;
    telephone: number;
}
