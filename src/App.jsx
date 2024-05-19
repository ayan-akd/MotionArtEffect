import { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import WebGLFluid from "webgl-fluid";
import MagicWand from "./components/MagicWand";
import CardSection from "./components/CardSection";
const App = () => {
  // const canvasRef = useRef(null);
  // const [fluidAnimation, setFluidAnimation] = useState(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;

  //   if (canvas) {
  //     console.log(WebGLFluid);
  //     const fluidInstance = WebGLFluid(canvas, {
  //       TRIGGER: "hover",
  //       IMMEDIATE: true,
  //       AUTO: false,
  //       INTERVAL: 3000,
  //       SIM_RESOLUTION: 256,
  //       DYE_RESOLUTION: 256,
  //       CAPTURE_RESOLUTION: 256,
  //       DENSITY_DISSIPATION: 2,
  //       VELOCITY_DISSIPATION: 0.8,
  //       PRESSURE: 0.5,
  //       PRESSURE_ITERATIONS: 40,
  //       CURL: 80,
  //       SPLAT_RADIUS: 0.55,
  //       SPLAT_FORCE: 8000,
  //       SPLAT_COUNT: 10,
  //       SHADING: true,
  //       COLORFUL: true,
  //       COLOR_UPDATE_SPEED: 5,
  //       PAUSED: false,
  //       BACK_COLOR: { r: 14, g: 15, b: 26 },
  //       TRANSPARENT: false,
  //       BLOOM: true,
  //       BLOOM_ITERATIONS: 6,
  //       BLOOM_RESOLUTION: 256,
  //       BLOOM_INTENSITY: 0.6,
  //       BLOOM_THRESHOLD: 0.5,
  //       BLOOM_SOFT_KNEE: 0.9,
  //       SUNRAYS: false,
  //       SUNRAYS_RESOLUTION: 196,
  //       SUNRAYS_WEIGHT: 1.0,
  //     });

  //     setFluidAnimation(fluidInstance);

  //     // Add event listeners for mouse movement
  //     canvas.addEventListener("mousemove", handleMouseMove);

  //     // Clean up event listeners on component unmount
  //     return () => {
  //       if (canvas.removeEventListener) {
  //         canvas.removeEventListener("mousemove", handleMouseMove);
  //       }
  //     };
  //   }
  // }, []);

  // const handleMouseMove = (event) => {
  //   const canvas = canvasRef.current;
  //   if (canvas && fluidAnimation) {
  //     const rect = canvas.getBoundingClientRect();
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;

  //     // Call the WebGLFluid library's update function
  //     // and pass the normalized mouse coordinates
  //     fluidAnimation.updateDelta(x / canvas.width, y / canvas.height);
  //   }
  // };
  return (
    <div className="absolute pointer-events-none">
      {/* <canvas
          ref={canvasRef}
          className="-z-10"
          style={{ width: "100vw", height: "100vh" }}
        ></canvas> */}
      <NavBar></NavBar>
      <Banner></Banner>
      <Review></Review>
      <MagicWand></MagicWand>
      <CardSection></CardSection>
      <Footer></Footer>
    </div>
  );
};

export default App;
