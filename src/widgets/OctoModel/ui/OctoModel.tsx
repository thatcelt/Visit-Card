import { Canvas } from "@react-three/fiber";
import { FC, memo, useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const OctoModel: FC = () => {
    const groupRef = useRef<THREE.Object3D>(null)
    const gltf = useGLTF('/src/assets/octo.glb')

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.lookAt(0, 0, 0)
            const box = new THREE.Box3().setFromObject(groupRef.current);
            const center = box.getCenter(new THREE.Vector3());
            groupRef.current.position.sub(center);
        }
      }, [gltf]);

    return (
        <Canvas camera={{ position: [0, 0, 5] }} style={{width: '700px', height: '700px', aspectRatio: 1/1}}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
    
          <group ref={groupRef} dispose={null}>
            {gltf.scene.children.map((child) => {
                if (child.type === "Mesh") {
                const mesh = child as THREE.Mesh;
                return (
                    <mesh
                    key={mesh.uuid}
                    geometry={mesh.geometry}
                    material={mesh.material || new THREE.MeshStandardMaterial({ color: "gray" })}
                    position={mesh.position.toArray()}
                    rotation={mesh.rotation.toArray()}
                    scale={mesh.scale.toArray()}
                    />
                );
                }
                return null;
            })}
           </group>
    
          <OrbitControls target={[0, 0, 0]} enablePan={false} enableZoom={true}/>
        </Canvas>
      );
}

export default memo(OctoModel);