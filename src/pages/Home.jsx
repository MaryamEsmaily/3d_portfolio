/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Island from "../components/models/Island";
import Sky from "../components/models/Sky";
import Bird from "../components/models/Bird";
import Plane from "../components/models/Plane";
import { useState } from "react";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;
    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, 0, -1];
    } else {
      planeScale = [2, 2, 2];
      planePosition = [0, 0, -1];
    }
    return [planeScale, planePosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* <Suspense fallback={<Loader />}> */}
        {/* All kind of light in three.js */}
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        /> */}
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <Bird />
        <Sky isRotating={isRotating} />
        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />
        <Plane
          isRotating={isRotating}
          position={planePosition}
          rotation={[0, 20.1, 0]}
          scale={planeScale}
        />
        {/* </Suspense> */}
      </Canvas>
    </section>
  );
};

export default Home;
