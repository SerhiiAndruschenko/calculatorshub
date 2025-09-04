import type { Metadata } from "next";
import PercentageCalculator from "@/components/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator - Calculate Percentages, Find Values | CalculatorsHub",
  description: "Calculate percentages, find values, and solve percentage problems with our comprehensive percentage calculator. Works locally in your browser.",
  keywords: "percentage calculator, calculate percentage, find percentage, percentage problems, math calculator",
};

export default function PercentageCalculatorPage() {
  return <PercentageCalculator />;
}
