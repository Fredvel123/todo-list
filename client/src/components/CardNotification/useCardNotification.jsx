import { useState } from "react";

export default function useCardNotification() {
  const [open, setOpen] = useState(false);
  const handlerIcon = () => {
    setOpen(!open);
  };
  return { open, handlerIcon };
}
