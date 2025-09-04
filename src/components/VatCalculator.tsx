"use client";

import Link from "next/link";
import { useState } from "react";

export default function VatCalculator() {
  const [amount, setAmount] = useState("");
  const [taxRate, setTaxRate] = useState("20");
  const [calculationType, setCalculationType] = useState("add");

  const calculateTax = () => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = parseFloat(taxRate) || 0;

    if (calculationType === "add") {
      // Add tax to base amount
      const taxAmount = baseAmount * (rate / 100);
      const totalAmount = baseAmount + taxAmount;
      return {
        baseAmount,
        taxAmount,
        totalAmount,
        taxRate: rate,
      };
    } else {
      // Extract tax from total amount
      const totalAmount = baseAmount;
      const baseAmountExcl = totalAmount / (1 + rate / 100);
      const taxAmount = totalAmount - baseAmountExcl;
      return {
        baseAmount: baseAmountExcl,
        taxAmount,
        totalAmount,
        taxRate: rate,
      };
    }
  };

  const result = calculateTax();

  const clearCalculator = () => {
    setAmount("");
    setTaxRate("20");
    setCalculationType("add");
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 rounded-3xl shadow-2xl mb-6">
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-pink-200 bg-clip-text text-transparent">
            VAT/GST Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate VAT, GST, and tax-inclusive amounts with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Calculate Tax
                </h2>
                <p className="text-gray-400">
                  Choose calculation type and enter values
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Calculation Type
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCalculationType("add")}
                      className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        calculationType === "add"
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                          : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                      }`}
                    >
                      ➕ Add Tax
                    </button>
                    <button
                      onClick={() => setCalculationType("extract")}
                      className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        calculationType === "extract"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                          : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                      }`}
                    >
                      ➖ Extract Tax
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    {calculationType === "add"
                      ? "Base Amount (Excluding Tax)"
                      : "Total Amount (Including Tax)"}{" "}
                    ($)
                  </label>
                  <input
                    type="number"
                    placeholder={
                      calculationType === "add" ? "100.00" : "120.00"
                    }
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Tax Rate (%)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["5", "10", "20"].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setTaxRate(rate)}
                        className={`px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                          taxRate === rate
                            ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                            : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom rate %"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-500/30 focus:border-pink-500 text-lg font-medium transition-all duration-300"
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
                <p className="text-gray-400">Your calculated tax breakdown</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-blue-200 font-medium">
                      {calculationType === "add"
                        ? "Base Amount"
                        : "Base Amount (Excluding Tax)"}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${result.baseAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 p-6 rounded-2xl border border-red-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-red-200 font-medium">
                      Tax Amount ({result.taxRate}%)
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${result.taxAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-green-200 font-medium">
                      {calculationType === "add"
                        ? "Total Amount (Including Tax)"
                        : "Total Amount"}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${result.totalAmount.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Tax Rates */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Common Tax Rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  rate: "5%",
                  description: "Reduced rate (UK, EU)",
                  color: "from-green-600/10 to-emerald-600/10",
                  borderColor: "border-green-500/20",
                },
                {
                  rate: "10%",
                  description: "Reduced rate (Australia GST)",
                  color: "from-blue-600/10 to-indigo-600/10",
                  borderColor: "border-blue-500/20",
                },
                {
                  rate: "20%",
                  description: "Standard rate (UK VAT)",
                  color: "from-red-600/10 to-pink-600/10",
                  borderColor: "border-red-500/20",
                },
                {
                  rate: "25%",
                  description: "High rate (Norway, Sweden)",
                  color: "from-purple-600/10 to-pink-600/10",
                  borderColor: "border-purple-500/20",
                },
              ].map((tax) => (
                <div
                  key={tax.rate}
                  className={`group text-center p-8 bg-gradient-to-br ${tax.color} rounded-3xl border ${tax.borderColor} hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {tax.rate}
                  </div>
                  <div className="text-gray-300">{tax.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Common Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">Add 20% VAT</h4>
              <p className="text-gray-300 text-sm mb-4">
                Base: $100.00
                <br />
                VAT: 20%
              </p>
              <div className="text-2xl font-bold text-green-400">
                Total: $120.00
              </div>
              <div className="text-sm text-gray-400">VAT: $20.00</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Extract 10% GST
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Total: $110.00
                <br />
                GST: 10%
              </p>
              <div className="text-2xl font-bold text-white">Base: $100.00</div>
              <div className="text-sm text-gray-400">GST: $10.00</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">Add 5% Tax</h4>
              <p className="text-gray-300 text-sm mb-4">
                Base: $200.00
                <br />
                Tax: 5%
              </p>
              <div className="text-2xl font-bold text-green-400">
                Total: $210.00
              </div>
              <div className="text-sm text-gray-400">Tax: $10.00</div>
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
                Add Tax Mode
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the base amount (excluding tax) and tax rate to calculate
                the total amount including tax.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Extract Tax Mode
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the total amount (including tax) and tax rate to find the
                base amount and tax amount.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Tax Rate
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use preset rates (5%, 10%, 20%) or enter a custom tax rate
                percentage.
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
                See the calculated base amount, tax amount, and total amount
                clearly displayed.
              </p>
            </div>
          </div>
        </div>

        {/* Formulas */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Formulas
          </h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-2">
                  Add Tax
                </div>
                <div className="text-lg font-mono text-gray-300 bg-gray-800/50 p-4 rounded-xl">
                  Tax Amount = Base Amount × (Tax Rate ÷ 100)
                  <br />
                  Total Amount = Base Amount + Tax Amount
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-2">
                  Extract Tax
                </div>
                <div className="text-lg font-mono text-gray-300 bg-gray-800/50 p-4 rounded-xl">
                  Base Amount = Total Amount ÷ (1 + Tax Rate ÷ 100)
                  <br />
                  Tax Amount = Total Amount - Base Amount
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
