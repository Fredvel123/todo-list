import image from "../../assets/404.svg";
import { NotFoundPageStyles } from "./NotFoundStyles";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <NotFoundPageStyles>
      <img src={image} alt="" />
      <button onClick={() => navigate("/")}>go to home</button>
    </NotFoundPageStyles>
  );
}
