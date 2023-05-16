export const ProductCarouselSkeleton: React.FC<{ title?: string }> = ({
  title,
}) => {
  return (
    <>
      <div>{title}</div>
      <div></div>
    </>
  );
};
