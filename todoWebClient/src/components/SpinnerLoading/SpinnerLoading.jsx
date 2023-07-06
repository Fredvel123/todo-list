import spinner from "../../assets/spinner.png";
import { SpinnerLoadingStyles } from "./SpinnerLoadingStyles";

export default function SpinnerLoading() {
  return (
    <SpinnerLoadingStyles>
      <img src={spinner} alt="" />
    </SpinnerLoadingStyles>
  );
}
