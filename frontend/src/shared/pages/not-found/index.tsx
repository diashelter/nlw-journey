import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-zinc-400">Page Not Found</h1>
      <h2 className="text-9xl font-extrabold text-lime-300">404</h2>
      <p className="text-zinc-400">
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
