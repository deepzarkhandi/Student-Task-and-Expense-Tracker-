import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1>Student App</h1>

      <div className="space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  )
}