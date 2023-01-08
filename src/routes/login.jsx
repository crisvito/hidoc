import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { Button } from "../components";
import { AuthContext } from "../context";

export function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(() => setError(true));
  }
  function handleFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(() => setError(true));
  }

  return (
    <div className="flex justify-center">
      <div className="lg:w-1/5 md:w-2/5 w-3/4 py-6 h-full">
        <Link
          className="absolute left-10 top-10 text-blue-900 font-bold"
          to="/"
        >
          back to home
        </Link>
        <form className="flex flex-col items-center" onSubmit={handleLogin}>
          <img src="/assets/logo/main.png" alt="hidoc" className="py-5" />
          {error && (
            <span className="block w-full font-semibold text-center text-gray-800 bg-red-200 w-full mb-5 px-4 py-2 rounded text-xs tracking-wider">
              something went wrong!!
            </span>
          )}
          <div className="mb-6">
            <input
              type="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-solid border-gray-300 rounded
                duration-300 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-solid border-gray-300 rounded duration-300 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            children="Sign in"
            className="px-7 md:w-full w-1/2 uppercase text-sm"
          />
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-medium mx-4 mb-0">OR</p>
          </div>
          <button
            className="px-7 py-3 text-black bg-white font-semibold text-xs uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out md:w-full w-3/4 flex justify-center items-center mb-3 gap-5"
            type="button"
            onClick={handleFacebook}
          >
            <img src="/google.png" alt="facebook" className="w-8" />
            Continue with Google
          </button>
          <button
            type="button"
            className="px-7 py-3 text-left text-white font-semibold text-xs uppercase rounded bg-blue-900 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg gap-5 md:w-full w-3/4 flex justify-center items-center"
            onClick={handleFacebook}
          >
            <img src="/fb.png" alt="facebook" className="w-8" />
            Continue with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
