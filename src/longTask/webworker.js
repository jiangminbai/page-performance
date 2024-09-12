const worker = new Worker('./worker.js')

const start = document.getElementById('start')
start.onclick = function () {
  // 1.
  // worker.postMessage(20)
  // 2.
  longTask()
  // 3.
  // requestIdleCallback((deadline) => {
  //   console.log(deadline.timeRemaining())
  //   while (deadline.timeRemaining() > 0) {
  //     console.log(deadline.timeRemaining())
  //     longTask()
  //   }
  // })
  // 4.
  // setTimeout(() => {
  //   console.log('setTimeout')
  // }, 0);
  // setTimeout(() => {
  //   console.log('setTimeout1')
  // }, 0);
  // Promise.resolve().then(_ => {console.log('resolve')})
  // requestAnimationFrame(() => {
  //   console.log('frame')
  // })
}

// worker.addEventListener('message', e => {
//   console.log(e.data)
// })

// function longTask () {
//   const start = performance.now()
//   while (true) {
//     if (performance.now() - start > 4000) {
//       break
//     }
//   }
// }

// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     console.log('LCP candidate:', entry.startTime, entry);
//   }
// }).observe({type: 'largest-contentful-paint', buffered: true});

function singleTask () {
  const start = performance.now()
  while (true) {
    if (performance.now() - start > 40) {
      break
    }
  }
}

function yieldToMain () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 0);
  })
}

// 1.
async function longTask () {
  const tasks = [
    singleTask,
    singleTask,
    singleTask,
    singleTask,
    singleTask,
  ]
  while (tasks.length > 0) {
    const task = tasks.shift()
    task()
    await yieldToMain()
  }
}
// 2.有可能task是连续执行才render
// async function longTask () {
//   setTimeout(() => {
//     singleTask()
//   }, 0);
//   setTimeout(() => {
//     singleTask()
//   }, 0);
//   setTimeout(() => {
//     singleTask()
//   }, 0);
//   setTimeout(() => {
//     singleTask()
//   }, 0);
//   setTimeout(() => {
//     singleTask()
//   }, 0);
// }