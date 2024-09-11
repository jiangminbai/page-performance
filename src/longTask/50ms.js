function task () {

  const start = performance.now()
  while (true) {
    if (performance.now() - start > 40) {
      break
    }
  }
}
const btn = document.getElementById('start')
btn.addEventListener('click', task, false)
