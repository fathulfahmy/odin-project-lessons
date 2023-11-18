import React, { useEffect, useState } from "react";

function Clock() {
  const [crazyCounter, setCrazyCounter] = useState(0);
  const [stillCrazyCounter, setStillCrazyCounter] = useState(0);
  const [smartCounter, setSmartCounter] = useState(0);
  const [accurateCounter, setAccurateCounter] = useState(0);

  setInterval(() => {
    setCrazyCounter((count) => count + 1);
  }, 1000);

  // render data outside of the component
  useEffect(() => {
    setInterval(() => {
      setStillCrazyCounter((count) => count + 1);
    }, 1000);
  });

  // accepts an array of dependencies as second argument
  // render data only when component is mounted
  useEffect(() => {
    setInterval(() => {
      setSmartCounter((count) => count + 1);
    }, 1000);
  }, []);

  // return a cleanup function as first argument
  // cleanup on every unmount
  useEffect(() => {
    const key = setInterval(() => {
      setAccurateCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <>
      <p>{crazyCounter} seconds have passed.</p>
      <p>{stillCrazyCounter} seconds have passed.</p>
      <p>{smartCounter} seconds have passed.</p>
      <p>{accurateCounter} seconds have passed.</p>
    </>
  );
}

export default Clock;
