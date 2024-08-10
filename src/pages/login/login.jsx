import React from "react";
import { LoginCard } from "../../components/login-card";
import { useLogin } from "../../service/mutation/useLogin";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(data);
        
        if (res && res.user && res.accessToken) {
          console.log(data);
          toast.success("Login Muvaffaqiyatli Bajarildi!");
          saveState("user", { ...res.user, token: res.accessToken });
          navigate("/");
        } else {
          toast.error("Email yoki Password Xato!");
        }
      },
    });
  };
  return (
    <>
      <LoginCard submit={submit} />
    </>
  );
};
