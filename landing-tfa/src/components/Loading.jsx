import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnim from "../assets/loadingAnim.json";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <Player src={loadingAnim} autoplay loop></Player>
    </div>
  );
}

export default Loading;
