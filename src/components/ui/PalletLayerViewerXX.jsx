import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const TopDownView = ({ layout, pallet }) => {
  const scale = 300 / pallet.length;

  return (
    <svg width="320" height="320" style={{ border: "1px solid #ccc" }}>
      <rect
        x={10}
        y={10}
        width={pallet.length * scale}
        height={pallet.width * scale}
        fill="#f0f0f0"
        stroke="#999"
      />
      {layout.map((box, i) => (
        <rect
          key={i}
          x={10 + box.x * scale}
          y={10 + box.y * scale}
          width={box.w * scale}
          height={box.d * scale}
          fill="skyblue"
          stroke="white"
          strokeWidth={2}
        />
      ))}
    </svg>
  );
};

const ThreeDView = ({ layout }) => {
  return (
    <Canvas style={{ height: 320, width: 320 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 20]} />
      {layout.map((box, i) => (
        <mesh
          key={i}
          position={[box.x + box.w / 2, box.h / 2, box.y + box.d / 2]}
        >
          <boxGeometry args={[box.w, box.h, box.d]} />
          <meshStandardMaterial color="#00aaff" />
        </mesh>
      ))}
      <OrbitControls />
    </Canvas>
  );
};

const PalletLayerViewer = ({ layout, pallet }) => {
  const [mode, setMode] = useState("2D");

  return (
    <div>
      <button onClick={() => setMode(mode === "2D" ? "3D" : "2D")}>
        Switch to {mode === "2D" ? "3D" : "2D"} view
      </button>
      <div style={{ marginTop: 10 }}>
        {mode === "2D" ? (
          <TopDownView layout={layout} pallet={pallet} />
        ) : (
          <ThreeDView layout={layout} />
        )}
      </div>
    </div>
  );
};

export default PalletLayerViewer;
