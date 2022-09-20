import { SignInStyles } from "./SignInStyles";
import Input from "../../../components/Input/Input";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useTheme from "../../../hooks/useTheme";
import { signin } from "../../../config/endpoints";
// redux
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import SpinnerLoading from "../../../components/SpinnerLoading/SpinnerLoading";

export default function SignIn() {
  const { token, setTokenHook } = useToken();
  const { colors, fonts } = useTheme();
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });
  const [response, setResponse] = useState({ message: "", auth: null });
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  const navigateToHome = async () => {
    const res = await token.auth;
    if (res === true) {
      navigate("/dashboard/settings", { replace: true });
    }
  };

  const registerUser = async () => {
    setLoading(false);
    const post = await fetch(signin, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const response = await post.json();
    setTokenHook(response);
    setResponse(response);
    setLoading(null);
  };

  useEffect(() => {
    navigateToHome();
    // eslint-disable-next-line
  }, [registerUser]);

  const handlerForm = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <SignInStyles color={colors} font={fonts}>
      <form action="" onSubmit={handlerForm}>
        <Input
          title="E-mail:"
          type="email"
          placeh="email"
          state={email}
          setState={setEmail}
        />
        <Input
          title="Password:"
          type="password"
          placeh="password"
          state={password}
          setState={setPassword}
        />
        <button className="form__button">
          <ArrowRightIcon className="form__icon" />
        </button>
      </form>

      {response.message ? <p>{response.message}</p> : null}
      {loading === false ? <SpinnerLoading /> : null}
    </SignInStyles>
  );
}
