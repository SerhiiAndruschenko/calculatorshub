import type { Metadata } from "next";
import DateDifferenceCalculator from "@/components/DateDifferenceCalculator";

export const metadata: Metadata = {
  title: "Date Difference Calculator - Calculate Time Between Dates | CalculatorsHub",
  description: "Calculate the difference between two dates with our comprehensive date difference calculator. Works locally in your browser.",
  keywords: "date difference calculator, calculate time between dates, date interval calculator, time span calculator",
};

export default function DateDifferencePage() {
  return <DateDifferenceCalculator />;
}
