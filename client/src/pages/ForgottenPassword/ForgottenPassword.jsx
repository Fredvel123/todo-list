import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { resetPassword } from "../../config/endpoints";
import { ForgottenPasswordStyles } from "./ForgottenPasswrodStyles";
import useTheme from "../../hooks/useTheme";
import CardNotification from "../../components/CardNotification/CardNotification";

function ForgottenPassword() {
  const { colors } = useTheme();
  const [email, setEmail] = useState({ value: "" });
  const [response, setResponse] = useState({ message: "", status: false });

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(resetPassword + "/" + email.value);
      const res = await request.json();
      setResponse({ message: res.message, status: true });
    } catch (err) {
      setResponse({
        message: "Something went wrong, please try again",
        status: true,
      });
    }
  };

  return (
    <ForgottenPasswordStyles color={colors}>
      <Logo />
      <div className="content">
        <h1>Forgotten Password</h1>
        <p>
          If you've forget your password, don't worry. You only need your email
          to retrieve your password. but how? let me explain you.
        </p>
        <br />
        <p>
          We'll send you a new random password to your email. Then you can use
          this new password to change the current password to your new password,
          and that's it
        </p>
        <br />
        <p>
          To reset your password please insert your email and click the
          following button bellow
        </p>

        <form onSubmit={handlerSubmit}>
          <span>Your email:</span>
          <Input
            setState={setEmail}
            state={email}
            type="email"
            placeh="Please insert your email here"
          />
          <button>Reset password</button>
          {/* <a href={`${resetPassword}/${email.value}`} target="_blank">
            Reset password
          </a> */}
        </form>
        {/* <a href=""></a> */}
      </div>

      <CardNotification btn="Close" state={response} setState={setResponse} />
    </ForgottenPasswordStyles>
  );
}

export default ForgottenPassword;
