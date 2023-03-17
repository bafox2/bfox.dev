import Image, { StaticImageData } from "next/image";

const SVGContainer = ({
  width,
  height,
  src,
  alt,
}: {
  width: number;
  height: number;
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <div className="svg-container" style={{ width, height }}>
      <Image src={src} alt={alt} width={width} height={height} fill={true} />
    </div>
  );
};

export default SVGContainer;

//is this even able to be responsive
//possibly through the media query to percentage
