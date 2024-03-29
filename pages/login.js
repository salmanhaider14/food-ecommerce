import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateContext } from "../contexts/StateContext";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const { setUser } = useStateContext();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
      );

      setErrors(null);
      router.push("/");
    } catch (error) {
      setErrors(error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <head>
        <title>Login</title>
      </head>
      <div className="register-page">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <AiOutlineUser size={50} />
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Don't have any account ? <Link href={"/register"}>Register</Link>
          </p>
          {errors && <div className="alert alert-danger">{errors}</div>}
          <button type="submit" className="btne">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
