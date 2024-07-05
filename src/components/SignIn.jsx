import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      await signInWithPopup(auth, provider).then((result) => {
        setValue(result.user.email);
        localStorage.setItem("email", result.user.email);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [value]);

  return (
    <div className="w-full max-w-2xl mx-auto p-10 flex flex-col justify-center items-center gap-2 text-center">
      <h1 className="text-3xl font-medium mb-2">
        Sign in with Google Authentication
      </h1>
      <p>Please sign in your account.</p>

      {value ? (
        navigate("/home")
      ) : (
        <button
          onClick={handleAuth}
          className="flex justify-center items-center gap-2 mt-10 py-3 px-3 border border-zinc-400 text-black font-medium text-sm rounded"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </button>
      )}
    </div>
  );
}
