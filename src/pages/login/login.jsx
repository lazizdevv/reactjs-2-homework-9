import React from "react";
import { LoginCard } from "../../components/login-card/login-card";
import { useLogin } from "../../service/mutation/useLogin";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    
    mutate(data, {
      onSuccess: (res) => {
        console.log(data);
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };
  return (
    <>
      <LoginCard submit={submit} />
    </>
  );
};
