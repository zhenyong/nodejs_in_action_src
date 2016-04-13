var cluster = require('cluster')
  , http = require('http')
  , numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('death', function(worker) {
    console.log('Worker ' + worker.pid + ' died.');
  });
} else {
  console.error(process.env);
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end('I am worker ID ' + process.env.NODE_CLUSTER_ID);
  }).listen(8000);
}
