"use client";

import Link from "next/link";
import { useState } from "react";

export default function RatioSimplifier() {
  const [ratio, setRatio] = useState("");
  const [simplifiedRatio, setSimplifiedRatio] = useState("");
  const [gcd, setGcd] = useState(0);

  const findGCD = (a: number, b: number): number => {
    return b === 0 ? a : findGCD(b, a % b);
  };

  const simplifyRatio = () => {
    if (!ratio) return;

    const parts = ratio.split(":");
    if (parts.length !== 2) return;

    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);

    if (isNaN(a) || isNaN(b) || b === 0) return;

    const greatestCommonDivisor = findGCD(Math.abs(a), Math.abs(b));
    const simplifiedA = a / greatestCommonDivisor;
    const simplifiedB = b / greatestCommonDivisor;

    setSimplifiedRatio(`${simplifiedA}:${simplifiedB}`);
    setGcd(greatestCommonDivisor);
  };

  const clearCalculator = () => {
    setRatio("");
    setSimplifiedRatio("");
    setGcd(0);
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Ratio Simplifier
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Simplify ratios to their lowest terms using the greatest common
            divisor
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Enter Ratio
                </h2>
                <p className="text-gray-400">
                  Input a ratio in the format "a:b"
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Ratio (e.g., 12:18)
                  </label>
                  <input
                    type="text"
                    placeholder="12:18"
                    value={ratio}
                    onChange={(e) => setRatio(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={simplifyRatio}
                    disabled={!ratio}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Simplify Ratio
                  </button>
                  <button
                    onClick={clearCalculator}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Results</h2>
                <p className="text-gray-400">Your simplified ratio breakdown</p>
              </div>

              <div className="space-y-6">
                {simplifiedRatio && (
                  <>
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-green-200 font-medium">
                          Simplified Ratio
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {simplifiedRatio}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-blue-200 font-medium">
                          Greatest Common Divisor
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {gcd}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-purple-200 font-medium">
                          Original Ratio
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {ratio}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {!simplifiedRatio && (
                  <div className="p-8 bg-gray-700/30 rounded-2xl border border-gray-600/30 text-center">
                    <div className="text-gray-400 text-lg">
                      Enter a ratio to see results
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Quick Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Simple Ratios
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>12:18 → 2:3 (GCD: 6)</div>
                <div>8:12 → 2:3 (GCD: 4)</div>
                <div>15:25 → 3:5 (GCD: 5)</div>
                <div>20:30 → 2:3 (GCD: 10)</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Common Ratios
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>16:24 → 2:3 (GCD: 8)</div>
                <div>9:15 → 3:5 (GCD: 3)</div>
                <div>14:21 → 2:3 (GCD: 7)</div>
                <div>10:25 → 2:5 (GCD: 5)</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Complex Ratios
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>24:36 → 2:3 (GCD: 12)</div>
                <div>18:27 → 2:3 (GCD: 9)</div>
                <div>28:42 → 2:3 (GCD: 14)</div>
                <div>32:48 → 2:3 (GCD: 16)</div>
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
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Ratio
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter a ratio in the format "a:b" where a and b are positive
                integers. For example, "12:18" or "8:24".
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Click Simplify
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Click the "Simplify Ratio" button to find the simplified form of
                your ratio using the greatest common divisor (GCD).
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                View Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                See the simplified ratio, the GCD used, and the original ratio
                clearly displayed in organized result cards.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Clear and Repeat
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use the "Clear" button to reset the calculator and try different
                ratios. The calculator handles any valid ratio format.
              </p>
            </div>
          </div>
        </div>

        {/* Mathematical Background */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Mathematical Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                Greatest Common Divisor (GCD)
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The GCD of two numbers is the largest positive integer that
                divides both numbers without leaving a remainder. It's found
                using the Euclidean algorithm, which repeatedly applies the
                division algorithm.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                Ratio Simplification
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To simplify a ratio, divide both terms by their GCD. This gives
                the ratio in its lowest terms, making it easier to understand
                and work with in mathematical calculations.
              </p>
            </div>
          </div>
        </div>

        {/* Common Applications */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Common Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Cooking",
                description: "Recipe proportions",
                color: "from-green-600/10 to-emerald-600/10",
                borderColor: "border-green-500/20",
              },
              {
                title: "Construction",
                description: "Material ratios",
                color: "from-blue-600/10 to-indigo-600/10",
                borderColor: "border-blue-500/20",
              },
              {
                title: "Finance",
                description: "Investment ratios",
                color: "from-purple-600/10 to-pink-600/10",
                borderColor: "border-purple-500/20",
              },
              {
                title: "Science",
                description: "Chemical formulas",
                color: "from-red-600/10 to-pink-600/10",
                borderColor: "border-red-500/20",
              },
            ].map((app) => (
              <div
                key={app.title}
                className={`group text-center p-6 bg-gradient-to-br ${app.color} rounded-3xl border ${app.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-lg font-bold text-white mb-2">
                  {app.title}
                </div>
                <div className="text-gray-300 text-sm">{app.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formula Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            The Formula
          </h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="text-center space-y-6">
              <div className="text-3xl font-mono text-white">
                Simplified Ratio = (a ÷ GCD) : (b ÷ GCD)
              </div>
              <div className="text-gray-300 text-lg">
                <strong>Where:</strong>
                <br />
                • a and b are the original ratio terms
                <br />
                • GCD is the greatest common divisor of a and b<br />
                <br />
                <strong>Example:</strong> 12:18
                <br />
                GCD(12, 18) = 6<br />
                Simplified = (12 ÷ 6) : (18 ÷ 6) = 2:3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
