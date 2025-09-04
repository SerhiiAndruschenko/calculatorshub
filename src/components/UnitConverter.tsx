"use client";

import Link from "next/link";
import { useState } from "react";

export default function UnitConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [conversionType, setConversionType] = useState("length");
  const [result, setResult] = useState("");

  const conversionFactors = {
    length: {
      meters: 1,
      feet: 3.28084,
      inches: 39.3701,
      centimeters: 100,
      kilometers: 0.001,
      miles: 0.000621371,
      yards: 1.09361,
    },
    mass: {
      kilograms: 1,
      pounds: 2.20462,
      grams: 1000,
      ounces: 35.274,
      tons: 0.00110231,
      milligrams: 1000000,
    },
    temperature: {
      celsius: "celsius",
      fahrenheit: "fahrenheit",
      kelvin: "kelvin",
    },
  };

  const convert = () => {
    if (!value || isNaN(parseFloat(value))) return;

    const numValue = parseFloat(value);

    if (conversionType === "temperature") {
      const result = convertTemperature(numValue, fromUnit, toUnit);
      setResult(result.toFixed(2));
    } else if (conversionType === "length") {
      const fromFactor =
        conversionFactors.length[
          fromUnit as keyof typeof conversionFactors.length
        ];
      const toFactor =
        conversionFactors.length[
          toUnit as keyof typeof conversionFactors.length
        ];

      if (typeof fromFactor === "number" && typeof toFactor === "number") {
        const result = (numValue / fromFactor) * toFactor;
        setResult(result.toFixed(4));
      }
    } else if (conversionType === "mass") {
      const fromFactor =
        conversionFactors.mass[fromUnit as keyof typeof conversionFactors.mass];
      const toFactor =
        conversionFactors.mass[toUnit as keyof typeof conversionFactors.mass];

      if (typeof fromFactor === "number" && typeof toFactor === "number") {
        const result = (numValue / fromFactor) * toFactor;
        setResult(result.toFixed(4));
      }
    }
  };

  const convertTemperature = (
    value: number,
    from: string,
    to: string
  ): number => {
    let celsius = 0;

    // Convert to Celsius first
    switch (from) {
      case "celsius":
        celsius = value;
        break;
      case "fahrenheit":
        celsius = ((value - 32) * 5) / 9;
        break;
      case "kelvin":
        celsius = value - 273.15;
        break;
    }

    // Convert from Celsius to target unit
    switch (to) {
      case "celsius":
        return celsius;
      case "fahrenheit":
        return (celsius * 9) / 5 + 32;
      case "kelvin":
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  const clearCalculator = () => {
    setValue("");
    setResult("");
  };

  const getUnitOptions = () => {
    return Object.keys(
      conversionFactors[conversionType as keyof typeof conversionFactors]
    ).map((unit) => (
      <option key={unit} value={unit} className="text-gray-900">
        {unit.charAt(0).toUpperCase() + unit.slice(1)}
      </option>
    ));
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
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Unit Converter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Convert between different units of length, mass, and temperature
            with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Convert Units
                </h2>
                <p className="text-gray-400">
                  Select conversion type and enter values
                </p>
              </div>

              <div className="space-y-6">
                {/* Conversion Type Selection */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Conversion Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        type: "length",
                        label: "Length",
                        color: "from-blue-600 to-indigo-600",
                      },
                      {
                        type: "mass",
                        label: "Mass",
                        color: "from-green-600 to-emerald-600",
                      },
                      {
                        type: "temperature",
                        label: "Temperature",
                        color: "from-purple-600 to-pink-600",
                      },
                    ].map((option) => (
                      <button
                        key={option.type}
                        onClick={() => setConversionType(option.type)}
                        className={`px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                          conversionType === option.type
                            ? `bg-gradient-to-r ${option.color} text-white shadow-lg`
                            : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Value Input */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Value to Convert
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    step="0.01"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                {/* Unit Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-gray-200">
                      From Unit
                    </label>
                    <select
                      value={fromUnit}
                      onChange={(e) => setFromUnit(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-lg font-medium transition-all duration-300"
                    >
                      {getUnitOptions()}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-gray-200">
                      To Unit
                    </label>
                    <select
                      value={toUnit}
                      onChange={(e) => setToUnit(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-pink-500/30 focus:border-pink-500 text-lg font-medium transition-all duration-300"
                    >
                      {getUnitOptions()}
                    </select>
                  </div>
                </div>

                {/* Convert Button */}
                <div className="flex space-x-4">
                  <button
                    onClick={convert}
                    disabled={!value}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Convert
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
                <h2 className="text-3xl font-bold text-white mb-2">
                  Conversion Result
                </h2>
                <p className="text-gray-400">Your converted value</p>
              </div>

              <div className="space-y-6">
                {result ? (
                  <>
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30">
                      <div className="text-center space-y-4">
                        <div className="text-sm text-green-200 font-medium">
                          Converted Value
                        </div>
                        <div className="text-4xl font-bold text-white">
                          {result}
                        </div>
                        <div className="text-xl text-green-200 font-medium">
                          {toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-blue-200 font-medium">
                          Original Value
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {value}{" "}
                          {fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-8 bg-gray-700/30 rounded-2xl border border-gray-600/30 text-center">
                    <div className="text-gray-400 text-lg">
                      Enter a value to convert
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
                Length Conversions
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>1 meter = 3.28 feet</div>
                <div>1 kilometer = 0.62 miles</div>
                <div>1 inch = 2.54 cm</div>
                <div>1 yard = 0.91 meters</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Mass Conversions
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>1 kilogram = 2.20 pounds</div>
                <div>1 pound = 16 ounces</div>
                <div>1 ton = 1000 kg</div>
                <div>1 gram = 0.04 ounces</div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-3">
                Temperature Conversions
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>0°C = 32°F</div>
                <div>100°C = 212°F</div>
                <div>0°C = 273.15K</div>
                <div>100°F = 37.78°C</div>
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
                Select Type
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Choose the type of conversion you need: Length, Mass, or
                Temperature. Each type has different units available for
                conversion.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Enter Value
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the numerical value you want to convert. You can use
                decimal numbers for precise conversions.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Choose Units
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select the unit you're converting from and the unit you're
                converting to. The available units depend on your selected
                conversion type.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Convert & View
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Click "Convert" to see your result. The converted value will be
                displayed clearly with the appropriate unit.
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
                title: "Travel",
                description: "Distance conversions",
                color: "from-blue-600/10 to-indigo-600/10",
                borderColor: "border-blue-500/20",
              },
              {
                title: "Science",
                description: "Laboratory work",
                color: "from-purple-600/10 to-pink-600/10",
                borderColor: "border-purple-500/20",
              },
              {
                title: "Construction",
                description: "Building plans",
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

        {/* Conversion Formulas */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Conversion Formulas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">Length</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div>
                  <strong>Meters to Feet:</strong> × 3.28084
                </div>
                <div>
                  <strong>Feet to Meters:</strong> ÷ 3.28084
                </div>
                <div>
                  <strong>Kilometers to Miles:</strong> × 0.621371
                </div>
                <div>
                  <strong>Miles to Kilometers:</strong> ÷ 0.621371
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">Mass</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div>
                  <strong>Kilograms to Pounds:</strong> × 2.20462
                </div>
                <div>
                  <strong>Pounds to Kilograms:</strong> ÷ 2.20462
                </div>
                <div>
                  <strong>Grams to Ounces:</strong> ÷ 28.3495
                </div>
                <div>
                  <strong>Ounces to Grams:</strong> × 28.3495
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                Temperature
              </h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div>
                  <strong>°C to °F:</strong> × 9/5 + 32
                </div>
                <div>
                  <strong>°F to °C:</strong> (× - 32) × 5/9
                </div>
                <div>
                  <strong>°C to K:</strong> + 273.15
                </div>
                <div>
                  <strong>K to °C:</strong> - 273.15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
