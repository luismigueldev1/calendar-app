import React from "react";
//import { useForm } from "../../hooks/useForm";

export default function LoginForm({ setLogin }) {
  //const [values, handleInputChange, reset] = useForm({});
  return (
    <form className="bg-white p-5 shadow-sm rounded">
      <div className="text-center mb-3">
        <h3>Login</h3>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-link mt-3"
          onClick={() => setLogin((prevState) => !prevState)}
        >
          New user? Register
        </button>
      </div>
    </form>
  );
}
