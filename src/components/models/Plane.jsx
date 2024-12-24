/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import planeScene from "../../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);

  const ref = useRef();

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else actions["Take 001"].stop();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
