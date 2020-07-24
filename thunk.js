//回调
// step1(function (value1) {
//   step2(value1, function(value2) {
//     step3(value2, function(value3) {
//       step4(value3, function(value4) {
//         // Do something with value4
//       });
//     });
//   });
// });

// thunk
function thunk (fn) {
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (cb) {
      args.push(cb);
      return fn.apply(this, args);
    }
  }
}

//Generator
//为了简单我就写一个step了
var step = thunk(function(value, cb) {
  var newValue = value + 1;
  console.log('newValue', newValue)
  cb(newValue)
});

function* gen() {
  var value1 = yield step(111);
  console.log(value1)
  var value2 = yield step(value1);
  var value3 = yield step(value2);
  var value4 = yield step(value3);
}

function run(fn){
  var gen = fn();
  function next(value){
    var result = gen.next(value);
    console.log('result', result)
    if (result.done){
      return;
    }
    result.value(next)
  }
  next()
}

run(gen);
