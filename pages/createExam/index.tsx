import Link from 'next/link';
import { line } from 'interfaces/line';
type lineId = number;
type lineValue = string;
interface displayLine {

}
function Home() {
  const lines: {[key: lineId]: line}= {}
  lines[0] = {lineId: 0, value: "aaaaaass"}
  const displayLine = () => {
    const startLine = 0

  }
  const test = {value: "aaasdas"}
  return (
    <div className="bg-gray-200 h-20 w-6/12 mx-auto">
      <div className=" w-11/12 h-full bg-white mx-auto">
       {/* ここを編集エリアにしたい*/}
        {lines[0].value}
      </div>
    </div>
  );
}

export default Home;