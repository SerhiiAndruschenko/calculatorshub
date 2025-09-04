import type { Metadata } from "next";
import LoanCalculator from "@/components/LoanCalculator";

export const metadata: Metadata = {
  title: "Loan Interest Calculator - Calculate Simple Interest | CalculatorsHub",
  description: "Calculate simple interest on loans and investments with our comprehensive loan calculator. Works locally in your browser.",
  keywords: "loan calculator, simple interest calculator, calculate loan interest, investment calculator, simple interest formula",
};

export default function LoanCalculatorPage() {
  return <LoanCalculator />;
}
