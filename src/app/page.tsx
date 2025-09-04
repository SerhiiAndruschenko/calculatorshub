import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CalculatorsHub - Essential Calculators Collection | Free & No Limits",
  description:
    "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters. All tools work locally in your browser.",
  keywords:
    "calculatorshub, calculators, percentage calculator, percentage increase, discount calculator, tip calculator, age calculator, date difference, unix time converter, vat calculator, gst calculator, loan calculator, fraction to decimal, ratio simplifier, unit converter, length converter, mass converter, temperature converter",
  openGraph: {
    title: "CalculatorsHub - Essential Calculators Collection",
    description:
      "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters.",
    url: "https://calculatorshub.tech",
    type: "website",
    siteName: "CalculatorsHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalculatorsHub - Essential Calculators Collection",
    description:
      "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters.",
  },
  alternates: {
    canonical: "https://calculatorshub.tech",
  },
};

export default function Home() {
  const calculators = [
    // Percentage Calculators
    {
      title: "Percentage Calculator",
      description: "Calculate percentages, find values, and solve percentage problems",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: "/percentage-calculator",
      gradient: "from-blue-600 to-purple-600",
      hoverGradient: "from-blue-700 to-purple-700",
      category: "Percentages"
    },
    {
      title: "Percentage Increase/Decrease",
      description: "Calculate percentage changes between two values",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      href: "/percentage-change",
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-700 to-teal-700",
      category: "Percentages"
    },
    {
      title: "Discount Calculator",
      description: "Calculate discounts, final prices, and savings amounts",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      href: "/discount-calculator",
      gradient: "from-orange-600 to-amber-600",
      hoverGradient: "from-orange-700 to-amber-700",
      category: "Percentages"
    },
    {
      title: "Tip Calculator",
      description: "Calculate tips, split bills, and total amounts",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      href: "/tip-calculator",
      gradient: "from-red-600 to-pink-600",
      hoverGradient: "from-red-700 to-pink-700",
      category: "Percentages"
    },
    
    // Date/Time Calculators
    {
      title: "Age Calculator",
      description: "Calculate exact age between two dates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: "/age-calculator",
      gradient: "from-indigo-600 to-blue-600",
      hoverGradient: "from-indigo-700 to-blue-700",
      category: "Date/Time"
    },
    {
      title: "Date Difference",
      description: "Calculate the difference between two dates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/date-difference",
      gradient: "from-purple-600 to-violet-600",
      hoverGradient: "from-purple-700 to-violet-700",
      category: "Date/Time"
    },
    {
      title: "Add/Subtract Days",
      description: "Add or subtract days from a given date",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      href: "/date-calculator",
      gradient: "from-cyan-600 to-blue-600",
      hoverGradient: "from-cyan-700 to-blue-700",
      category: "Date/Time"
    },
    {
      title: "Unix Time Converter",
      description: "Convert between Unix timestamps and human dates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/unix-time",
      gradient: "from-emerald-600 to-teal-600",
      hoverGradient: "from-emerald-700 to-teal-700",
      category: "Date/Time"
    },
    
    // Financial Calculators
    {
      title: "VAT/GST Calculator",
      description: "Calculate VAT, GST, and tax-inclusive amounts",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      href: "/vat-calculator",
      gradient: "from-yellow-600 to-orange-600",
      hoverGradient: "from-yellow-700 to-orange-700",
      category: "Financial"
    },
    {
      title: "Loan Interest Calculator",
      description: "Calculate simple interest on loans and investments",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      href: "/loan-calculator",
      gradient: "from-gray-600 to-slate-600",
      hoverGradient: "from-gray-700 to-slate-700",
      category: "Financial"
    },
    
    // Converters
    {
      title: "Fraction ↔ Decimal",
      description: "Convert between fractions and decimal numbers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      href: "/fraction-decimal",
      gradient: "from-blue-600 to-indigo-600",
      hoverGradient: "from-blue-700 to-indigo-700",
      category: "Converters"
    },
    {
      title: "Ratio Simplifier",
      description: "Simplify ratios to their lowest terms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      href: "/ratio-simplifier",
      gradient: "from-green-600 to-emerald-600",
      hoverGradient: "from-green-700 to-emerald-700",
      category: "Converters"
    },
    {
      title: "Unit Converter",
      description: "Convert between length, mass, and temperature units",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      href: "/unit-converter",
      gradient: "from-purple-600 to-violet-600",
      hoverGradient: "from-purple-700 to-violet-700",
      category: "Converters"
    },
  ];

  const categories = ["Percentages", "Date/Time", "Financial", "Converters"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto p-6 pb-12 space-y-12">
        {/* CalculatorsHub Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl mb-8 glow">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            CalculatorsHub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Essential calculators that work locally in your browser - no server limits, 
            complete privacy. Boost your productivity with our comprehensive collection of calculators.
          </p>
        </div>

        {/* Calculators by Category */}
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">
              {category} Calculators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators
                .filter((calculator) => calculator.category === category)
                .map((calculator, index) => (
                  <Link key={index} href={calculator.href} className="group">
                    <div
                      className={`relative h-full p-6 rounded-2xl border-2 border-gray-700/50 bg-gray-800/80 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group-hover:border-gray-500/50`}
                    >
                      {/* Background glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${calculator.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10 space-y-4">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${calculator.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <div className="text-white">{calculator.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                            {calculator.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {calculator.description}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          <span className="text-xs font-medium">Try Calculator</span>
                          <svg
                            className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
