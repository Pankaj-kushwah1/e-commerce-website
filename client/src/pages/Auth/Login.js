import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState(null); // State to store the user data
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is already logged in
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      setAuth(parsedAuth);
      setUser(parsedAuth.user); // Set the user data from local storage
      setLoggedIn(true); // Mark the user as logged in
      navigate(location.state || "/");
    }
  }, [setAuth, navigate, location.state]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success === true) {
        toast.success(res.data && res.data.message);

        // Update user authentication context
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });

        // Store auth data in localStorage
        const authData = {
          user: res.data.user,
          token: res.data.token,
        };
        localStorage.setItem("auth", JSON.stringify(authData));
        setUser(res.data.user); // Update the user state
        setLoggedIn(true); // Mark the user as logged in

        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

          {loggedIn && user && (
            <div>
              <h3>Welcome back, {user.name}!</h3>
              {/* Display other user information here */}
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
