const generateLayerLayout = (config) => {
  const {
    caseLength,
    caseWidth,
    palletLength,
    palletWigth,
    colsA,
    perColA,
    colsB,
    perColB,
  } = config;

  const boxes = [];
  let x = 0;

  // Section A
  for (let col = 0; col < colsA; col++) {
    let y = 0;
    for (let row = 0; row < perColA; row++) {
      boxes.push({
        x: x,
        y: y,
        w: caseLength,
        h: caseWidth,
      });
      y += caseWidth;
    }
    x += caseLength;
  }

  // Section B
  for (let col = 0; col < colsB; col++) {
    let y = 0;
    for (let row = 0; row < perColB; row++) {
      boxes.push({
        x: x,
        y: y,
        w: caseWidth, // rotated
        h: caseLength,
      });
      y += caseLength;
    }
    x += caseWidth;
  }

  return boxes;
};

export default generateLayerLayout;
