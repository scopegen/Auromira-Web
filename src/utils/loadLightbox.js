import React from "react";

const LoadLightbox = (children) => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src ='js/lightbox-plus-jquery.min.js';
    script.async = false;
    document.head.appendChild(script)
  });

  return {children};
};

export default LoadLightbox;
