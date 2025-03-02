import bgImage from "../assets/loginBackground.png";
import logo from "../assets/logo.svg";

function LoginPage() {
  return (
    <div className="text-white w-full max-h-screen h-full bg-[url('./assets/loginBackground.png')] bg-cover bg-center flex justify-end items-center">
      <div className="login-container text-black w-100 h-160  p-10 flex justify-center bg-white mx-13">
        <div className="flex flex-col items-center  w-xs justify-evenly h-[80%] ">
          <img
            src={logo}
            alt="logo"
            draggable="false"
            className="h-[190px] w-[190px]"
          />
          <h2>Sign in Your Account</h2>
          <ul className="w-full flex flex-col gap-2">
            <li className="flex flex-col">
              <label htmlFor="username" className="font-light">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-[#D9D9D9] outline-none rounded-md h-7 px-2"
              />
            </li>
            <li className="flex flex-col ">
              <label htmlFor="password" className="font-light">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#D9D9D9] outline-none rounded-md h-7 px-2"
              />
              <a href="#" className="text-black text-xs self-end font-light">
                Forgot password?
              </a>
            </li>
          </ul>

          <button className="bg-[#0A376E] text-white w-full py-1 rounded-xl">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
