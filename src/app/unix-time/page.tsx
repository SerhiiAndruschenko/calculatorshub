import type { Metadata } from "next";
import UnixTimeConverter from "@/components/UnixTimeConverter";

export const metadata: Metadata = {
  title: "Unix Time Converter - Convert Unix Timestamps to Human Dates | CalculatorsHub",
  description: "Convert between Unix timestamps and human-readable dates with our comprehensive Unix time converter. Works locally in your browser.",
  keywords: "unix time converter, unix timestamp converter, epoch time converter, convert unix timestamp, unix to date, date to unix",
};

export default function UnixTimePage() {
  return <UnixTimeConverter />;
}
