addEventListener('message', e => {
  const data = e.data
  const res = []
  for (let i=0; i<data; i++) {
    res.push(i)
  }
  postMessage(res)
})