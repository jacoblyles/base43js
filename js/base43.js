(function() {
  const base43Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$*+-./:";

  // long division with an arbitrary base.
  function divMod(byteArr, base, divisor, startAt) {

    var result = byteArr.slice();
    var remainder = 0;
    var temp;
    startAt = startAt || 0;
    for (var i = startAt; i < byteArr.length; i++) {
      temp = remainder * base + byteArr[i];
      result[i] = Math.floor(temp / divisor);
      remainder = temp % divisor;
    }
    return {
      div: result,
      mod: remainder
    }
  }

  function byteArrGreaterThan(byteArr, limit) {

    var length = byteArr.length;

    var last = byteArr[length - 1];
    if (last >= limit) {
      return true;
    } else {
      for (var i = 0; i < length - 1; i++) {
        if (byteArr[i] > 0){
          return true;
        }
      }
    }

    return false;
  }


  var Base43 = {
    
    encode: function(input) {
      var number_encode = 0;
      var result = [];
      input = input.split('').map(function(l){ return l.charCodeAt(0); });

      var r;
      while (byteArrGreaterThan(input, 43)) {
        r = divMod(input, 256, 43, 0);
        result.unshift(base43Chars[r.mod]);
        input = r.div;
      }
      result.unshift(base43Chars[r.div.pop()]);

      return result.join('');

      var pad = '';
      for (var l of input) {
        if (l === "\0") {
          pad += base43Chars[0];  
        } else {
          break;
        }
      }
      
      return  pad + result;
    }

    // input is a base-43 string, output is a hex string
    ,decode: function(input) {
      
      var result = [];
      var input43 = [];
      for (var i in input) {
        var l = input[i];
        var index = base43Chars.indexOf(l);
        if (index < 0) {
          throw new Error("Illegal character. Allowed characters are:" + base43Chars);
        }
        input43[i] = index;
      }

      var zeroCount = 0;
      var pad = '';
      while (zeroCount < input.length && input43[zeroCount] == 0) {
        zeroCount += 1;
        pad += "0";
      }

      var r;
      var startAt = zeroCount;

      while (byteArrGreaterThan(input43, 256)) {
        r = divMod(input43, 43, 256, startAt);
        input43 = r.div;
        result.unshift(String.fromCharCode(r.mod));
      }
      result.unshift(String.fromCharCode(r.div.pop()));

      // convert byte string to hex representation

      var resultHex = result.map(function(l) {
        var temp = l.charCodeAt(0).toString(16);
        temp = temp.length < 2 ? "0" + temp : temp;
        return temp;
      });

      return  pad + resultHex.join("");
    }
  }
  
  if(typeof module !== "undefined" && module.exports) {
    module.exports = Base43;
  } else {
    window.Base43 = Base43;
  }

})();
