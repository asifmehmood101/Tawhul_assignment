type SkeletonProps = {
  className?: string;
  width?: string;
  height?: string;
};

export const Skeleton = ({ className = "", width, height }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{
        width: width || "100%",
        height: height || "1rem",
      }}
    />
  );
};

