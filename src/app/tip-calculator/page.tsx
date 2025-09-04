import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Tip Calculator - Calculate Tips and Split Bills | CalculatorsHub",
  description: "Calculate tips, split bills, and total amounts with our comprehensive tip calculator. Works locally in your browser.",
  keywords: "tip calculator, calculate tip, bill splitter, gratuity calculator, restaurant tip calculator",
};

export default function TipCalculatorPage() {
  return <TipCalculator />;
}
