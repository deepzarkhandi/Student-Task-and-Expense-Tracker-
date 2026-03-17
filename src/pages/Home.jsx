import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-24 px-6">

        {/* Title */}
        <h1 className="text-6xl font-extrabold mb-16 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
          Productivity Platform
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-12">

          {/* Task Manager */}
          <Link
            to="/tasks"
            className="group w-72 p-10 rounded-3xl bg-[#1e293b]/80 backdrop-blur-lg border border-gray-700 
            shadow-xl hover:shadow-green-400/30 hover:-translate-y-4 
            transition-all duration-500"
          >
            <div className="flex flex-col items-center gap-4">

              <div className="text-5xl">📋</div>

              <h2 className="text-2xl font-bold group-hover:text-green-400 transition">
                Task Manager
              </h2>

              <div className="w-0 h-1 bg-green-400 rounded group-hover:w-full transition-all duration-500"></div>

              <p className="text-gray-400 text-sm">
                Organize and manage your daily tasks efficiently.
              </p>

            </div>
          </Link>


          {/* Expense Tracker */}
          <Link
            to="/expenses"
            className="group w-72 p-10 rounded-3xl bg-[#1e293b]/80 backdrop-blur-lg border border-gray-700 
            shadow-xl hover:shadow-green-400/30 hover:-translate-y-4 
            transition-all duration-500"
          >
            <div className="flex flex-col items-center gap-4">

              <div className="text-5xl">💰</div>

              <h2 className="text-2xl font-bold group-hover:text-green-400 transition">
                Expense Tracker
              </h2>

              <div className="w-0 h-1 bg-green-400 rounded group-hover:w-full transition-all duration-500"></div>

              <p className="text-gray-400 text-sm">
                Track your expenses and control your spending.
              </p>

            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}