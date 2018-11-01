const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  res.end('https://winnipegtransit.com/en/stops/find?location=University+of+Manitoba+%2866+Chancellors+Circle%29&location_id=monuments%2F940&commit=Submit\n')
}).listen(PORT)
