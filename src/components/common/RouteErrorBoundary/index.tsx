import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import errorImage from "@/assets/images/Error.svg";

export default function RouteErrorBoundary() {
  const error = useRouteError();

  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center border border-slate-200">
        
        <div className="flex justify-center mb-6">
          <img 
            src={errorImage} 
            alt="Error" 
            className="object-contain"
          />
        </div>

        <h1 className="text-2xl font-semibold text-slate-800 mb-3">
          Something went wrong
        </h1>

        <p className="text-sm text-slate-600 mb-6 break-words">
          {message}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="w-full py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all duration-200"
        >
          Reload Page
        </button>

      </div>
    </div>
  );
}
