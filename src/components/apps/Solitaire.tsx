import AppWindow from "./AppWindow";

const Solitaire = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  return (
    <AppWindow
      title="Solitaire"
      type="Solitaire"
      constraintRef={constraintRef}
      className="top-[1rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
    >
      <iframe
        src="https://www.google.com/logos/fnbx/solitaire/standalone.html"
        width={"100%"}
        height={"100%"}
      />
    </AppWindow>
  );
};

export default Solitaire;
