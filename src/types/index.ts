export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  available: boolean;
  description: string;
  features: string[];
  gallery: string[];
  deposit: number;
  mileageLimit: number;
  additionalDriver: number;
  insurance: string;
  requirements: string[];
}