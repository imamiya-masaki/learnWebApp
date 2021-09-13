type lineId = number;
type lineValue = string;
interface line {
  lineId: lineId;
  pre?: lineId; // 実際のLineで考えて前の行に該当するlineId
  next?: lineId; // 実際のLineで考えて後の行に該当するlineId
  value: lineValue;
  start?: lineId; // 開いているHTMLの場合はstartに開始されるlineのlineId
  end?: lineId;  // 開いているHTMLの場合はendに閉じられるlineのlineId
}
interface actualLine {
  lineId: lineId;
  index: number;
  value: lineValue;
  displayStart: number | undefined; // こっちはindexを参照する 実際のLineのindex
  displayEnd: number | undefined; // こっちはindexを参照する 実際のLineのindex
}

export type { line, actualLine, lineId, lineValue }