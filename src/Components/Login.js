import React from "react";

export default function Login() {
  return (
    <div className="my-5">
      <h1 className="my-5">LOGIN</h1>
      <form>
        <div className="row">
          <div className="col-lg-12 my-3">
            <input
              className="px-2"
              placeholder="Enter Your Email"
              type="email"
              style={{ width: "400px", height: "40px", borderRadius: "10px" }}
            />
          </div>
          <div className="col-lg-12 my-3">
            <input
              className="px-2"
              placeholder="Enter Your Password"
              type="password"
              style={{ width: "400px", height: "40px", borderRadius: "10px" }}
            />
          </div>
        </div>
        <p>
          Dont have an account? <a href="/register">Register</a>
        </p>
        <button className="btn btn-dark my-5" style={{ width: "400px" }}>
          Login
        </button>
      </form>
    </div>
  );
}
