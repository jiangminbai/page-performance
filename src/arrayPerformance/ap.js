const start = document.getElementById('start')

start.onclick = handleBtn

// 1. concat 与 [...] 性能对比
// let x
// function handleBtn () {
//   let big = new Array(1e5).fill(99)
//   let typedBig = new Int32Array(1e5).fill(99)

//   console.time('concat-big')
//   for (let i = 0; i < 1e2; i++) x = [].concat(big);
//   console.timeEnd('concat-big')

//   console.time('spread-big')
//   for (i = 0; i < 1e2; i++) x = [...big];
//   console.timeEnd('spread-big')

//   console.time('concat-big')
//   for (let i = 0; i < 1e2; i++) x = [].concat(typedBig);
//   console.timeEnd('concat-big')

//   console.time('spread-big')
//   for (i = 0; i < 1e2; i++) x = [...typedBig];
//   console.timeEnd('spread-big')
// }

// 2. concat 与 [...] 内存占用对比
// let x
// function handleBtn () {
//   let big = new Array(1e5).fill(99)

//   x = [].concat(big);

//   // x = [...big];
// }

// // 3. concat 与 [...] push方法
// function handleBtn () {
//   let big = new Array(6e5).fill(1)
//   let spreadArray = []
//   let concatArray = []

//   // spreadArray.push(...big) // 堆栈报错
//   concatArray = concatArray.concat(big)
// }

// 4. typedArray
function handleBtn () {
  console.time('normal array')
  const normalArray = []
  for (let i=0; i<1e6; i++) {
    normalArray[i]=i
  }
  console.timeEnd('normal array')

  console.time('typed array')
  const typedArray = new Int32Array(1e6)
  for (let i=0; i<1e6; i++) {
    typedArray[i]=i
  }
  console.timeEnd('typed array')
}