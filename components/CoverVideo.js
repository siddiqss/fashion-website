import { Kaushan_Script } from "next/font/google";
import Title from "./Title";

import localFont from "next/font/local";
import dynamic from "next/dynamic";

const VideoComp = dynamic(() => import("components/VideoComp"), {ssr:false});

export const europaGrotesk = localFont({
  src: '../public/fonts/EuropaGroteskSH-Reg.otf',
  display: 'swap',
});
export const bonFoyage = localFont({
  src: '../public/fonts/Bon Foyage.otf',
  display: 'swap',
});

export const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

function CoverVideo() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-1 bg-bodyRgba"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-5 flex items-center justify-center flex-col text-text">
        <Title />
        {/* <Subtitle /> */}
      </div>

      <VideoComp />
    </section>
  );
}

export default CoverVideo;
