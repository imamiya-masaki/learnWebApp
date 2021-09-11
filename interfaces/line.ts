type lineId = number;
type lineValue = string;
interface line {
  lineId: lineId;
  pre?: lineId;
  next?: lineId;
  value: lineValue;
  nestTargetStart?: lineId;
  nestTargetEnd?: lineId;
}
interface displayLine {
  lineId: lineId;
  index: number;
  value: lineValue;
  nestTargetStart: number | undefined; // こっちはindexを参照する
  nestTargetEnd: number | undefined; // こっちはindexを参照する
}

export type { line, displayLine, lineId, lineValue }