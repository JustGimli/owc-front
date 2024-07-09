import { Product } from "./interfaces";

export const productsList: Product[] = [
  {
    id: 1,
    title: "AirPods (2nd Gen) with Charging Case - White ",
    price: 99.99,
    originalPrice: 159.99,
    reviews: 384,
    imageUrls: [
      "/images/airpods2a_2.jpg",
      "/images/airpods2a_1.avif",
      "/images/airpods2a_3.jpg",
    ],
    description: "Description of the product goes here.",
    condition: "good",
  },
  {
    id: 2,
    title: "IPHONE -15 LOTTERY ",
    price: 0.99,
    originalPrice: 159.99,
    reviews: 59,
    imageUrls: ["/images/lottery_image.png"],
    description: "Description of the product goes here.",
    condition: "good",
  },
  {
    id: 3,
    title: "iPhone 11 Black 64GB (Unlocked)",
    price: 199.99,
    originalPrice: 499.99,
    reviews: 323,
    imageUrls: [
      "/images/iphone_11_1.avif",
      "/images/iphone_11_2.avif",
      "/images/iphone_11_3.avif",
      "/images/what_in_box.avif",
    ],
    description:
      "The iPhone 11 comes with a 6.1-inch Liquid Retina display and a dual-camera system for capturing stunning photos.",
    condition: "excellent",
  },
  {
    id: 4,
    title: "iPhone Xr Black 64GB (Unlocked)",
    price: 159.99,
    originalPrice: 349.99,
    reviews: 1025,
    imageUrls: [
      "/images/iphone_xr_1.avif",
      "/images/iphone_xr_2.avif",
      "/images/iphone_xr_3.avif",
      "/images/what_in_box.avif",
    ],
    description:
      "The iPhone Xr features a 6.1-inch Liquid Retina display and Face ID for secure authentication.",
    condition: "excellent",
  },
  {
    id: 5,
    title: "AirPods Pro (1st Gen)",
    price: 99.99,
    originalPrice: 129.99,
    reviews: 280,
    imageUrls: [
      "/images/airpods_pro_1.avif",
      "/images/airpods_pro_2.avif",
      "/images/airpods_pro_3.avif",
    ],
    description:
      "The AirPods Pro offer Active Noise Cancellation for immersive sound and a customizable fit.",
    condition: "good",
  },
];
