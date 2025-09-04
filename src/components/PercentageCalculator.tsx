"use client";
import Link from "next/link";
import { useState } from "react";

export default function PercentageCalculator() {
  const [percentage, setPercentage] = useState("");
  const [total, setTotal] = useState("");
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");
  const [basicResult, setBasicResult] = useState(0);
  const [percentageResult, setPercentageResult] = useState(0);

  const calculateBasicPercentage = () => {
    if (percentage && total) {
      const result = (parseFloat(percentage) * parseFloat(total)) / 100;
      setBasicResult(result);
    }
  };

  const calculatePercentageOfTotal = () => {
    if (part && whole) {
      const result = (parseFloat(part) / parseFloat(whole)) * 100;
      setPercentageResult(result);
    }
  };

  const clearBasicCalculator = () => {
    setPercentage("");
    setTotal("");
    setBasicResult(0);
  };

  const clearPercentageCalculator = () => {
    setPart("");
    setWhole("");
    setPercentageResult(0);
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl mb-6">
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
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Percentage Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate percentages, find values, and solve percentage problems
            with our comprehensive calculator
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Basic Percentage Calculator */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Basic Percentage
                </h2>
                <p className="text-gray-400">
                  Find what a percentage of a number is
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    What is
                  </label>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input
                        type="number"
                        placeholder="25"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg font-medium transition-all duration-300"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium">
                        %
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-gray-300 px-4">
                      of
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="200"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg font-medium transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={calculateBasicPercentage}
                    disabled={!percentage || !total}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    Calculate
                  </button>
                  <button
                    onClick={clearBasicCalculator}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-white">
                      {basicResult.toFixed(2)}
                    </div>
                    <div className="text-lg text-blue-200 font-medium">
                      Result
                    </div>
                    {basicResult > 0 && (
                      <div className="text-sm text-gray-300">
                        {percentage}% of {total} = {basicResult.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Percentage of Total */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Percentage of Total
                </h2>
                <p className="text-gray-400">
                  Find what percentage one number is of another
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    What percentage is
                  </label>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="30"
                        value={part}
                        onChange={(e) => setPart(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 text-lg font-medium transition-all duration-300"
                      />
                    </div>
                    <div className="text-xl font-semibold text-gray-300 px-4">
                      of
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="150"
                        value={whole}
                        onChange={(e) => setWhole(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 text-lg font-medium transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={calculatePercentageOfTotal}
                    disabled={!part || !whole}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-2xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    Calculate
                  </button>
                  <button
                    onClick={clearPercentageCalculator}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-white">
                      {percentageResult.toFixed(2)}%
                    </div>
                    <div className="text-lg text-green-200 font-medium">
                      Result
                    </div>
                    {percentageResult > 0 && (
                      <div className="text-sm text-gray-300">
                        {part} is {percentageResult.toFixed(2)}% of {whole}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Percentage Tools */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              More Percentage Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group text-center p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h4 className="text-xl font-bold text-white mb-3">
                  Increase/Decrease
                </h4>
                <p className="text-gray-300">
                  Calculate percentage changes between values
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h4 className="text-xl font-bold text-white mb-3">
                  Discount Calculator
                </h4>
                <p className="text-gray-300">
                  Calculate savings and final prices
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-3xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h4 className="text-xl font-bold text-white mb-3">
                  Tip Calculator
                </h4>
                <p className="text-gray-300">Calculate tips and split bills</p>
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
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Basic Percentage
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To find what a percentage of a number is, enter the percentage
                in the first field and the total number in the second field.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <p className="text-gray-300">
                  <strong className="text-blue-300">Example:</strong> What is
                  25% of 200?
                  <br />
                  <span className="text-gray-400">
                    Enter 25 and 200 to get 50.
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Percentage of Total
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To find what percentage one number is of another, enter the part
                in the first field and the total in the second field.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <p className="text-gray-300">
                  <strong className="text-green-300">Example:</strong> What
                  percentage is 30 of 150?
                  <br />
                  <span className="text-gray-400">
                    Enter 30 and 150 to get 20%.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
