import { PalletProvider, usePallet } from "../../context/PalletContext";
import PalletLayerViewer from "./PalletLayerViewer";
import calculatePalletFit from "./../../utils/calculatePallet";
import generateLayerLayout from "./../../utils/generateLayerLayout";

const PalletView = () => {
  const { palletData, caseData, isVisible } = usePallet();
  const { palletType, loadingHeight } = palletData;
  const { caseLength, caseWidth, caseHeight, caseWeight } = caseData;

  const canvasData = calculatePalletFit(
    caseLength,
    caseWidth,
    caseHeight,
    caseWeight,
    palletType,
    loadingHeight
  );

  //   const fullLayout = [];
  //     for (let z = 0; z < layers; z++) {
  //       layerLayout.forEach((box) => {
  //         fullLayout.push({
  //           ...box,
  //           y: box.y,
  //           z: z * caseHeight, // vertical stacking
  //         });
  //       });
  //     }

  return (
    <div>
      {isVisible ? (
        <div>
          <h3>Pallet Config</h3>
          <p>Cases per layer: {canvasData.perLayer}</p>
          <p>Layers: {canvasData.layers}</p>
          <p>Total cases: {canvasData.totalCases}</p>

          <h4>Single Layer</h4>
          <PalletLayerViewer canvasData={canvasData} />

          <h4>Full Pallet</h4>
          {/* <PalletLayerViewer layout={fullLayout} pallet={palletData} /> */}
        </div>
      ) : (
        "No data yet"
      )}
    </div>
  );
};

export default PalletView;
