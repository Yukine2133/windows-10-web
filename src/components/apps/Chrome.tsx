import AppWindow from "./AppWindow";

const Chrome = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  return (
    <AppWindow
      title="Google Chrome"
      type="Chrome"
      constraintRef={constraintRef}
      className="  top-[1rem] left-[calc(42%-30rem)]  w-[75rem] h-[80%] "
    >
      <iframe
        src="https://www.google.com/webhp?igu=1"
        width={"100%"}
        height={"100%"}
      />
    </AppWindow>
  );
};

export default Chrome;
