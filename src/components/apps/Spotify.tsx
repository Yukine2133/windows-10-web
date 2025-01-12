import AppWindow from "./AppWindow";

const Spotify = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  return (
    <AppWindow
      title="Spotify"
      type="Spotify"
      constraintRef={constraintRef}
      className="top-[1rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
    >
      <iframe
        className="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/2rLxgtj7olHTF20JQLsMEV?utm_source=generator"
        width="100%"
        height="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </AppWindow>
  );
};

export default Spotify;
