import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../services/firebase";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const googleRegister = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={register}>

        <h1>Create Account 🚀</h1>

        <p className="subtitle">
          Join SafeRoute AI
        </p>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          type="submit"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <button
          type="button"
          className="google-btn"
          onClick={googleRegister}
          disabled={loading}
        >
          Continue with Google
        </button>

        <p className="register-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Register;