import Marquee from "react-fast-marquee";
import useClock from "@/lib/useClock";

export default function HeroMarquee() {
  const time = useClock();

  const content = `WATCH ${time} ONLY 200 PIECES PRODUCED`;

  return (
    <Marquee
      speed={256}
      className="h-fit overflow-y-hidden text-[160px] font-extralight leading-none text-white mix-blend-difference sm:text-[180px] md:text-[200px] lg:text-[220px] xl:text-[250px]"
    >
      <p className="ml-[100vw]">{content}</p>
    </Marquee>
  );
}
