function decode(str) {
  const spt = str.replace(/\s\s+/g, " *** ").split(" ");
  let tam = spt.length;
  let rst = [];
  for (let i = 0; i < tam; i++) {
    switch (spt[i]) {
      case ".-":
        rst.push("a");
        break;
      case "-...":
        rst.push("b");
        break;
      case "-.-.":
        rst.push("c");
        break;
      case "-..":
        rst.push("d");
        break;
      case ".":
        rst.push("e");
        break;
      case "..-.":
        rst.push("f");
        break;
      case "--.":
        rst.push("g");
        break;
      case "....":
        rst.push("h");
        break;
      case "..":
        rst.push("i");
        break;
      case ".---":
        rst.push("j");
        break;
      case "-.-":
        rst.push("k");
        break;
      case ".-..":
        rst.push("l");
        break;
      case "--":
        rst.push("m");
        break;
      case "-.":
        rst.push("n");
        break;
      case "---":
        rst.push("o");
        break;
      case ".--.":
        rst.push("p");
        break;
      case "--.-":
        rst.push("q");
        break;
      case ".-.":
        rst.push("r");
        break;
      case "...":
        rst.push("s");
        break;
      case "-":
        rst.push("t");
        break;
      case "..-":
        rst.push("u");
        break;
      case "...-":
        rst.push("v");
        break;
      case ".--":
        rst.push("w");
        break;
      case "-..-":
        rst.push("x");
        break;
      case "-.--":
        rst.push("y");
        break;
      case "--..":
        rst.push("z");
        break;
      case ".----":
        rst.push("1");
        break;
      case "..---":
        rst.push("2");
        break;
      case "...--":
        rst.push("3");
        break;
      case "....-":
        rst.push("4");
        break;
      case ".....":
        rst.push("5");
        break;
      case "-....":
        rst.push("6");
        break;
      case "--...":
        rst.push("7");
        break;
      case "---..":
        rst.push("8");
        break;
      case "----.":
        rst.push("9");
        break;
      case "-----":
        rst.push("0");
        break;
      case "***":
        rst.push(" ");
        break;
      case "·–·–·–":
        rst.push(".");
        break;
      case "––··––":
        rst.push(",");
        break;
      case "··––··":
        rst.push("?");
        break;
      case "·––––·":
        rst.push("'");
        break;
      case "–·–·––":
        rst.push("!");
        break;
      case "–··–·":
        rst.push("/");
        break;
      case "–·––·":
        rst.push("(");
        break;
      case "–·––·–":
        rst.push(")");
        break;
      case "·–··· ":
        rst.push("&");
        break;
      case "–––···":
        rst.push(":");
        break;
      case "–·–·–·":
        rst.push(";");
        break;
      case "–···–":
        rst.push("=");
        break;
      case "·–·–·":
        rst.push("+");
        break;
      case "–····–":
        rst.push("-");
        break;
      case "··––·–":
        rst.push("_");
        break;
      case "·–··–·":
        rst.push('"');
        break;
      case "···–··-":
        rst.push("$ ");
        break;
      case "·––·–·":
        rst.push("@ ");
        break;
      default:
        rst.push(spt[i]);
        break;
    }
  }
  return rst.join("");
}

console.log(decode(" --- .-.. .-   -- . ..-   -. --- -- .   . ....   .- .-.. . -..-   .... . -. .-. .. --.- ..- .    .--. .-. .- --.. . .-.   . --   -.-. --- -. .... . -.-. . -....- .-.. --- .-.-.-")); 


/*

  A .- B -... C -.-. D -.. E . F ..-. G --. H .... I .. J .--- K -.- L .-.. M -- N -. O --- P .--. Q --.- R .-. S ... T - U ..- V ...- W .-- X -..- Y -.-- Z --.. 0 ----- 1 .---- 2 ..--- 3 ...-- 4 ....- 5 ..... 6 -.... 7 --... 8 ---.. 9 ----. . .-.-.- , --..-- ' .----. ? ..--.. : ---... - -....- / -..-. [ -.--. ( -.--. ] -.--.- ) -.--.- " .-..-. _ ..--.- = -...- + .-.-. @ .--.-. Ä .-.- Å .--.- É ..-.. Ñ --.-- Ö ---. Ü ..-- 

a .-      h ....    o ---     u ..-      1 .----     6 -....
b -...    i ..      p .--.    v ...-     2 ..---     7 --...
c -.-.    j .---    q --.-    w .--      3 ...--     8 ---..
d -..     k -.-     r .-.     x -..-     4 ....-     9 ----.
e .       l .-..    s ...     y -.--     5 .....     0 -----
f ..-.    m --      t -       z --..
g --.     n -.

*/
