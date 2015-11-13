import readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



export default async(q?)=>{
  return new Promise((res, rej)=>{
    rl.question(q ? q : "", function(answer) {
      res(answer);
      //rl.close();
    });
  })
};
