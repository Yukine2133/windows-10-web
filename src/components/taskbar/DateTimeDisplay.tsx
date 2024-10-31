import { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString([], options).replace(/^0/, "");
  };

  const formatTime = (time: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
    };
    return time.toLocaleTimeString([], options).replace(/^0/, "");
  };

  return (
    <div className="text-center hover:bg-[#272727] px-3 transition-colors duration-100 text-sm ">
      <p>{formatTime(currentTime)}</p>
      <p>{formatDate(currentTime)}</p>
    </div>
  );
};

export default DateTimeDisplay;
