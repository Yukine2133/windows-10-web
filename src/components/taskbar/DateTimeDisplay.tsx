const DateTimeDisplay = () => {
  const date = new Date();

  return (
    <div className="text-center hover:bg-[#272727] px-3 transition-colors duration-100 text-sm ">
      <p>
        {(date.getHours() % 12 || 12) +
          ":" +
          date.getMinutes().toString().padStart(2, "0") +
          (date.getHours() >= 12 ? " PM" : " AM")}
      </p>
      <p>
        {(date.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          date.getDate().toString().padStart(2, "0") +
          "/" +
          date.getFullYear().toString()}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
