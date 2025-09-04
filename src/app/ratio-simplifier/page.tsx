import type { Metadata } from "next";
import RatioSimplifier from "@/components/RatioSimplifier";

export const metadata: Metadata = {
  title: "Ratio Simplifier - Simplify Ratios to Lowest Terms | CalculatorsHub",
  description: "Simplify ratios to their lowest terms with our comprehensive ratio simplifier. Works locally in your browser.",
  keywords: "ratio simplifier, simplify ratio, reduce ratio, ratio calculator, lowest terms calculator",
};

export default function RatioSimplifierPage() {
  return <RatioSimplifier />;
}
