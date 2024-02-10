import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-slate-700">Error Page</h1>
      <p className="mt-5 text-xl font-semibold italic text-red-500">
        Error : {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
