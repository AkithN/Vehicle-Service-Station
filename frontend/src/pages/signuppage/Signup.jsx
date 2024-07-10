import React from "react";
import { Link } from "react-router-dom";
import  "./signup.css";

const Signup = () => {
	

	return (
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="reg-left">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="white_btn">
							Sign in
						</button>
					</Link>
				</div>
				<div className="reg-right">
					<form className="form_container" >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Full Name"
							name="fullName"


							required
							className="input"
						/>
						<select
							name="userType"


							required
							className="input"
						>
								<option className="option-container" value="" disabled>Select User Type</option>
								<option className="option-container" value="Vehicle Owner">Vehicle Owner</option>
								<option className="option-container" value="Garage Owner">Garage Owner</option>
						</select>
						<input
							type="email"
							placeholder="Email"
							name="email"
		
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"


							required
							className="input"
						/>
			
						<button type="submit" className="green_btn">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;