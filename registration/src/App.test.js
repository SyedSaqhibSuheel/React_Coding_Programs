import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import React, { useState } from "react";

// export default function RegistrationForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   // In your registration form, when the user submits the form, 
//   // you want to first check if the input values are valid before submitting them. 
//   // You don't want the page to reload before that happens, so you use e.preventDefault():

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation
//     if (!name || !email || !password || !confirmPassword) {
//       setError("All fields are required.");
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Enter a valid email address.");
//     } else if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//     } else if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//     } else {
//       setError("");
//       alert("Registration Successful!");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ padding: "8px", width: "200px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ padding: "8px", width: "200px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: "8px", width: "200px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={{ padding: "8px", width: "200px" }}
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//           }}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }
