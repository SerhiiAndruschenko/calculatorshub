"use client";

import Link from "next/link";
import { useState } from "react";

export default function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDifference = () => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
    const weeks = Math.floor(diffDays / 7);

    return { years, months, days, weeks, totalDays: diffDays };
  };

  const difference = calculateDifference();

  const clearCalculator = () => {
    setStartDate("");
    setEndDate("");
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-3xl shadow-2xl mb-6">
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent">
            Date Difference Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate the difference between two dates with precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Fields */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Calculate Difference
                </h2>
                <p className="text-gray-400">
                  Enter start and end dates to find the time difference
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
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:border-teal-500 text-lg font-medium transition-all duration-300"
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
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
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

                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      setStartDate(new Date().toISOString().split("T")[0])
                    }
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📅 Start: Today
                  </button>
                  <button
                    onClick={() =>
                      setEndDate(new Date().toISOString().split("T")[0])
                    }
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📅 End: Today
                  </button>
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
                <h2 className="text-3xl font-bold text-white mb-2">
                  Time Difference
                </h2>
                <p className="text-gray-400">
                  Your calculated time difference breakdown
                </p>
              </div>

              {difference ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-500/30">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-blue-200 font-medium">
                        Years
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {difference.years}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-green-200 font-medium">
                        Months
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {difference.months}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-purple-200 font-medium">
                        Weeks
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {difference.weeks}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-2xl border border-orange-500/30">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-orange-200 font-medium">
                        Days
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {difference.days}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-gray-300 font-medium">
                        Total Days
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {difference.totalDays}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 bg-gray-700/30 rounded-2xl border border-gray-600/30 text-center">
                  <div className="text-gray-400 text-lg">
                    Enter dates to calculate difference
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Date Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quick Date Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  New Year to Today
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Jan 1, 2024
                  <br />
                  End: Today
                </p>
                <div className="text-2xl font-bold text-blue-400">
                  ~11 months
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Summer Break
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Jun 1, 2024
                  <br />
                  End: Aug 31, 2024
                </p>
                <div className="text-2xl font-bold text-green-400">
                  3 months
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">Work Week</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Start: Monday
                  <br />
                  End: Friday
                </p>
                <div className="text-2xl font-bold text-purple-400">5 days</div>
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
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Enter Start Date
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select the starting date using the date picker.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Enter End Date
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select the ending date to calculate the difference up to.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Quick Buttons
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use the "Start: Today" and "End: Today" buttons to quickly set
                dates to today.
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
                See the time difference broken down into years, months, weeks,
                and days.
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
              { period: "1 Day", description: "24 hours" },
              { period: "1 Week", description: "7 days" },
              { period: "1 Month", description: "~30 days" },
              { period: "1 Quarter", description: "3 months" },
              { period: "1 Semester", description: "6 months" },
              { period: "1 Year", description: "365 days" },
              { period: "1 Decade", description: "10 years" },
              { period: "1 Century", description: "100 years" },
            ].map((time) => (
              <div
                key={time.period}
                className="group text-center p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30 hover:bg-gray-600/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-xl font-bold text-white mb-2">
                  {time.period}
                </div>
                <div className="text-sm text-gray-400">{time.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
