
const base43Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$*+-./:";

const base43TestChars = "Iama";
const base43TestCode = "8G4J5R";

const transactionString = "71OUKK$VH33.J1Y/K8Q8T3-F8X59N/YIO*LXY.7320F/5.KN$EG47LC*I1VP$S7FS2+.KAJR5:8$-MDQTMHA54/QT3R$JVX/WRDLONP/*TJLGIHRB.KNSGZWVUW9TOSOE6G1::..-NLQNJD-R1GNJ.HA7A1M.6CS:-60X9LR9XHHB6B1KLTX4T/EZN3$ZWW+J10-Z9QU-N9HHU$EV865ED$3JD$ZUJ6IA2Z:.WXKXTCK2:BMZFW3F+QI.GS54BN3*Q1T*3C1ESF0QA:ZOX1RLG/I/I1GPL:FPLRKAKH:KO4*U0YAK16-CGI-Z7A3EQAJ8Q484VA05FE7JO$-U.HBFWNFSFD8EGPJR*QV3YJD5SHA3BLWM+FR0*FS7M89S115/PU7:6-XW:EPL4/+7N2RFM/**Z6J*/--97OD2QWSLUE7G5F42ATP0SAV52U1GV+WZAJX$T0R:49QIDYJUKOXWX.$UUTR5596EOVK88E$ALJ-/MEML4883J5572D1-LRSXTRYL:X39U8QQ0XII09I5M3:13$U+B7V3S1+YUQM3:G+A/IH9+$.CHEOGE-3NX:OZ+H1D*N3IFC9+/ZT*S/O45QLRC";

const base43LongTest = "0100000001ac01d39c405d31d3d20b00254e84dce9838b9c280f3aa07bf77a1510d8f8779900000000fd4201004830450221009a4065d3b869f20b6e858e0722d9b511213e09dcf1b61072cccbff340c7f424e022034c42927a64fe323d8e8b76d99960322bf0664fdad9994939aedac74a32ca8c701483045022100dda3d5974ae1c06d9742c7aa5e2f789218054c60476f049300c7d4d0395819aa02201f484d7a2b4cc6186b23f54ea4099a728760d71fcc0c7a82bd056c6eaeacf3ab014cad5221020de4d18c5b852a3c1d1f1033a812b019c396b75cab2a248089b09632c7bbdda221024ee8ab3639ea02d7fac7e90078b16c06811573d7046cd06b5d1d8d7e50e0767a21025392159aaf967c2f7e1dca92b68d1b3abaf44a9d3903f7382e76f9f64e7bfa242102df269b98c7ea5bdec1aac268d6107b827163d3a0ca8bd3522279d14c46e1bf1a2103cfbf85d74dddf892b3b6f918fd36dab13cc904d9ba3c9306e9e25fe53ebde08155aeffffffff01131f0000000000001976a914e9cc1b59c97f860f5c629c23d93920da60648d0388ac00000000";
const base43LongAnswer = "7TG5RUO-Y-9:G5IU$61+B0MOM7Q698PSE/V6JYQTVD2GF5GB$B*-A*11AJ8J8M46QNXW/16ZBRFLK9N1KIIVROQI39KVI4Y*7:XJK+L/+U67O*B0:7WGIA0C424KG*9A2LZN+IGS2.OWM4J.VW-*TR$TR7/QBG$W*U4ABSMT-S$XX/.TESGFAZID775.J/WTGZZ4-4GZ3HTN26MEPA9EO$X*/0W3PHT5G*8B7$05J5NZMH-CGGX4O.I*-T+$2$*3081Y.+M+K+NM*64$Q.29VKQ9Q*GCXTTDH-UW1TF4H.1NPGZX:JLGU9S752WFLD1YR7Y3TNTR695G8WO1/3VX6-AN8/EMJ0-J25L/S3X8-1IV7FZA:554W1Q5HSH/ZR0EQPHN1NNHBQ:NDEF5R5247NU7M9P-4D-W3FLIAZ9OQLOS0SDN3B:E9VR$U25E/8VW:4HDJAL***W/HI16/4Z0G-SOKEC++90*HV24ZO/MDXPU-44YCSLF71:01SERXU$AKDH*1NS1/M8GNSS$5R+E+6+0.15AUPU8MXHAS16Q7WH9896SW2+HGA5I0C$:/RA1ZRK:XL-ECGHBO$X9OYK7.PD2FTP+Q711C5H*OBDMQWD.YFCHWD6I32IPH2J6OPB33288I/*.MZG$DEXF2V5A3I9ZC.W6:*NOLNC3PNK+B$1W*4ZAS79$R*JFGM5X$+IHOP68U7E+6KPVPV6OGC0/UHQW3NXR7*2QJO1T83DM7C9N77D:4/QMDYL:9H.L3QAI04INCVVVK4YHNB9QO8X1:7ANE5$2V6OI575WO5/Y-OLHJ3/.+XU1U-K3RQH:4M1X5WJF40CR3VI*QXD5L*8JDA-UIV/-4.I*7ENPT$$*3-7A./.+8WEKWI7Z/S5*.LCUUJCT1.7JS/Z1YQN3FSZMG0BW-MUWCU2FGT2O2KZ3/QOA952-1MU0.F-F../TCHTV4AU*/GI8N-5TFC73U27-/T0P432--4QP4IAVP8./V7HKJHJKCY/KXPV-$8/W7+8SH++VW8M8S3NYNK-29812R60$QQ/:$V+L1Q/3X7MBV4BQCHX1FR0WOFAKF+DW37VKTJO6P7SJ+GBLQ5QSNBLKL$8*5S.D1G//BMPVE0V1-6QCFA/AK1H.X7O85H7U56QGV.I*M9-I.1G:KP/N0A6ARQQSVT/46GGSXXG.M*T5UD3RCG:EZNV+*3";

// long division

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

function encode43(input) {
  var number_encode = 0;
  var result = [];
  input = input.split('').map(function(l){ return l.charCodeAt(0); });

  var div, mod, obj;
  while (byteArrGreaterThan(input, 43)) {
    ({div, mod } = divMod(input, 256, 43, 0));
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


function decode43(input) {
  
  var result = [];
  var input43 = [];
  for (var i in input) {
    var l = input[i];
    var index = base43Chars.indexOf(l);
    if (index < 0) {
      throw "illegal character";
    }
    input43[i] = index;
  }

  var zeroCount = 0;
  var pad = '';
  while (zeroCount < input.length && input43[zeroCount] == 0) {
    zeroCount += 1;
    pad += "0";
  }

  var div, mod;
  var startAt = zeroCount;

  while (byteArrGreaterThan(input43, 256)) {
    ({div, mod} = divMod(input43, 43, 256, startAt));
    input43 = div;
    result.unshift(String.fromCharCode(mod));
  }
  
  return  pad + result.join("");
}

var a = encode43('00]a]W');
var b = decode43(a);
console.log(a, b, '00]a]W');

// console.log(encode43(base43LongTest));
// console.log(base43LongAnswer);
// console.log(encode43(base43LongTest) == base43LongAnswer);
// console.log(decode43(base43LongAnswer));
// console.log(decode43(base43LongAnswer) === base43LongTest);
// console.log(encode43(decode43(base43LongAnswer)) === base43LongAnswer);
console.log(decode43(transactionString));
