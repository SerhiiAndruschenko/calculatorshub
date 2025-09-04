import type { Metadata } from "next";
import DiscountCalculator from "@/components/DiscountCalculator";

export const metadata: Metadata = {
  title: "Discount Calculator - Calculate Savings and Final Prices | CalculatorsHub",
  description: "Calculate discounts, final prices, and savings amounts with our comprehensive discount calculator. Works locally in your browser.",
  keywords: "discount calculator, calculate discount, final price, savings calculator, price after discount",
};

export default function DiscountCalculatorPage() {
  return <DiscountCalculator />;
}
