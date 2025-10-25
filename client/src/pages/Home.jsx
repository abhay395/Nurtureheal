import { useEffect } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) navigate('/health-analysis')
  },[])
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white p-10 rounded-2xl border border-gray-200 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Welcome to HealthTrack
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          A mini healthcare platform to track your daily health, get recommendations,
          and monitor your progress over time. Login or Sign up to start your health journey!
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 border border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-10 text-gray-400 text-sm">
          &copy; 2025 HealthTrack. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home