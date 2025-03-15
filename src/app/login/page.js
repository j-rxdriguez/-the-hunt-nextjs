import Navbar from "../components/navbar";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        {/* Add your login form content here */}
      </main>
    </div>
  );
}
