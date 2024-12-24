/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import skyScene from "../../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const ref = useRef();

  const { scene } = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
