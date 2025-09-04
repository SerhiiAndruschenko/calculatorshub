import type { Metadata } from "next";
import VatCalculator from "@/components/VatCalculator";

export const metadata: Metadata = {
  title: "VAT/GST Calculator - Calculate Tax and Final Amounts | CalculatorsHub",
  description: "Calculate VAT, GST, and tax-inclusive amounts with our comprehensive tax calculator. Works locally in your browser.",
  keywords: "vat calculator, gst calculator, tax calculator, calculate vat, calculate gst, tax inclusive calculator",
};

export default function VatCalculatorPage() {
  return <VatCalculator />;
}
