import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ProtectedRoute from "./components/ProtectedRoute"; // ← tambahan

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Proteksi route di bawah ini */}
        <Route path="/" element={
          <ProtectedRoute><UserList /></ProtectedRoute>
        } />
        <Route path="/add" element={
          <ProtectedRoute><AddUser /></ProtectedRoute>
        } />
        <Route path="/edit/:id" element={
          <ProtectedRoute><EditUser /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
