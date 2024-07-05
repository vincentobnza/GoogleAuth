import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-full min-h-screen grid place-items-center bg-slate-50 font-space">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
