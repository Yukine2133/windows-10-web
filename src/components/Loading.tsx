const Loading = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        width="80px"
        height="80px"
        preserveAspectRatio="xMidYMid"
        className="lds-spinner"
        style={{ background: "none" }}
      >
        {[...Array(8)].map((_, index) => {
          const angle = index * 45;
          const delay = index / 8 + "s";

          return (
            <g transform={`rotate(${angle} 60 60)`} key={index}>
              <circle cx="60" cy="25" r="7" fill="#585858">
                {" "}
                <animate
                  attributeName="r"
                  from="7"
                  to="7"
                  begin={delay}
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="5;0"
                />
                <animate
                  attributeName="fill-opacity"
                  from="1"
                  to="1"
                  begin={delay}
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0"
                />
              </circle>
            </g>
          );
        })}
      </svg>
      <p className="text-white text-lg">{message}</p>
    </div>
  );
};

export default Loading;
