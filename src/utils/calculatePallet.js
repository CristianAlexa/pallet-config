function calculatePalletFit(
  caseLength,
  caseWidth,
  caseHeight,
  caseWeight,
  palletType,
  loadingHeight
) {
  const palletWidth = palletType === "euro" ? 800 : 1000; // mm
  const palletLength = palletType === "euro" ? 1200 : 1200; // mm

  // Pure orientations
  const fitA_len = Math.floor(palletLength / caseLength); // L×W orientation
  const fitA_wid = Math.floor(palletWidth / caseWidth);
  const perA = fitA_len * fitA_wid;

  const fitB_len = Math.floor(palletLength / caseWidth); // W×L orientation (rotated)
  const fitB_wid = Math.floor(palletWidth / caseLength);
  const perB = fitB_len * fitB_wid;

  // Mixed-rows attempt 1: split along the pallet width into rows.
  // A-row uses (caseLength along length, caseWidth along width). B-row uses (caseWidth along length, caseLength along width).
  // Try all possible counts of A-rows that fit, fill remaining width with as many B-rows as possible.
  let bestMixedRows = { total: 0, rowsA: 0, rowsB: 0 };
  const maxPossibleARows = Math.floor(palletWidth / caseWidth);
  for (let rowsA = 0; rowsA <= maxPossibleARows; rowsA++) {
    const usedWidth = rowsA * caseWidth;
    const remWidth = palletWidth - usedWidth;
    const rowsB = Math.floor(remWidth / caseLength);
    const perRowA = Math.floor(palletLength / caseLength);
    const perRowB = Math.floor(palletLength / caseWidth);
    const total = rowsA * perRowA + rowsB * perRowB;
    if (total > bestMixedRows.total) {
      bestMixedRows = { total, rowsA, rowsB, perRowA, perRowB };
    }
  }

  // Mixed-rows attempt 2: split along the pallet length into columns (mirror of above)
  let bestMixedCols = { total: 0, colsA: 0, colsB: 0 };
  const maxPossibleACols = Math.floor(palletLength / caseLength);
  for (let colsA = 0; colsA <= maxPossibleACols; colsA++) {
    const usedLen = colsA * caseLength;
    const remLen = palletLength - usedLen;
    const colsB = Math.floor(remLen / caseWidth);
    const perColA = Math.floor(palletWidth / caseWidth);
    const perColB = Math.floor(palletWidth / caseLength);
    const total = colsA * perColA + colsB * perColB;
    if (total > bestMixedCols.total) {
      bestMixedCols = { total, colsA, colsB, perColA, perColB };
    }
  }

  // Decide best per-layer
  const candidates = [
    { type: "pure", orient: "LxW", per: perA, info: { fitA_len, fitA_wid } },
    { type: "pure", orient: "WxL", per: perB, info: { fitB_len, fitB_wid } },
    {
      type: "mixed-width-split",
      orient: "mixed",
      per: bestMixedRows.total,
      info: bestMixedRows,
    },
    {
      type: "mixed-length-split",
      orient: "mixed",
      per: bestMixedCols.total,
      info: bestMixedCols,
    },
  ];
  //   candidates.sort((a, b) => b.per - a.per);
  const best = candidates.sort((a, b) => b.per - a.per)[0];

  // Layers by height
  const layers = Math.floor(loadingHeight / caseHeight);
  const totalCases = best.per * layers;

  return {
    caseLength,
    caseWidth,
    caseHeight,
    caseWeight,
    palletLength: palletType === "ukPallet" ? 1200 : 1200,
    palletWigth: palletType === "ukPallet" ? 1000 : 800,
    loadingHeight,
    type: best.type,
    orient: best.orient,
    colsA: best.info.colsA,
    perColA: best.info.perColA,
    colsB: best.info.colsB,
    perColB: best.info.perColB,
    perLayer: best.per,
    layers,
    totalCases,
  };
}
export default calculatePalletFit;
