import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/signup"
import TaskManager from "./pages/TaskManager"
import ExpenseTracker from "./pages/ExpenseTracker"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/expenses" element={<ExpenseTracker />} />

      </Routes>
    </BrowserRouter>
  )
};