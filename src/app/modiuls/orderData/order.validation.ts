import { z } from "zod";

const orderDataSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  userEmail: z.string().min(1, "User Email is required").email(),
  userPhone: z.string().min(8, "Phone number must be valid"), // Assuming it's a 10-digit number
  userDivision: z.string().min(1, "Division is required"),
  userDistric: z.string().min(1, "District is required"),
  userUpzala: z.string().min(1, "Upazila is required"),
  userAddress: z.string().min(1, "Address is required"),
  productsImage: z.string().min(1, "Product image URL is required"),
  paymentID: z.string().min(5).optional(),
  productsName: z.string().min(1, "Product name is required"),
  productsPrice: z.number().min(0, "Product price must be a positive number"),
  productsQuentity: z.number().min(1, "Quantity must be at least 1"),
  isDeleted: z.boolean().default(false),
  productsShipping: z
    .number()
    .min(0, "Shipping cost must be a positive number"),
  productsTotalPrice: z
    .number()
    .min(0, "Total price must be a positive number"),
});

export const OrderValidation = {
  orderDataSchema,
};
