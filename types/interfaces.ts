export interface IProps {
  children: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}
