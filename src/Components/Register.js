import React from "react";

export default function Register() {
  return (
    <div className="my-5">
      <h1 className="my-5">REGISTER</h1>
      <form>
        <div className="row">
          <div className="col-lg-12 my-3">
            <input
              className="px-2"
              placeholder="Enter Your Name"
              type="text"
              style={{ width: "400px", height: "40px", borderRadius: "10px" }}
            />
          </div>
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
          <div className="col-lg-12 my-3">
            <input
              className="px-2"
              placeholder="Confirm Password"
              type="password"
              style={{ width: "400px", height: "40px", borderRadius: "10px" }}
            />
          </div>
        </div>
        <p>
          Have an account? <a href="/login">Login</a>
        </p>
        <button className="btn btn-dark my-5" style={{ width: "400px" }}>
          REGISTER
        </button>
      </form>
    </div>
  );
}
