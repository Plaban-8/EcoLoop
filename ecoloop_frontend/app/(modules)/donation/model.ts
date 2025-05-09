export interface DonationSave {
  title: string;
  location: string;
  description: string;
  category: string;
  image: string;
}
export interface DonationFetch {
  title: string;
  location: string;
  description: string;
  category: string;
  image: string;
  name: string;
  phone: string;
}
export interface User {
  name: string;
  phone: string;
  email: string;
  password: string;
  impact: number;
}