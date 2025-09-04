"use client";
import Link from "next/link";
import { useState } from "react";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [originalPriceForPercentage, setOriginalPriceForPercentage] = useState("");
  const [salePriceForPercentage, setSalePriceForPercentage] = useState("");
  const [salePriceForOriginal, setSalePriceForOriginal] = useState("");
  const [discountPercentageForOriginal, setDiscountPercentageForOriginal] = useState("");
  
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  const [calculatedDiscountPercentage, setCalculatedDiscountPercentage] = useState(0);
  const [calculatedOriginalPrice, setCalculatedOriginalPrice] = useState(0);

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage) {
      const original = parseFloat(originalPrice);
      const discount = parseFloat(discountPercentage);
      const discountAmount = original * (discount / 100);
      const final = original - discountAmount;
      
      setDiscountAmount(discountAmount);
      setFinalPrice(final);
      setSavings(discountAmount);
    }
  };

  const findDiscountPercentage = () => {
    if (originalPriceForPercentage && salePriceForPercentage) {
      const original = parseFloat(originalPriceForPercentage);
      const sale = parseFloat(salePriceForPercentage);
      const discount = ((original - sale) / original) * 100;
      setCalculatedDiscountPercentage(discount);
    }
  };

  const findOriginalPrice = () => {
    if (salePriceForOriginal && discountPercentageForOriginal) {
      const sale = parseFloat(salePriceForOriginal);
      const discount = parseFloat(discountPercentageForOriginal);
      const original = sale / (1 - discount / 100);
      setCalculatedOriginalPrice(original);
    }
  };

  const clearCalculator = () => {
    setOriginalPrice("");
    setDiscountPercentage("");
    setDiscountAmount(0);
    setFinalPrice(0);
    setSavings(0);
  };

  const clearPercentageCalculator = () => {
    setOriginalPriceForPercentage("");
    setSalePriceForPercentage("");
    setCalculatedDiscountPercentage(0);
  };

  const clearOriginalPriceCalculator = () => {
    setSalePriceForOriginal("");
    setDiscountPercentageForOriginal("");
    setCalculatedOriginalPrice(0);
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl shadow-2xl mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
            Discount Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate discounts, final prices, and savings amounts with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Calculate Discount</h2>
                <p className="text-gray-400">Find final price and savings from original price and discount</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Original Price ($)
                  </label>
                  <input
                    type="number"
                    placeholder="100.00"
                    step="0.01"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 text-lg font-medium transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Discount Percentage (%)
                  </label>
                  <input
                    type="number"
                    placeholder="20"
                    min="0"
                    max="100"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={calculateDiscount}
                    disabled={!originalPrice || !discountPercentage}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-lg rounded-2xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    Calculate Discount
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
                <p className="text-gray-400">Your calculated discount details</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-green-200 font-medium">Discount Amount</div>
                    <div className="text-3xl font-bold text-white">${discountAmount.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-blue-200 font-medium">Final Price</div>
                    <div className="text-3xl font-bold text-white">${finalPrice.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-purple-200 font-medium">You Save</div>
                    <div className="text-2xl font-bold text-white">${savings.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Calculation Methods */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Alternative Calculations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-4">Find Discount Percentage</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Original Price
                    </label>
                    <input
                      type="number"
                      placeholder="100.00"
                      step="0.01"
                      value={originalPriceForPercentage}
                      onChange={(e) => setOriginalPriceForPercentage(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg font-medium transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Sale Price
                    </label>
                    <input
                      type="number"
                      placeholder="80.00"
                      step="0.01"
                      value={salePriceForPercentage}
                      onChange={(e) => setSalePriceForPercentage(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-lg font-medium transition-all duration-300"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button 
                      onClick={findDiscountPercentage}
                      disabled={!originalPriceForPercentage || !salePriceForPercentage}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                    >
                      Find Discount %
                    </button>
                    <button 
                      onClick={clearPercentageCalculator}
                      className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                    >
                      Clear
                    </button>
                  </div>
                  {calculatedDiscountPercentage > 0 && (
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-white">{calculatedDiscountPercentage.toFixed(2)}%</div>
                      <div className="text-lg text-blue-200 font-medium">Discount Percentage</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="group p-8 bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-4">Find Original Price</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Sale Price
                    </label>
                    <input
                      type="number"
                      placeholder="80.00"
                      step="0.01"
                      value={salePriceForOriginal}
                      onChange={(e) => setSalePriceForOriginal(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 text-lg font-medium transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Discount %
                    </label>
                    <input
                      type="number"
                      placeholder="20"
                      min="0"
                      max="100"
                      value={discountPercentageForOriginal}
                      onChange={(e) => setDiscountPercentageForOriginal(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:border-teal-500 text-lg font-medium transition-all duration-300"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button 
                      onClick={findOriginalPrice}
                      disabled={!salePriceForOriginal || !discountPercentageForOriginal}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-2xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                    >
                      Find Original Price
                    </button>
                    <button 
                      onClick={clearOriginalPriceCalculator}
                      className="px-6 py-4 bg-gray-700/60 text-gray-300 font-semibold rounded-2xl hover:bg-gray-600/60 transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500"
                    >
                      Clear
                    </button>
                  </div>
                  {calculatedOriginalPrice > 0 && (
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
                      <div className="text-3xl font-bold text-white">${calculatedOriginalPrice.toFixed(2)}</div>
                      <div className="text-lg text-green-200 font-medium">Original Price</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Common Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">20% Off</h4>
              <p className="text-gray-300 text-sm mb-4">
                Original: $100<br/>
                Discount: 20%
              </p>
              <div className="text-2xl font-bold text-green-400">$20.00</div>
              <div className="text-sm text-gray-400">Final: $80.00</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">50% Off</h4>
              <p className="text-gray-300 text-sm mb-4">
                Original: $200<br/>
                Discount: 50%
              </p>
              <div className="text-2xl font-bold text-blue-400">$100.00</div>
              <div className="text-sm text-gray-400">Final: $100.00</div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">75% Off</h4>
              <p className="text-gray-300 text-sm mb-4">
                Original: $80<br/>
                Discount: 75%
              </p>
              <div className="text-2xl font-bold text-purple-400">$60.00</div>
              <div className="text-sm text-gray-400">Final: $20.00</div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How to Use</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Calculate Final Price
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the original price and discount percentage to find the final price and savings amount.
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Find Discount %
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the original price and sale price to calculate what discount percentage was applied.
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Find Original Price
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the sale price and discount percentage to find the original price before the discount.
              </p>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Formulas</h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-2">Discount Amount</div>
                <div className="text-lg font-mono text-gray-300 bg-gray-800/50 p-4 rounded-xl">
                  Discount = Original Price × (Discount % ÷ 100)
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-2">Final Price</div>
                <div className="text-lg font-mono text-gray-300 bg-gray-800/50 p-4 rounded-xl">
                  Final Price = Original Price - Discount Amount
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-2">Discount Percentage</div>
                <div className="text-lg font-mono text-gray-300 bg-gray-800/50 p-4 rounded-xl">
                  Discount % = ((Original Price - Sale Price) ÷ Original Price) × 100
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
