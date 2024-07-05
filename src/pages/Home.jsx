import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import pixelArt from "../assets/heeeex.gif";

export default function Home() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const logout = async () => {
    await signOut(auth);
    setIsLoggingOut(true);
    localStorage.clear();

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen grid place-items-center bg-zinc-900 text-zinc-200 text-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <img src={pixelArt} className="w-60 mb-1" />
        <h1 className="text-4xl font-medium">Authentication Complete</h1>
        <p className="text-sm font-bold text-zinc-400">You are logged in</p>
        <div className="flex mt-12">
          <button
            disabled={isLoggingOut}
            onClick={logout}
            className="px-3 py-2 rounded bg-white text-sm text-black font-bold disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
