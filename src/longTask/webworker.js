const worker = new Worker('./worker.js')

const start = document.getElementById('start')
start.onclick = function () {
  // worker.postMessage(20)
  // longTask()
  requestIdleCallback((deadline) => {
    while (deadline.timeRemaining() > 0) {
      longTask()
    }
  })
}

worker.addEventListener('message', e => {
  console.log(e.data)
})

function longTask () {
  const start = performance.now()
  while (true) {
    if (performance.now() - start > 40) {
      break
    }
  }
}