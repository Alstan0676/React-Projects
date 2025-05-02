export interface User {
  id: string;
  name: string | null;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface Cruise {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  capacity: number;
  imageUrl: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  cruiseId: string;
  quantity: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  cruise?: Cruise;
}

export interface Review {
  id: string;
  rating: number;
  comment: string | null;
  userId: string;
  cruiseId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  cruise?: Cruise;
} 