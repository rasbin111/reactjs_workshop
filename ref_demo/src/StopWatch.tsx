import { useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState<null | number>(null);
  const [now, setNow] = useState<null | number>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimeHandler() {
    setStartTime(Date.now());
    setNow(Date.now());
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function stopTimeHandler() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1> Time passed: {secondsPassed.toFixed(3)} </h1>
      <button onClick={startTimeHandler}> Start </button>
      <button onClick={stopTimeHandler}> Stop </button>
    </div>
  );
};

export default StopWatch;
