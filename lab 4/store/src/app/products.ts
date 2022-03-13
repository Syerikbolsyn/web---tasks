export interface Product {
  img: File;
  name: string;
  description: string;
  rating: number;
}

export const products = [
  {
    img: "../images/1.jpg",
    name: 'Nintendo Controller',
    description: 'Show off your love for Nintendo with this adjustable controller hat!',
    rating: 4.8
  },
  {
    img: "../images/2.jpg",
    name: 'Phone Mini',
    description: 'A great phone with one of the best cameras',
    rating: 4
  },
  {
    img: "../images/3.jpg",
    name: 'Phone Standard',
    description: '',
    rating: 3
  }
];


