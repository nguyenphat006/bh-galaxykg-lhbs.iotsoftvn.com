import { isRouteErrorResponse } from 'react-router';
import { Link } from 'react-router';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  error: unknown;
}

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  // Check if it's a 404 error
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  
  if (is404) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a5336] to-[#0f3a26] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] font-bold text-white/10 leading-none">
              404
            </h1>
            <div className="relative -mt-16 md:-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-white/80 mb-8">
                We couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
          </div>

          {/* School-themed illustration */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-white/60" />
            </div>
            <p className="text-white/70 text-sm">
              Don't worry, even the best students sometimes take a wrong turn!
            </p>
          </div>

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
              className="group inline-flex items-center gap-3 bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-6">Or explore these popular pages:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/admissions"
                className="text-white/80 hover:text-[#FABA1E] text-sm py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Admissions
              </Link>
              <Link
                to="/high-school"
                className="text-white/80 hover:text-[#FABA1E] text-sm py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                High School
              </Link>
              <Link
                to="/primary-school"
                className="text-white/80 hover:text-[#FABA1E] text-sm py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Primary School
              </Link>
              <Link
                to="/our-school"
                className="text-white/80 hover:text-[#FABA1E] text-sm py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* School branding */}
          <div className="mt-12 text-center">
            <p className="text-white/40 text-xs">
              © 2025 Lac Hong Bilingual School - Trường Song ngữ Lạc Hồng
            </p>
          </div>
        </div>
      </div>
    );
  }

  // For other errors (500, etc)
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `Error ${error.status}`;
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a5336] to-[#0f3a26] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {message}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            {details}
          </p>
        </div>

        {/* Error Stack (Dev only) */}
        {stack && (
          <div className="mb-8 bg-black/30 rounded-lg p-4 text-left">
            <pre className="text-xs text-white/70 overflow-auto max-h-48">
              <code>{stack}</code>
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 bg-[#FABA1E] text-[#1a5336] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a812] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="group inline-flex items-center gap-3 bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Try Again
          </button>
        </div>

        {/* School branding */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-xs">
            © 2025 Lac Hong Bilingual School - Trường Song ngữ Lạc Hồng
          </p>
        </div>
      </div>
    </div>
  );
}