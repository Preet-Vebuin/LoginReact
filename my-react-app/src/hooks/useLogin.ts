import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { loginSchema } from "../validations/LoginValidations";
import { loginUser } from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { SelectChangeEvent } from "@mui/material"; 


interface LoginForm {
  username: string;
  password: string;
  role: string;
}

export const useLogin = () => {
  const [formData, setFormData] = useState<LoginForm>({ username: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUser } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = loginSchema.validate(formData, { abortEarly: false });

    if (error) {
      setError(error.details[0].message);
      return;
    }

    try {
      const data = await loginUser(formData.username, formData.password);
      console.log("Login Success:", data);
      const { token, user } = data;
      const { username, email, role } = user;

      console.log("IN LOGIN COMPONENT Token:", token, "Username:", username, "Role:", role);

      dispatch(login({ token, role })); // Store token & role in Redux
      setUser({ username, email, role }); // Store user details in Context API

      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Login failed! Try again.");
      } else {
        setError("Login failed! Unknown error.");
      }
    }
  };

  return { formData, error, handleInputChange,handleSelectChange, handleSubmit };
};
