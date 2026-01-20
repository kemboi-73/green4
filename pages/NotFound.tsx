import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
      <AlertCircle className="w-20 h-20 text-emerald-600 mb-6" />
      <h1 className="text-6xl md:text-8xl font-extrabold text-stone-900 mb-4">
        404
      </h1>
      <p className="text-xl md:text-2xl text-stone-700 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <p className="text-stone-600 mb-8">
        It might have been moved or deleted. Don’t worry, you can go back home!
      </p>
      <Link
        to="/"
        className="bg-emerald-600 hover:bg-stone-900 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
