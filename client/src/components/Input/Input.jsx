import useTheme from "../../hooks/useTheme";
import { InputStyles } from "./InputStyles";

export default function Input({
  type,
  placeh,
  title,
  state,
  setState,
  expression,
  matchPsswd,
}) {
  const { colors, fonts } = useTheme();
  const handlerState = (e) => {
    setState({ ...state, value: e.target.value });
  };

  const validate = () => {
    if (expression) {
      if (expression.test(state.value)) {
        setState({ ...state, isValid: true });
      } else {
        setState({ ...state, isValid: false });
      }
    }
    if (matchPsswd) {
      matchPsswd();
    }
  };
  return (
    <InputStyles color={colors} font={fonts}>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeh}
        onChange={handlerState}
        onKeyUp={validate}
        onBlur={validate}
        required
      />
    </InputStyles>
  );
}
