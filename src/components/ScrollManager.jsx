export const MobileParams = () => {
  const isTablet = window.innerWidth < 1300 && window.innerWidth > 800;
  const isMobile = window.innerWidth < 800;
  // const responsiveRatio = viewport.width / 8;
  // const aspectRatio = viewport.width / viewport.height;

  console.log(window.innerWidth);

  return {
    isTablet: isTablet,
    isMobile: isMobile,
  };
};
