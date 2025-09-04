"use client";

import Link from "next/link";
import { useState } from "react";

export default function FractionDecimalConverter() {
  const [fraction, setFraction] = useState("");
  const [decimal, setDecimal] = useState("");
  const [conversionType, setConversionType] = useState("fractionToDecimal");

  const convertFractionToDecimal = (fractionStr: string) => {
    const parts = fractionStr.split("/");
    if (parts.length !== 2) return null;

    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);

    if (isNaN(numerator) || isNaN(denominator) || denominator === 0)
      return null;

    return numerator / denominator;
  };

  const convertDecimalToFraction = (decimalNum: number) => {
    const tolerance = 1e-10;
    let h1 = 1,
      h2 = 0,
      k1 = 0,
      k2 = 1;
    let a = Math.floor(decimalNum);
    let x = decimalNum - a;

    while (x > tolerance) {
      let temp = h1;
      h1 = a * h1 + h2;
      h2 = temp;

      temp = k1;
      k1 = a * k1 + k2;
      k2 = temp;

      a = Math.floor(1 / x);
      x = 1 / x - a;
    }

    return { numerator: h1, denominator: k1 };
  };

  const handleFractionToDecimal = () => {
    if (!fraction) return;
    const result = convertFractionToDecimal(fraction);
    if (result !== null) {
      setDecimal(result.toString());
    }
  };

  const handleDecimalToFraction = () => {
    if (!decimal) return;
    const decimalNum = parseFloat(decimal);
    if (isNaN(decimalNum)) return;

    const result = convertDecimalToFraction(decimalNum);
    setFraction(`${result.numerator}/${result.denominator}`);
  };

  const clearCalculator = () => {
    setFraction("");
    setDecimal("");
  };

  const clearFraction = () => {
    setFraction("");
  };

  const clearDecimal = () => {
    setDecimal("");
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
            Fraction ↔ Decimal Converter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Convert between fractions and decimal numbers with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Fraction to Decimal */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Fraction to Decimal
                </h2>
                <p className="text-gray-400">
                  Convert fractions to decimal numbers
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Fraction (e.g., 3/4)
                  </label>
                  <input
                    type="text"
                    placeholder="3/4"
                    value={fraction}
                    onChange={(e) => setFraction(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleFractionToDecimal}
                    disabled={!fraction}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Convert to Decimal
                  </button>
                  <button
                    onClick={clearFraction}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* Decimal to Fraction */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Decimal to Fraction
                </h2>
                <p className="text-gray-400">
                  Convert decimal numbers to fractions
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Decimal Number
                  </label>
                  <input
                    type="number"
                    placeholder="0.75"
                    step="0.01"
                    value={decimal}
                    onChange={(e) => setDecimal(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleDecimalToFraction}
                    disabled={!decimal}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Convert to Fraction
                  </button>
                  <button
                    onClick={clearDecimal}
                    className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clear All Button */}
          <div className="mt-8 text-center">
            <button
              onClick={clearCalculator}
              className="px-8 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
            >
              Clear All
            </button>
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
                Common Fractions
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>1/2 = 0.5</div>
                <div>1/4 = 0.25</div>
                <div>3/4 = 0.75</div>
                <div>1/3 ≈ 0.333</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Decimal Examples
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>0.5 = 1/2</div>
                <div>0.25 = 1/4</div>
                <div>0.75 = 3/4</div>
                <div>0.125 = 1/8</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Complex Fractions
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>5/8 = 0.625</div>
                <div>7/12 ≈ 0.583</div>
                <div>11/16 = 0.6875</div>
                <div>13/20 = 0.65</div>
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
                Fraction to Decimal
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter a fraction in the format "numerator/denominator" (e.g.,
                "3/4") and click "Convert to Decimal" to see the decimal
                equivalent.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Decimal to Fraction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter a decimal number and click "Convert to Fraction" to see
                the simplified fraction representation.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Input Format
              </h3>
              <p className="text-gray-300 leading-relaxed">
                For fractions, use the format "a/b" where a and b are numbers.
                For decimals, enter any decimal number.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Clear Functions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use individual clear buttons for each input or the "Clear All"
                button to reset both inputs at once.
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
                Fraction to Decimal
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Converting a fraction to a decimal involves dividing the
                numerator by the denominator. This can result in either a
                terminating decimal (like 1/4 = 0.25) or a repeating decimal
                (like 1/3 = 0.333...).
              </p>
            </div>
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                Decimal to Fraction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Converting a decimal to a fraction uses continued fraction
                expansion to find the best rational approximation. The algorithm
                finds the simplest fraction that represents the decimal number
                within a given tolerance.
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
                description: "Recipe measurements",
                color: "from-green-600/10 to-emerald-600/10",
                borderColor: "border-green-500/20",
              },
              {
                title: "Construction",
                description: "Building measurements",
                color: "from-blue-600/10 to-indigo-600/10",
                borderColor: "border-blue-500/20",
              },
              {
                title: "Finance",
                description: "Interest rates",
                color: "from-purple-600/10 to-pink-600/10",
                borderColor: "border-purple-500/20",
              },
              {
                title: "Science",
                description: "Precise calculations",
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
      </div>
    </div>
  );
}
