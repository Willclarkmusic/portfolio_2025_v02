export const MobileParams = () => {
  const isTablet = window.innerWidth < 1300 && window.innerWidth > 800;
  const isMobile = window.innerWidth < 800;
  return {
    isTablet: isTablet,
    isMobile: isMobile,
  };
};
