import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState();

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create user with email & password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="md:max-w-xl mx-auto">
        <h2 className="text-center font-bold text-3xl my-10">
          {" "}
          Register Page.{" "}
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-black rounded  px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="border-2 border-black rounded  px-3 py-2 w-full"
            required
          />
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
            value="Register"
            className="btn btn-neutral w-full"
          />
        </form>
        <p className="my-2 text-center">
          Already have an accout? Please{" "}
          <Link to="/login" className="btn-link">
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
