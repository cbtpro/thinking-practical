onmessage = function(e) {
  var begin = Date.now()
  let arrLength = e.data
  let arr = new Array(arrLength).fill(0)
  for (let i = 0; i < arrLength; i++) {}
  var end = Date.now()
  var time = (end - begin) / 1000 + 'secs'
  postMessage(time)
}
