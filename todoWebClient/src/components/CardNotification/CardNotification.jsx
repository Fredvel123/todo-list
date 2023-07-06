import { CardNotificationStyles } from "./CardNotificationStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useTheme from "../../hooks/useTheme";

export default function CardNotification({ btn, state, setState }) {
  const { colors, fonts } = useTheme();
  const closeCard = () => {
    setState({ ...state, status: false });
    if (state.callback && state.callback !== null) {
      state.callback();
    }
  };
  return (
    <CardNotificationStyles font={fonts} color={colors} active={state.status}>
      {state.status ? <p>{state.message}</p> : null}
      {btn ? (
        <div className="button">
          <button onClick={closeCard}>{btn}</button>
        </div>
      ) : null}
      <XMarkIcon className="close" onClick={closeCard} />
    </CardNotificationStyles>
  );
}
