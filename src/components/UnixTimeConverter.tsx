"use client";
import Link from "next/link";
import { useState } from "react";

export default function UnixTimeConverter() {
  const [unixTimestamp, setUnixTimestamp] = useState("");
  const [humanDate, setHumanDate] = useState("");
  const [conversionType, setConversionType] = useState("unixToHuman");
  const [result, setResult] = useState("");

  const convertUnixToHuman = () => {
    if (unixTimestamp) {
      const timestamp = parseInt(unixTimestamp);
      if (isNaN(timestamp)) {
        setResult("Invalid timestamp");
        return;
      }

      const date = new Date(timestamp * 1000);
      const formattedDate = date.toLocaleString();
      setResult(formattedDate);
    }
  };

  const convertHumanToUnix = () => {
    if (humanDate) {
      const date = new Date(humanDate);
      if (isNaN(date.getTime())) {
        setResult("Invalid date");
        return;
      }

      const unixTime = Math.floor(date.getTime() / 1000);
      setResult(unixTime.toString());
    }
  };

  const useCurrentTime = () => {
    const now = new Date();
    const unixTime = Math.floor(now.getTime() / 1000);
    setUnixTimestamp(unixTime.toString());
    setHumanDate(now.toISOString().slice(0, 16));
  };

  const handleConvert = () => {
    if (conversionType === "unixToHuman") {
      convertUnixToHuman();
    } else {
      convertHumanToUnix();
    }
  };

  const clearCalculator = () => {
    setUnixTimestamp("");
    setHumanDate("");
    setResult("");
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl shadow-2xl mb-6">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Unix Time Converter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Convert between Unix timestamps and human-readable dates with
            precision
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Convert Time
                </h2>
                <p className="text-gray-400">
                  Choose conversion direction and enter values
                </p>
              </div>

              {/* Conversion Type Toggle */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-200 mb-3">
                  Conversion Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setConversionType("unixToHuman")}
                    className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      conversionType === "unixToHuman"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                    }`}
                  >
                    Unix → Human
                  </button>
                  <button
                    onClick={() => setConversionType("humanToUnix")}
                    className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      conversionType === "humanToUnix"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                        : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 border-2 border-gray-600/50"
                    }`}
                  >
                    Human → Unix
                  </button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-6">
                {conversionType === "unixToHuman" ? (
                  <div className="space-y-4">
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Unix Timestamp
                    </label>
                    <input
                      type="number"
                      placeholder="1640995200"
                      value={unixTimestamp}
                      onChange={(e) => setUnixTimestamp(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg font-medium transition-all duration-300"
                    />
                    <p className="text-sm text-gray-400 text-center">
                      Enter seconds since January 1, 1970 UTC
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={humanDate}
                      onChange={(e) => setHumanDate(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700/60 border-2 border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 text-lg font-medium transition-all duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleConvert}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🔄 Convert
                </button>
                <div className="flex space-x-4">
                  <button
                    onClick={useCurrentTime}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    ⏰ Use Current Time
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
                <p className="text-gray-400">Your converted time value</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-8 rounded-2xl border border-cyan-500/30">
                  <div className="text-center space-y-3">
                    <div className="text-sm text-cyan-200 font-medium">
                      Converted Value
                    </div>
                    <div className="text-3xl font-bold text-white break-all">
                      {result || "Enter values and click Convert"}
                    </div>
                  </div>
                </div>

                {/* Current Time Display */}
                <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30">
                  <div className="text-center space-y-3">
                    <div className="text-sm text-gray-400 font-medium">
                      Current Time
                    </div>
                    <div className="text-xl font-semibold text-white">
                      {new Date().toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      Unix: {Math.floor(Date.now() / 1000)}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Unix: 1640995200
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Human: January 1, 2022, 12:00:00 PM UTC
                </p>
                <div className="text-2xl font-bold text-blue-400">
                  New Year 2022
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">Unix: 0</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Human: January 1, 1970, 12:00:00 AM UTC
                </p>
                <div className="text-2xl font-bold text-emerald-400">
                  Unix Epoch
                </div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-3">
                  Unix: 1704067200
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Human: January 1, 2024, 12:00:00 PM UTC
                </p>
                <div className="text-2xl font-bold text-purple-400">
                  New Year 2024
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Unix to Human Date
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enter a Unix timestamp (seconds since January 1, 1970 UTC) to
                convert it to a human-readable date and time.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Human Date to Unix
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Select a date and time to convert it to a Unix timestamp.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Current Time
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use the "Use Current Time" button to quickly get the current
                Unix timestamp and human date.
              </p>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            About Unix Time
          </h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30">
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Unix time (also known as POSIX time or epoch time) is a system
                for describing instants in time, defined as the number of
                seconds that have elapsed since 00:00:00 Coordinated Universal
                Time (UTC), Thursday, 1 January 1970.
              </p>
              <p className="leading-relaxed">
                Unix timestamps are widely used in programming and databases
                because they are:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Easy to compare and sort</li>
                <li>Language and timezone independent</li>
                <li>Compact representation</li>
                <li>Precise to the second</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
