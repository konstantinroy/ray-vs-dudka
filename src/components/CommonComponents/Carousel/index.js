import NukaCarousel from "nuka-carousel/lib/carousel";

const Carousel = ({ children, ...props }) => {
  return (
    <NukaCarousel
      defaultControlsConfig={{
        nextButtonText: <div>След</div>,
        prevButtonText: <div>Прев</div>,
      }}
      {...props}
    >
      {children}
    </NukaCarousel>
  );
};

export default Carousel;
