import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Exact Age Between Dates | CalculatorsHub",
  description: "Calculate exact age between two dates with our comprehensive age calculator. Works locally in your browser.",
  keywords: "age calculator, calculate age, date calculator, birthday calculator, age between dates",
};

export default function AgeCalculatorPage() {
  return <AgeCalculator />;
}
