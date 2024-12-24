import { Canvas } from "@react-three/fiber";
import Island from "../components/models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* <Suspense fallback={<Loader />}> */}
        {/* All kind of light in three.js */}
        <directionalLight />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
        <Island
          position={screenPosition}
          scale={screenScale}
          rotation={rotation}
        />
        {/* </Suspense> */}
      </Canvas>
    </section>
  );
};

export default Home;
