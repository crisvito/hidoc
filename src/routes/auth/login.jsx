import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { Button } from "../../components";
import { AuthContext } from "../../context";

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
      <div className="md:w-1/5 w-3/4 py-6 h-full">
        <Link className="absolute left-5 top-5 text-blue-900 font-bold" to="/">
          back to home
        </Link>
        <form
          className="auth flex flex-col items-center"
          onSubmit={handleLogin}
        >
          <img src="/assets/logo/main.png" alt="hidoc" className="py-5" />
          {error && (
            <span className="block w-full font-semibold text-center text-gray-800 bg-red-200 w-full mb-5 px-4 py-2 rounded text-xs tracking-wider">
              something went wrong!!
            </span>
          )}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            children="Sign in"
            className="px-7 uppercase text-sm w-full"
          />
          <span className="mt-2 text-xs tracking-wider">
            Sudah Daftar?{" "}
            <Link to="/register" className="text-blue-900 font-semibold">
              Daftar Sekarang
            </Link>
          </span>
          <p className="text-center font-medium mx-4 my-4">OR</p>
          <button
            className="login-button"
            type="button"
            onClick={handleFacebook}
          >
            <img src="/google.png" alt="facebook" className="w-8" />
            Continue with Google
          </button>
          <button
            className="login-button bg-blue-900 text-white"
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
