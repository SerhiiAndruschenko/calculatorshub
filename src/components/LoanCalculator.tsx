"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [timeUnit, setTimeUnit] = useState("years");

  const calculateInterest = () => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    let t = parseFloat(time) || 0;
    
    // Convert time to years
    if (timeUnit === "months") {
      t = t / 12;
    } else if (timeUnit === "days") {
      t = t / 365;
    }
    
    const interest = p * (r / 100) * t;
    const totalAmount = p + interest;
    
    return {
      principal: p,
      rate: r,
      time: t,
      interest: interest,
      totalAmount: totalAmount
    };
  };

  const result = calculateInterest();

  const clearCalculator = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setTimeUnit("years");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
        <div className="relative">
            <Link
              href="/"
              className="absolute left-0 top-0  p-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-colors duration-200 backdrop-blur-sm border border-gray-700/50"
            >
              <svg
                className="w-5 h-5 text-gray-300 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Loan Interest Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate simple interest on loans and investments with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Calculate Interest</h2>
                <p className="text-gray-400">Enter loan details to calculate interest</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Principal Amount ($)
                  </label>
                  <input
                    type="number"
                    placeholder="1000.00"
                    step="0.01"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-lg font-medium transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    placeholder="5.00"
                    step="0.01"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Time Period
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      placeholder="2"
                      step="0.01"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="flex-1 px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-500/30 focus:border-pink-500 text-lg font-medium transition-all duration-300"
                    />
                    <select
                      value={timeUnit}
                      onChange={(e) => setTimeUnit(e.target.value)}
                      className="px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-pink-500/30 focus:border-pink-500 text-lg font-medium transition-all duration-300"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                      <option value="days">Days</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={clearCalculator}
                    className="flex-1 px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Results</h2>
                <p className="text-gray-400">Your calculated interest breakdown</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-blue-200 font-medium">Principal Amount</div>
                    <div className="text-3xl font-bold text-white">
                      ${result.principal.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-green-200 font-medium">Interest Earned</div>
                    <div className="text-3xl font-bold text-white">
                      ${result.interest.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-purple-200 font-medium">Total Amount</div>
                    <div className="text-3xl font-bold text-white">
                      ${result.totalAmount.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-2xl border border-orange-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-orange-200 font-medium">Time Period</div>
                    <div className="text-2xl font-bold text-white">
                      {result.time.toFixed(2)} years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Rate Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Common Interest Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { rate: "2%", description: "Savings account", color: "from-green-600/10 to-emerald-600/10", borderColor: "border-green-500/20" },
                { rate: "5%", description: "CD or bond", color: "from-blue-600/10 to-indigo-600/10", borderColor: "border-blue-500/20" },
                { rate: "8%", description: "Investment return", color: "from-purple-600/10 to-pink-600/10", borderColor: "border-purple-500/20" },
                { rate: "12%", description: "Credit card", color: "from-red-600/10 to-pink-600/10", borderColor: "border-red-500/20" }
              ].map((interest) => (
                <div key={interest.rate} className={`group text-center p-8 bg-gradient-to-br ${interest.color} rounded-3xl border ${interest.borderColor} hover:scale-105 transition-all duration-300`}>
                  <div className="text-2xl font-bold text-white mb-2">{interest.rate}</div>
                  <div className="text-gray-300">{interest.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Common Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">$1,000 at 5% for 2 years</h4>
              <p className="text-gray-300 text-sm mb-4">
                Principal: $1,000<br/>
                Rate: 5% annually<br/>
                Time: 2 years
              </p>
              <div className="text-2xl font-bold text-green-400">Interest: $100</div>
              <div className="text-sm text-gray-400">Total: $1,100</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">$5,000 at 8% for 6 months</h4>
              <p className="text-gray-300 text-sm mb-4">
                Principal: $5,000<br/>
                Rate: 8% annually<br/>
                Time: 6 months
              </p>
              <div className="text-2xl font-bold text-blue-400">Interest: $200</div>
              <div className="text-sm text-gray-400">Total: $5,200</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">$10,000 at 3% for 1 year</h4>
              <p className="text-gray-300 text-sm mb-4">
                Principal: $10,000<br/>
                Rate: 3% annually<br/>
                Time: 1 year
              </p>
              <div className="text-2xl font-bold text-purple-400">Interest: $300</div>
              <div className="text-sm text-gray-400">Total: $10,300</div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How to Use</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Principal
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the initial amount of money (principal) for the loan or investment.
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Enter Interest Rate
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the annual interest rate as a percentage (e.g., 5 for 5%).
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Enter Time Period
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the time period and select the unit (years, months, or days).
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                View Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                See the calculated interest, total amount, and time period clearly displayed.
              </p>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Simple Interest Formula</h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="text-center space-y-6">
              <div className="text-3xl font-mono text-white">
                Simple Interest = Principal × Rate × Time
              </div>
              <div className="text-gray-300 text-lg">
                <strong>Where:</strong><br/>
                • Principal = Initial amount of money<br/>
                • Rate = Annual interest rate (as a decimal)<br/>
                • Time = Time period in years<br/><br/>
                <strong>Example:</strong> $1,000 at 5% for 2 years<br/>
                Interest = $1,000 × 0.05 × 2 = $100
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">Simple Interest vs Compound Interest</h3>
              <p className="text-gray-300 leading-relaxed">
                This calculator uses simple interest, which means interest is only calculated on the principal amount. 
                Most real-world loans and investments use compound interest, which calculates interest on both principal and accumulated interest.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">Time Conversion</h3>
              <p className="text-gray-300 leading-relaxed">
                The calculator automatically converts months and days to years for accurate calculations. 
                For example, 6 months = 0.5 years, 30 days = 0.082 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
