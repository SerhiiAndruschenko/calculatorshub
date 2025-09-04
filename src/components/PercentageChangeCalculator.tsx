"use client";
import Link from "next/link";
import { useState } from "react";

export default function PercentageChangeCalculator() {
  const [originalValue, setOriginalValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [percentageChange, setPercentageChange] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);
  const [changeType, setChangeType] = useState("No Change");
  const [finalValue, setFinalValue] = useState(0);

  const calculateChange = () => {
    if (originalValue && newValue) {
      const original = parseFloat(originalValue);
      const newVal = parseFloat(newValue);
      const change = newVal - original;
      const percentage = (change / original) * 100;

      setChangeAmount(Math.abs(change));
      setPercentageChange(percentage);
      setFinalValue(newVal);

      if (change > 0) {
        setChangeType("Increase");
      } else if (change < 0) {
        setChangeType("Decrease");
      } else {
        setChangeType("No Change");
      }
    }
  };

  const clearCalculator = () => {
    setOriginalValue("");
    setNewValue("");
    setPercentageChange(0);
    setChangeAmount(0);
    setChangeType("No Change");
    setFinalValue(0);
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 rounded-3xl shadow-2xl mb-6">
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
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent">
            Percentage Change Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate percentage increases and decreases between two values with
            precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Percentage Increase/Decrease */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Calculate Change
                </h2>
                <p className="text-gray-400">
                  Find the percentage change between two values
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Original Value
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    value={originalValue}
                    onChange={(e) => setOriginalValue(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    New Value
                  </label>
                  <input
                    type="number"
                    placeholder="120"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:border-teal-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={calculateChange}
                    disabled={!originalValue || !newValue}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-2xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    Calculate Change
                  </button>
                  <button
                    onClick={clearCalculator}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-white">
                      {percentageChange.toFixed(2)}%
                    </div>
                    <div className="text-lg text-green-200 font-medium">
                      Percentage Change
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Results</h2>
                <p className="text-gray-400">
                  Detailed breakdown of your calculation
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-blue-200 font-medium">
                      Change Amount
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${changeAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-purple-200 font-medium">
                      Change Type
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {changeType}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-2xl border border-orange-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-orange-200 font-medium">
                      Final Value
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${finalValue.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Common Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Price Increase
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  A product price increased from $50 to $60
                </p>
                <div className="text-2xl font-bold text-green-400">+20%</div>
                <p className="text-gray-400 text-xs mt-2">
                  $10 increase on $50 base
                </p>
              </div>
              <div className="group p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-3xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Price Decrease
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  A product price decreased from $100 to $80
                </p>
                <div className="text-2xl font-bold text-red-400">-20%</div>
                <p className="text-gray-400 text-xs mt-2">
                  $20 decrease on $100 base
                </p>
              </div>
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
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Values
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the original value in the first field and the new value in
                the second field.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Calculate
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Click the "Calculate Change" button to see the percentage
                change, change amount, and final value.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Understand Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Positive percentage indicates an increase, negative indicates a
                decrease.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                View Details
              </h3>
              <p className="text-gray-300 leading-relaxed">
                See the absolute change amount and final value for complete
                understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Formula
          </h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="text-center space-y-6">
              <div className="text-3xl font-mono text-white bg-gray-800/50 p-6 rounded-xl">
                Percentage Change = ((New Value - Original Value) / Original
                Value) × 100
              </div>
              <div className="text-gray-300 text-lg">
                <strong>Example:</strong> If a price increases from $50 to $60:
                <br />
                <span className="text-green-300 font-mono">
                  ((60 - 50) / 50) × 100 = (10 / 50) × 100 = 0.2 × 100 = 20%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
