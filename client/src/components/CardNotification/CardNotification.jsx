import { CardNotificationStyles } from "./CardNotificationStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useTheme from "../../hooks/useTheme";
import useCardNotification from "./useCardNotification";

export default function CardNotification({ title, desc, btn1, btn2 }) {
  const { colors } = useTheme();
  const { handlerIcon, open } = useCardNotification();

  return (
    <CardNotificationStyles color={colors} active={open}>
      <h2>{title}</h2>
      <p>{desc}</p>
      {btn1 || btn2 ? (
        <div className="buttons">
          <button>{btn1}</button>
          <button>{btn2}</button>
        </div>
      ) : null}
      <XMarkIcon className="close" onClick={handlerIcon} />
    </CardNotificationStyles>
  );
}
