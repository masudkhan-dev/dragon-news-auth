import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const hanleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // login
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="md:max-w-xl mx-auto">
        <h2 className="text-center font-bold text-3xl my-10"> Login Page. </h2>
        <form onSubmit={hanleLogin} className="flex flex-col gap-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 border-black rounded  px-3 py-2 w-full"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border-2 border-black rounded  px-3 py-2 w-full"
            required
          />
          <label
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center gap-x-2"
          >
            <input type="checkbox" />
            Show Password
          </label>

          <input
            type="submit"
            value="Login"
            className="btn btn-neutral w-full"
          />
        </form>
        <p className="my-2 text-center">
          Already have an accout? Please{" "}
          <Link to="/register" className="btn-link">
            {" "}
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
