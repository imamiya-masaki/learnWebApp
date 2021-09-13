import displayLine from "functions/line/displayLine"
import { line, actualLine, lineId, lineValue } from "interfaces/line"

/*
<div>
  <any>title<any>
  <div> 
    <span>value</span>
    <any>
      <span>value2</span>
    </any>
  </div>
</div>
*/

// lineIdは作られた順番をUUIDとしてる
// テストケース1
/*
<div>
  <any>title<any>
  <div> 
    <span>value</span>
    <any>
      <span>value2</span>
    </any>
  </div>
</div>
*/
const lines1String = `
<div>
  <any>title<any>
  <div> 
    <span>value</span>
    <any>
      <span>value2</span>
    </any>
  </div>
</div>
`
const lines1: {[key: lineId]: line } = {
  0: {
    lineId: 0,
    value: "<div>",
    next: 4,
    start: 0,
    end: 8
  },
  4: {
    lineId: 4,
    value: "<any>title<any>",
    pre: 0,
    next: 1,
    start: 4,
    end: 4
  },
  1: {
    lineId: 1,
    value: "<div>",
    pre:4,
    next: 7,
    start: 1,
    end: 5
  },
  7: {
    lineId: 7,
    value: "<span>value</span>",
    pre: 1,
    next: 3,
    start: 7,
    end: 7
  },
  3: {
    lineId: 3,
    value: "<any>",
    pre: 7,
    next: 2,
    start: 3,
    end: 6
  },
  2: {
    lineId: 2,
    value: "<span>value2</span>",
    pre: 3,
    next: 6,
    start: 2,
    end: 2
  },
  6: {
    lineId: 6,
    value: "</any>",
    pre: 2,
    next: 5,
    start: 3,
    end: 6
  },
  5: {
    lineId: 5,
    value: "</div>",
    pre: 6,
    next: 8,
    start: 1,
    end: 5
  },
  8: {
    lineId: 8,
    value: "</div>",
    pre: 5,
    start: 0,
    end: 8
  }
}


describe('displayLine', () => {
 test('lines1でdisplayLineを実行したあとに、lines1Stringの状態にできるか', () => {
   
 })
})

export {}