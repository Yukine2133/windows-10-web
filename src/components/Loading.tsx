import "./../loading.css";

function Loading({ message }: { message: string }) {
  return (
    <div className="loadingCircle">
      <div
        style={
          {
            "--size": "64px",
            "--dot-size": "6px",
            "--dot-count": 6,
            "--color": "#fff",
            "--speed": "1s",
            "--spread": "60deg",
          } as React.CSSProperties
        }
        className="dots"
      >
        <div style={{ "--i": 0 } as React.CSSProperties} className="dot"></div>
        <div style={{ "--i": 1 } as React.CSSProperties} className="dot"></div>
        <div style={{ "--i": 2 } as React.CSSProperties} className="dot"></div>
        <div style={{ "--i": 3 } as React.CSSProperties} className="dot"></div>
        <div style={{ "--i": 4 } as React.CSSProperties} className="dot"></div>
        <div style={{ "--i": 5 } as React.CSSProperties} className="dot"></div>
      </div>
      <div
        style={{
          color: "white",
          marginTop: 10,
          fontSize: 22,
        }}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Loading;
