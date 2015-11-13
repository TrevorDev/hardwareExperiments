import Cylon = require("cylon")

Cylon.config({
  //silent: true
});


export default {
  openConnection: function(){
    return new Promise((res, rej)=>{

      // Initialize the robot
      Cylon.robot({
        // Change the port to the correct port for your Arduino.
        connections: {
          //list ports http://stackoverflow.com/questions/14550880/serialport-has-no-method-list
          arduino: { adaptor: 'firmata', port: 'COM3' }
        },

        devices: {
          led: { driver: 'led', pin: 8 }
        },

        work: function(my) {

            res(my)

        }
      }).start();
    })
  }
}
