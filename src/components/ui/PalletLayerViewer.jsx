import { useEffect, useRef } from "react";
import generateLayerLayout from "../../utils/generateLayerLayout";

export default function PalletLayerViewer({ canvasData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasData.palletLength, canvasData.palletWigth);

    const boxes = generateLayerLayout(canvasData);

    // scale to fit canvas
    const scaleX = 1 / 4;
    const scaleY = 1 / 4;

    boxes.forEach((b, i) => {
      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(b.x * scaleX, b.y * scaleY, b.w * scaleX, b.h * scaleY);
      ctx.strokeRect(b.x * scaleX, b.y * scaleY, b.w * scaleX, b.h * scaleY);
    });
  }, [canvasData]);

  return <canvas ref={canvasRef} width={300} height={250} />;
}
