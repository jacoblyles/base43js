
const base43Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$*+-./:";

const base43TestChars = "Iama";
const base43TestCode = "8G4J5R";

const base43LongTest = "0100000001ac01d39c405d31d3d20b00254e84dce9838b9c280f3aa07bf77a1510d8f8779900000000fd4201004830450221009a4065d3b869f20b6e858e0722d9b511213e09dcf1b61072cccbff340c7f424e022034c42927a64fe323d8e8b76d99960322bf0664fdad9994939aedac74a32ca8c701483045022100dda3d5974ae1c06d9742c7aa5e2f789218054c60476f049300c7d4d0395819aa02201f484d7a2b4cc6186b23f54ea4099a728760d71fcc0c7a82bd056c6eaeacf3ab014cad5221020de4d18c5b852a3c1d1f1033a812b019c396b75cab2a248089b09632c7bbdda221024ee8ab3639ea02d7fac7e90078b16c06811573d7046cd06b5d1d8d7e50e0767a21025392159aaf967c2f7e1dca92b68d1b3abaf44a9d3903f7382e76f9f64e7bfa242102df269b98c7ea5bdec1aac268d6107b827163d3a0ca8bd3522279d14c46e1bf1a2103cfbf85d74dddf892b3b6f918fd36dab13cc904d9ba3c9306e9e25fe53ebde08155aeffffffff01131f0000000000001976a914e9cc1b59c97f860f5c629c23d93920da60648d0388ac00000000";
const base43LongAnswer = "7TG5RUO-Y-9:G5IU$61+B0MOM7Q698PSE/V6JYQTVD2GF5GB$B*-A*11AJ8J8M46QNXW/16ZBRFLK9N1KIIVROQI39KVI4Y*7:XJK+L/+U67O*B0:7WGIA0C424KG*9A2LZN+IGS2.OWM4J.VW-*TR$TR7/QBG$W*U4ABSMT-S$XX/.TESGFAZID775.J/WTGZZ4-4GZ3HTN26MEPA9EO$X*/0W3PHT5G*8B7$05J5NZMH-CGGX4O.I*-T+$2$*3081Y.+M+K+NM*64$Q.29VKQ9Q*GCXTTDH-UW1TF4H.1NPGZX:JLGU9S752WFLD1YR7Y3TNTR695G8WO1/3VX6-AN8/EMJ0-J25L/S3X8-1IV7FZA:554W1Q5HSH/ZR0EQPHN1NNHBQ:NDEF5R5247NU7M9P-4D-W3FLIAZ9OQLOS0SDN3B:E9VR$U25E/8VW:4HDJAL***W/HI16/4Z0G-SOKEC++90*HV24ZO/MDXPU-44YCSLF71:01SERXU$AKDH*1NS1/M8GNSS$5R+E+6+0.15AUPU8MXHAS16Q7WH9896SW2+HGA5I0C$:/RA1ZRK:XL-ECGHBO$X9OYK7.PD2FTP+Q711C5H*OBDMQWD.YFCHWD6I32IPH2J6OPB33288I/*.MZG$DEXF2V5A3I9ZC.W6:*NOLNC3PNK+B$1W*4ZAS79$R*JFGM5X$+IHOP68U7E+6KPVPV6OGC0/UHQW3NXR7*2QJO1T83DM7C9N77D:4/QMDYL:9H.L3QAI04INCVVVK4YHNB9QO8X1:7ANE5$2V6OI575WO5/Y-OLHJ3/.+XU1U-K3RQH:4M1X5WJF40CR3VI*QXD5L*8JDA-UIV/-4.I*7ENPT$$*3-7A./.+8WEKWI7Z/S5*.LCUUJCT1.7JS/Z1YQN3FSZMG0BW-MUWCU2FGT2O2KZ3/QOA952-1MU0.F-F../TCHTV4AU*/GI8N-5TFC73U27-/T0P432--4QP4IAVP8./V7HKJHJKCY/KXPV-$8/W7+8SH++VW8M8S3NYNK-29812R60$QQ/:$V+L1Q/3X7MBV4BQCHX1FR0WOFAKF+DW37VKTJO6P7SJ+GBLQ5QSNBLKL$8*5S.D1G//BMPVE0V1-6QCFA/AK1H.X7O85H7U56QGV.I*M9-I.1G:KP/N0A6ARQQSVT/46GGSXXG.M*T5UD3RCG:EZNV+*3";

// long division

function divMod(byteArr, divisor, startAt) {
  if (divisor > 255) {
    throw "divisor must be less than 256";
  }

  var result = byteArr.slice();
  var remainder = 0;
  var temp;
  startAt = startAt || 0;
  for (var i = startAt; i < byteArr.length; i++) {
    temp = remainder * 256 + byteArr[i];
    result[i] = Math.floor(temp / divisor);
    remainder = temp % divisor;
  }
  return {
    div: result,
    mod: remainder
  }
}

function byteArrGreaterThan(byteArr, limit) {
  if (limit > 255) {
    throw "limit must be less than 256";
  }

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

function encode43(input) {
  var number_encode = 0;
  var result = [];
  input = input.split('').map(function(l){ return l.charCodeAt(0); });

  var div, mod, obj;
  while (byteArrGreaterThan(input, 43)) {
    ({div, mod } = divMod(input, 43, 0));
    result.unshift(base43Chars[mod]);
    input = div;
  }
  result.unshift(base43Chars[div.pop()]);

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


// function decode(input) {
//   var output_arr = [];
//   for (var l of input) {
//     var code = ALPHABET_43.indexOf(l) % 256;
//     output_arr.push(String.fromCharCode(code));
//   }
//   console.log(output_arr);
//   return output_arr.join("");
// }

// console.log(encode_number("hello"));
// console.log(decode_number(encode_number("hello")));

const base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function encode64(input){
  var result = "";
  var pad = "";
  var c = input.length % 3;

  // pad out the right to make the string a multiple of 3 characters
  if (c > 0){
    for (; c < 3; c++){
      pad += '=';
      input += '\0';
    }
  }

  for (var i = 0; i < input.length; i += 3 ){
    var n = (input.charCodeAt(i) << 16) + (input.charCodeAt(i+1) << 8) + input.charCodeAt(i+2);
    n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>>6) & 63, n & 63]
    result += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]]; 
  }

  return result.substring(0, result.length - pad.length) + pad;
}

function base64EncodeTest(){
  var str = "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure."
  var code = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
  console.log(encode64(str) === code);
}

console.log(encode43(']a]W'));
console.log('ASAUDI');

console.log(encode43(base43LongTest));
console.log(base43LongAnswer);
console.log(encode43(base43LongTest) == base43LongAnswer);
