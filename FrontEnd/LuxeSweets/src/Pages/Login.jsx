import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <section className="bg-[url('/src/assets/sign-bg.jpg')] bg-no-repeat bg-cover bg-center dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
    
      <div className="w-full max-w-md p-6 bg-white bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24">
        <h1 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl dark:text-white mb-6 text-center">
          تسجيل الدخول
        </h1>
        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@gmail.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="text-sm text-gray-900 dark:text-gray-400 flex justify-center">
            ليس لديك حساب بالفعل?{" "}
            <Link
              to="/Signup"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              إنشاء حساب
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
