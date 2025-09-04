import type { Metadata } from "next";
import UnitConverter from "@/components/UnitConverter";

export const metadata: Metadata = {
  title: "Unit Converter - Convert Length, Mass, and Temperature | CalculatorsHub",
  description: "Convert between length, mass, and temperature units with our comprehensive unit converter. Works locally in your browser.",
  keywords: "unit converter, length converter, mass converter, temperature converter, metric imperial converter",
};

export default function UnitConverterPage() {
  return <UnitConverter />;
}
