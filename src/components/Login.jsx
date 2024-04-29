import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

const Login = () => {
	const signInUser = () => {
		signInWithPopup(auth, provider).catch((err) =>
			alert("An error Occured" + err.message)
		);
	};
	return (
		<div className="flex items-center justify-around text-center mt-[5%] bg-she_sell p-10">
			<div className="flex flex-col">
				<p className="items-start p-10 text-9xl font-bold font-sans text-orange-400">
					SheSell
				</p>
				<p className="text-red-500 text-xl ml-10 pl-10">
					SheSell helps you to be an Entrepreneur and sell your product to
					maximize your profit...
				</p>
			</div>
			<div>
				<div className="flex float-right m-10 p-5">
					<form className="bg-white shadow-2xl rounded p-14 pt-4">
						<div className="mb-4 p-10">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								for="username"
							>
								User
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="Enter Mail or Phone"
							/>
						</div>
						<div className="mb-6 px-10">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								for="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******"
							/>
						</div>
						<div className="flex items-center justify-around">
							<button
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
								type="button"
								onClick={signInUser}
							>
								Sign In
							</button>
							<button
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
								onClick={signInUser}
							>
								Forgot Password?
							</button>
						</div>
						<div className="m-3 p-3">
							<button
								className="bg-green-500 hover:bg-green-700 rounded-full p-3 inline-block align-baseline font-bold text-sm text-white"
								onClick={signInUser}
							>
								Create new account
							</button>
						</div>
						<p className="text-center text-gray-500 text-xs">
							&copy;2024 SheSell. All rights reserved.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
