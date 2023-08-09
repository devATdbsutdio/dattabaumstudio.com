import * as React from "react";

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes} GMT`;
};

export default function useClock() {
  const [time, setTime] = React.useState(() => getCurrentTime());

  React.useEffect(() => {
    function tick() {
      setTime(getCurrentTime());
    }
    let id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return time;
}
