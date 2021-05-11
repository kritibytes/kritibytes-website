export interface ImageProps {
  height?: number,
  width?: number,
  src: string
}

const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const { width, height } = props
  const ratio = (height / width) * 100
  return (
    <div
      style={{
        paddingBottom: `${ratio}%`,
        position: "relative",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        {...props}
        src={src}
        loading="lazy"
      />
    </div>
  );
}


export default Image