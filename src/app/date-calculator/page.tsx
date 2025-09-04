import type { Metadata } from "next";
import DateCalculator from "@/components/DateCalculator";

export const metadata: Metadata = {
  title: "Date Calculator - Add or Subtract Days from Date | CalculatorsHub",
  description: "Add or subtract days from a given date with our comprehensive date calculator. Works locally in your browser.",
  keywords: "date calculator, add days to date, subtract days from date, date arithmetic calculator",
};

export default function DateCalculatorPage() {
  return <DateCalculator />;
}
