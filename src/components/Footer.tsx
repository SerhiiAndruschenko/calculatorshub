import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">CalculatorsHub</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Essential calculators that work locally in your browser. 
              Percentage calculators, date/time tools, financial calculators, and unit converters - all free to use.
            </p>
          </div>

          {/* All Calculators by Category */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Calculator Tools</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Percentage Calculators */}
              <div className="space-y-1">
                <h5 className="text-sm font-medium text-blue-300">Percentages</h5>
                <Link href="/percentage-calculator" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs">Basic Calculator</Link>
                <Link href="/percentage-change" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs">Change Calculator</Link>
                <Link href="/discount-calculator" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs">Discount Calculator</Link>
                <Link href="/tip-calculator" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs">Tip Calculator</Link>
              </div>
              
              {/* Date/Time Calculators */}
              <div className="space-y-1">
                <h5 className="text-sm font-medium text-cyan-300">Date/Time</h5>
                <Link href="/age-calculator" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs">Age Calculator</Link>
                <Link href="/date-difference" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs">Date Difference</Link>
                <Link href="/date-calculator" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs">Add/Subtract Days</Link>
                <Link href="/unix-time" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs">Unix Time Converter</Link>
              </div>
              
              {/* Financial Calculators */}
              <div className="space-y-1">
                <h5 className="text-sm font-medium text-indigo-300">Financial</h5>
                <Link href="/vat-calculator" className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xs">VAT/GST Calculator</Link>
                <Link href="/loan-calculator" className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xs">Loan Calculator</Link>
              </div>
              
              {/* Converters */}
              <div className="space-y-1">
                <h5 className="text-sm font-medium text-purple-300">Converters</h5>
                <Link href="/fraction-decimal" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xs">Fraction ↔ Decimal</Link>
                <Link href="/ratio-simplifier" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xs">Ratio Simplifier</Link>
                <Link href="/unit-converter" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xs">Unit Converter</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-center space-y-2">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} CalculatorsHub.tech. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
