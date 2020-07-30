function relay() {
  console.log("This is a relay function");
}

function longjump() {
  console.log("This is longjump function");
}

module.exports.relay = relay;
module.exports.longjump = longjump;
/* module.exports = (
    relay: function() {
        console.log("This is a relay function");
    },
    longjump: function(){
        console.log("This is longjump function");
    }
) */
