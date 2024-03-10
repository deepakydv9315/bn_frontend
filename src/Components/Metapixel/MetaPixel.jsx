import React from 'react';
import Pixel from 'react-facebook-pixel';

const PixelComponent = ({ pixelId }) => {
  React.useEffect(() => {
    Pixel.init(298652909890278); 
    Pixel.track('PageView');
  }, []);

  return null;
};

export default PixelComponent;