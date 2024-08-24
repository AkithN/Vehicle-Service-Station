import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import bck from "../../assets/bck.jpg"; // Import background image


const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/roles');
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/signup', { fullName, userType, email, password });
      navigate("/login");
    } catch (error) {
      alert("Error creating account. Please try again.");
    }
  };

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
          <form className="form_container" onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <select
              name="userType"
              required
              className="input"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option className="option-container" value="" disabled>Select User Type</option>
              {roles.map((role) => (
                <option key={role.roleId} className="option-container" value={role.roleName}>{role.roleName}</option>
              ))}
            </select>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./signup.css";

// const Signup = () => {
//   const [fullName, setFullName] = useState("");
//   const [userType, setUserType] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [roles, setRoles] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/roles');
//         setRoles(response.data);
//       } catch (error) {
//         console.error("Error fetching roles:", error);
//       }
//     };

//     fetchRoles();
//   }, []);

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:5000/api/auth/signup', { fullName, userType, email, password });
//       navigate("/login");
//     } catch (error) {
//       alert("Error creating account. Please try again.");
//     }
//   };

//   return (
//     <div className="signup_container">
//       <div className="signup_form_container">
//         <div className="reg-left">
//           <h1>Welcome Back</h1>
//           <Link to="/login">
//             <button type="button" className="white_btn">
//               Sign in
//             </button>
//           </Link>
//         </div>
//         <div className="reg-right">
//           <form className="form_container" onSubmit={handleSignup}>
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               placeholder="Full Name"
//               name="fullName"
//               required
//               className="input"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <select
//               name="userType"
//               required
//               className="input"
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//             >
//               <option className="option-container" value="" disabled>Select User Type</option>
//               {roles.map((role) => (
//                 <option key={role.roleId} className="option-container" value={role.roleName}>{role.roleName}</option>
//               ))}
//             </select>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               required
//               className="input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               required
//               className="input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit" className="green_btn">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
