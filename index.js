const server = require('./app/server.js'); 

const PORT = process.env.PORT || 4000; 

server.listen(PORT, () => {
  console.log(`\n ** Running on localhost:${PORT} ** \n`);
});