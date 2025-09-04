"use client";

import Link from "next/link";
import { useState } from "react";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("15");
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  const [customTip, setCustomTip] = useState("");

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip =
      parseFloat(customTip) || (bill * parseFloat(tipPercentage)) / 100;
    const total = bill + tip;
    const perPerson = total / (parseInt(numberOfPeople) || 1);

    return {
      tipAmount: tip,
      totalAmount: total,
      perPerson: perPerson,
    };
  };

  const results = calculateTip();

  const clearCalculator = () => {
    setBillAmount("");
    setTipPercentage("15");
    setNumberOfPeople("1");
    setCustomTip("");
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl shadow-2xl mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent">
            Tip Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate tips, split bills, and total amounts with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Calculate Tip
                </h2>
                <p className="text-gray-400">
                  Enter bill amount and tip percentage to calculate totals
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Bill Amount ($)
                  </label>
                  <input
                    type="number"
                    placeholder="50.00"
                    step="0.01"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Tip Percentage
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["10", "15", "20"].map((percentage) => (
                      <button
                        key={percentage}
                        onClick={() => {
                          setTipPercentage(percentage);
                          setCustomTip("");
                        }}
                        className={`px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                          tipPercentage === percentage && !customTip
                            ? "bg-emerald-600 text-white shadow-lg"
                            : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                        }`}
                      >
                        {percentage}%
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom tip %"
                    value={customTip}
                    onChange={(e) => {
                      setCustomTip(e.target.value);
                      setTipPercentage("");
                    }}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:border-teal-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Number of People
                  </label>
                  <input
                    type="number"
                    placeholder="1"
                    min="1"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 text-lg font-medium transition-all duration-300"
                  />
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
                <p className="text-gray-400">
                  Your calculated tip and bill breakdown
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 p-6 rounded-2xl border border-emerald-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-emerald-200 font-medium">
                      Tip Amount
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${results.tipAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-blue-200 font-medium">
                      Total Amount
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${results.totalAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-purple-200 font-medium">
                      {parseInt(numberOfPeople) > 1 ? "Per Person" : "Total"}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ${results.perPerson.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tip Percentages */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quick Tip Percentages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  percentage: "10%",
                  description: "Poor service",
                  color: "from-red-600/10 to-pink-600/10",
                  borderColor: "border-red-500/20",
                },
                {
                  percentage: "15%",
                  description: "Average service",
                  color: "from-yellow-600/10 to-orange-600/10",
                  borderColor: "border-yellow-500/20",
                },
                {
                  percentage: "18%",
                  description: "Good service",
                  color: "from-green-600/10 to-emerald-600/10",
                  borderColor: "border-green-500/20",
                },
                {
                  percentage: "20%",
                  description: "Excellent service",
                  color: "from-blue-600/10 to-indigo-600/10",
                  borderColor: "border-blue-500/20",
                },
              ].map((tip) => (
                <div
                  key={tip.percentage}
                  className={`group text-center p-8 bg-gradient-to-br ${tip.color} rounded-3xl border ${tip.borderColor} hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {tip.percentage}
                  </div>
                  <div className="text-gray-300">{tip.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How to Use
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Bill Amount
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the total bill amount before tax and tip.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Choose Tip Percentage
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select a preset tip percentage or enter a custom percentage.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Split the Bill
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the number of people to split the bill evenly.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                View Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                See tip amount, total bill, and amount per person.
              </p>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Common Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                $50 Bill, 15% Tip
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Bill: $50.00
                <br />
                Tip: $7.50 (15%)
              </p>
              <div className="text-2xl font-bold text-white">Total: $57.50</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                $100 Bill, 20% Tip, 4 People
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Bill: $100.00
                <br />
                Tip: $20.00 (20%)
              </p>
              <div className="text-2xl font-bold text-white">
                $30.00 per person
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                $75 Bill, 18% Tip, 2 People
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Bill: $75.00
                <br />
                Tip: $13.50 (18%)
              </p>
              <div className="text-2xl font-bold text-white">
                $44.25 per person
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
