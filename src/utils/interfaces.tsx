export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  reviews: number;
  condition: string;
  imageUrl: string;
  deliveryDate: string;
  orderWithin: string;
  description: string;
}

export interface ShippingDetails {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  nameOnCard: string;
}
