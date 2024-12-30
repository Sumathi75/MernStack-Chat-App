import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
const SignupPage = () => {

  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});   

  const {  signup } = useSignup();


  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
  
  
  
	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6  rounded-lg shadow-md bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          <span className="hover:underline"> Sign Up </span>
          <span className="text-sky-500"> ChatApp </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}

            />
          </div>
         


          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />


          <div>
            <button className="btn btn-block btn-md mt-2 text-gray-100 hover:text-sky-500">Sign Up</button>
          </div>

          <Link to='/login' className='text-sm  text-gray-100 hover:underline hover:text-sky-500 mt-2 inline-block'>
						Already have an account?
					</Link>


        </form>
      </div>
    </div>
  );
};

export default SignupPage;
