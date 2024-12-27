import {  Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthContext } from "./context/AuthContext";

function App() {

  const {authUser} = useAuthContext();

  return (
    <div className="h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" /> } />
        <Route path="/login" element={ authUser ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/signup" element={  authUser ? <Navigate to="/" /> : <SignupPage /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
