import { Link } from 'react-router';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function CatchAllPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Large 404 Number */}
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold text-[#1a5336]/10 leading-none">
            404
          </h1>
          <div className="relative -mt-16 md:-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
        </div>

        {/* School-themed illustration */}
        {/* <div className="mb-12">
          <div className="w-32 h-32 mx-auto bg-[#1a5336]/10 rounded-full flex items-center justify-center mb-6">
            <Search className="w-16 h-16 text-[#1a5336]/60" />
          </div>
          <p className="text-gray-500 text-sm">
            Don't worry, even the best students sometimes take a wrong turn!
          </p>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 bg-[#FABA1E] text-[#1a5336] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a812] transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 bg-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-6">Or explore these popular pages:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              to="/admissions"
              className="text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Admissions
            </Link>
            <Link
              to="/high-school"
              className="text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              High School
            </Link>
            <Link
              to="/primary-school"
              className="text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Primary School
            </Link>
            <Link
              to="/our-school"
              className="text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}