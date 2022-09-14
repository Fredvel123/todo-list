import Input from "../../../components/Input/Input";
import useTheme from "../../../hooks/useTheme";
import { SignUpStyles } from "./SignUpStyles";

export default function SignUp() {
  const { colors } = useTheme();
  return (
    <SignUpStyles color={colors}>
      <form action="">
        <Input type="email" placeh="email" title="E-mail:" />
        <Input type="text" placeh="full name" title="Full Name:" />
        <Input type="password" placeh="password" title="Password:" />
        <Input type="password" placeh="password" title="Repeate Password:" />
        {/* <Input type="" placeh="" title="" /> */}
        <button>dfds</button>
      </form>
      <p>message</p>
    </SignUpStyles>
  );
}
