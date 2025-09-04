import type { Metadata } from "next";
import PercentageChangeCalculator from "@/components/PercentageChangeCalculator";

export const metadata: Metadata = {
  title: "Percentage Change Calculator - Calculate Increase/Decrease | CalculatorsHub",
  description: "Calculate percentage changes between two values with our percentage increase/decrease calculator. Works locally in your browser.",
  keywords: "percentage change calculator, percentage increase, percentage decrease, calculate change, growth rate calculator",
};

export default function PercentageChangeCalculatorPage() {
  return <PercentageChangeCalculator />;
}
