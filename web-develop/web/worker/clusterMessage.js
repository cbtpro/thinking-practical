const cluster = require('cluster');

let arrayLength = 2.5 * Math.pow(10, 7)

if (cluster.isMaster) {
  let worker1 = cluster.fork(); 
  worker1.send('Hello, Worker!')
  worker1.on('message', function(message) { 
    if (message._queryId) return;
    console.log(message)
    console.log('work1: ' + work1(arrayLength));
  });
} else {
  process.send('Hello, main process!');
  process.on('message', function(message) {
    console.log(message)
    console.log('work1: ' + work1(arrayLength));
  });
}

if (cluster.isMaster) {
  let worker2 = cluster.fork(); 
  worker2.send('Hello, Worker!')
  worker2.on('message', function(message) { 
    if (message._queryId) return;
    console.log(message)
    console.log('work2: ' + work2(arrayLength));
  });
} else {
  process.send('Hello, main process!');
  process.on('message', function(message) {
    console.log(message)
    console.log('work2: ' + work2(arrayLength));
  });
}

function work1(arrLength) {
  let begin = Date.now()
  let arr = new Array(arrLength).fill(0)
  for (let i = 0; i < arr.length; i++) {}
  let end = Date.now()
  let time = (end - begin) / 1000 + 'secs'
  return time
}

function work2(arrLength) {
  let begin = Date.now()
  let arr = new Array(arrLength).fill(0)
  for (let i = 0; i < arrLength; i++) {}
  let end = Date.now()
  let time = (end - begin) / 1000 + 'secs'
  return time
}