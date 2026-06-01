import { useRef } from "react";

const ImageGallery = () => {
  const deerRef = useRef<HTMLImageElement>(null);
  const wolfRef = useRef<HTMLImageElement>(null);
  const tigerRef = useRef<HTMLImageElement>(null);
  function hanldeScrollToWolf() {
    wolfRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function hanldeScrollToDeer() {
    deerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function hanldeScrollToTiger() {
    tigerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "1rem",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          background: "rgba(255,255,255,0.8)",
          padding: "5px",
          borderRadius: "8px",
        }}
      >
        <button onClick={hanldeScrollToDeer}>Deer</button>
        <button onClick={hanldeScrollToWolf}>Wolf</button>
        <button onClick={hanldeScrollToTiger}>Tiger</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          height: "90vh",
          overflowX: "auto",
        }}
      >
        <img
          src="/deer.jpg"
          alt="deer"
          style={{ minWidth: "700px", objectFit: "cover" }}
          ref={deerRef}
        />
        <img
          src="/wolf.jpg"
          alt="wolf"
          style={{ minWidth: "700px", objectFit: "cover" }}
          ref={wolfRef}
        />
        <img
          src="/tiger.jpg"
          alt="tiger"
          style={{ minWidth: "700px", objectFit: "cover" }}
          ref={tigerRef}
        />
      </div>
    </>
  );
};

export default ImageGallery;
