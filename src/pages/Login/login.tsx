// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Login() {
//     const [email, setEmail] = useState<string>("")
//     const [password, setPassword] = useState<string>("")

//     const [error, setError] = useState<string>("")

//     const navigate = useNavigate()
    
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
//         e.preventDefault()
//          if (!email || !password) {
//              setError("Barcha maydonlarni to‘ldiring")
//               return }
//         if (email === "admin@mail.com" && password === "12345") { 
//                 localStorage.setItem("auth", "true")
//                  navigate("/")
//                 } 
//               else {
//                  setError("Email yoki password noto‘g‘ri")
//                 }
// }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}> 
//                 {error && <p>{error}</p>}
//                 <input 
//                     type="email" 
//                     placeholder="Email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                 /> 
//                 <input type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                 />


//                 <button type="submit">Login</button> 
//             </form>
//         </div>
//     )
// }
// export default Login;