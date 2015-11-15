require("babel-polyfill")


import pinMan from "./libs/pinMan";
import readline from "./libs/readline";

let main = async ()=>{
  var con:any = await pinMan.openConnection()
  var val = 1;
  while(1){
    var out = await readline();
    console.log(out)
    con(3).pwmWrite(val, function(err){
      console.log("wrote")
      if(err){
        console.log("err")
      }
      val -= 0.1;
    });
  }
}
main();
