import "./auth-layout.css";

import ButtonCustom from "../../common/button/ButtonCustom";

import { Link } from "react-router-dom";

const AuthLayout = ({ authType }) => {
  return (
    <div className="auth-layout">
      <div className="container">
        <img src="/images/logo_auth.svg" alt="logo auth" />
        <div className="auth-form">
          <h2>{authType.replace(/^\w/, (c) => c.toUpperCase())}</h2>
          <form action="#">
            {authType == "login" ? (
              <>
                {" "}
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Password" />
                <a href="#" className="forgot-password">
                  Forgot Password ?
                </a>
              </>
            ) : (
              <>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Phone" />
              </>
            )}

            <ButtonCustom text={authType === "login" ? "Login" : "Sign up"} />
            <a href="#" className="auth-divider">
              {authType == "login" ? "Or Login with" : "Or Sign up with"}
            </a>
            <div className="social-providers">
              <div>
                <img src="/images/google.svg" alt="google logo" />
              </div>
              <div>
                <img src="/images/apple.svg" alt="apple logo" />
              </div>
              <div>
                <img src="/images/phone-number.svg" alt="phone number logo" />
              </div>
            </div>
            <div className="auth-switch">
              <span>
                {authType == "login"
                  ? "You don’t have an account?"
                  : "You already have an account"}
              </span>
              {authType == "login" ? (
                <>
                  <Link to={"/signup"}>Sign up</Link>
                </>
              ) : (
                <>
                  <Link to={"/login"}>Login</Link>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
