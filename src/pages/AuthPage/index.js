import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

export default function AuthPage() {
  const [login, setLogin] = useState(true);
  return (
    <div className="cotainer">
      <div
        className="row vh-100 w-100 m-0 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="col-sm-12 col-md-4 p-0">
          {login ? (
            <LoginForm setLogin={setLogin} />
          ) : (
            <RegisterForm setLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
