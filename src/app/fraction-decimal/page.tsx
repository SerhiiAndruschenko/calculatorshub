import type { Metadata } from "next";
import FractionDecimalConverter from "@/components/FractionDecimalConverter";

export const metadata: Metadata = {
  title: "Fraction to Decimal Converter - Convert Fractions and Decimals | CalculatorsHub",
  description: "Convert between fractions and decimal numbers with our comprehensive fraction-decimal converter. Works locally in your browser.",
  keywords: "fraction to decimal converter, decimal to fraction, convert fraction, fraction calculator, decimal converter",
};

export default function FractionDecimalPage() {
  return <FractionDecimalConverter />;
}
