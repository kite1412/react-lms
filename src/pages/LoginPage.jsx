import { useState } from "react";
import logo from "../assets/logo.svg";
import eye from "../assets/eye.svg";
import eyeSlash from "../assets/eye-slash.svg";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const buttonDisabled = !username || !password

  return (
    <div className="text-white w-full max-h-screen h-full bg-[url('./assets/loginBackground.png')] bg-cover bg-center flex justify-end items-center">
      <div className="absolute inset-0 backdrop-blur-[2px] w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#010101] to-[#3c3b3b] opacity-80 w-full h-full" />
      <div className="login-container text-black w-1/3 min-w-[360px] max-w-[500px] h-160 p-10 flex justify-center bg-white mx-13 relative">
        <div className="flex flex-col items-center  w-xs justify-evenly h-[90%] ">
          <img
            src={logo}
            alt="logo"
            draggable="false"
            className="h-[190px] w-[190px]"
          />
          <h2>Sign in Your Account</h2>
          <ul className="w-full flex flex-col gap-3 font-light">
            <li className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-[#D9D9D9] outline-none rounded-md h-10 px-2"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </li>
            <li className="flex flex-col gap-1 ">
              <label htmlFor="password">Password</label>
              <div className="w-full relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-[#D9D9D9] outline-none rounded-md h-10 px-2 w-full pr-9"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <img
                  src={showPassword ? eye : eyeSlash}
                  alt="hidden"
                  className="w-[20px] absolute cursor-pointer top-3 right-3"
                  draggable="false"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <a href="#" className="text-black text-xs self-end font-light">
                Forgot password?
              </a>
            </li>
          </ul>

          <button 
            className={`
              bg-[#0A376E] text-white w-full py-1 rounded-4xl hover:cursor-pointer mt-4
              ${buttonDisabled ? "opacity-70" : "opacity-100"}
            `}
            onClick={() => {
              login(username, password);
            }}
            disabled={buttonDisabled}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
