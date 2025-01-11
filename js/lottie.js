import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
  autoplay: true,
  loop: false,
  canvas: document.querySelector('#dotlottie-canvas'),
  src: 'https://lottie.host/1c05a13a-b353-4b89-b854-bcdc9e79743f/W2YigVAFjF.lottie', // Replace with your .lottie or .json file URL
});