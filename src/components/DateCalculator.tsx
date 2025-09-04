"use client";

import Link from "next/link";
import { useState } from "react";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [daysToAdd, setDaysToAdd] = useState("");
  const [operation, setOperation] = useState("add");

  const calculateDate = () => {
    if (!startDate || !daysToAdd) return null;

    const start = new Date(startDate);
    const days = parseInt(daysToAdd);

    if (operation === "add") {
      start.setDate(start.getDate() + days);
    } else {
      start.setDate(start.getDate() - days);
    }

    return start.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const result = calculateDate();

  const clearCalculator = () => {
    setStartDate("");
    setDaysToAdd("");
    setOperation("add");
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl mb-6">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Date Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Add or subtract days from a given date with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Calculate New Date
                </h2>
                <p className="text-gray-400">
                  Enter start date and number of days to calculate
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-500 text-lg font-medium transition-all duration-300"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Operation
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setOperation("add")}
                      className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        operation === "add"
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                          : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                      }`}
                    >
                      ➕ Add Days
                    </button>
                    <button
                      onClick={() => setOperation("subtract")}
                      className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        operation === "subtract"
                          ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                          : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                      }`}
                    >
                      ➖ Subtract Days
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    placeholder="7"
                    min="0"
                    value={daysToAdd}
                    onChange={(e) => setDaysToAdd(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg font-medium transition-all duration-300"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      setStartDate(new Date().toISOString().split("T")[0])
                    }
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📅 Use Today's Date
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
                <h2 className="text-3xl font-bold text-white mb-2">Result</h2>
                <p className="text-gray-400">Your calculated new date</p>
              </div>

              {result ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-8 rounded-2xl border border-cyan-500/30 text-center">
                    <div className="text-sm text-cyan-200 font-medium mb-3">
                      New Date
                    </div>
                    <div className="text-4xl font-bold text-white">
                      {result}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30">
                    <div className="text-sm text-gray-400 mb-2">Operation</div>
                    <div className="text-xl font-semibold text-white">
                      {operation === "add" ? "Added" : "Subtracted"} {daysToAdd}{" "}
                      day{daysToAdd !== "1" ? "s" : ""}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 bg-gray-700/30 rounded-2xl border border-gray-600/30 text-center">
                  <div className="text-gray-400 text-lg">
                    Enter date and days to calculate
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quick Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Add 7 Days
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Today
                  <br />
                  Add: 7 days
                </p>
                <div className="text-2xl font-bold text-green-400">
                  Next Week
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-3xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Subtract 30 Days
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Today
                  <br />
                  Subtract: 30 days
                </p>
                <div className="text-2xl font-bold text-red-400">
                  Last Month
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Add 365 Days
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Today
                  <br />
                  Add: 365 days
                </p>
                <div className="text-2xl font-bold text-blue-400">
                  Next Year
                </div>
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
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Start Date
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select the starting date using the date picker, or use the "Use
                Today's Date" button.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Choose Operation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select whether you want to add days (move forward in time) or
                subtract days (move backward in time).
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Enter Number of Days
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter the number of days you want to add or subtract from the
                start date.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                View Result
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The calculator will show you the new date in a readable format,
                including the day of the week.
              </p>
            </div>
          </div>
        </div>

        {/* Common Time Periods */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Common Time Periods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { days: "1", description: "Tomorrow/Yesterday" },
              { days: "7", description: "1 Week" },
              { days: "14", description: "2 Weeks" },
              { days: "30", description: "1 Month" },
              { days: "60", description: "2 Months" },
              { days: "90", description: "3 Months" },
              { days: "180", description: "6 Months" },
              { days: "365", description: "1 Year" },
            ].map((period) => (
              <div
                key={period.days}
                className="group text-center p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30 hover:bg-gray-600/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-xl font-bold text-white mb-2">
                  {period.days} Day{period.days !== "1" ? "s" : ""}
                </div>
                <div className="text-sm text-gray-400">
                  {period.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
