function formatDuration(value) {
  if (!value) return "now";
  const hora = 3600, dia = 86400, ano = 365 * dia;
  let tAno = 0, tDia = 0, tHora = 0, tMinute = 0, tSegundos = 0;
  while (value > 0) { ano - 1 < value ? ((value -= ano), tAno++) : 86399 < value ? ((value -= dia), tDia++) : 3599 < value ? ((value -= hora), tHora++) : 59 < value ? ((value -= 60), tMinute++) : ((tSegundos = value), (value = 0)); }
  let str = [];
  if (tAno) { tAno > 1 ? str.push(tAno, " years") : str.push(tAno, " year") }
  if (tDia) { tDia > 1 ? str.push(tDia, " days") : str.push(tDia, " day") }
  if (tHora) { tHora > 1 ? str.push(tHora, " hours") : str.push(tHora, " hour") }
  if (tMinute) { tMinute > 1 ? str.push(tMinute, " minutes") : str.push(tMinute, " minute") }
  if (tSegundos) { tSegundos > 1 ? str.push(tSegundos, " seconds") : str.push(tSegundos, " second") }
  switch (str.length) {
    case 4:
      str.splice(-2, 0, " and "); break;
    case 6:
      str.splice(-2, 0, " and "), str.splice(2, 0, ", "); break;
    case 8:
      str.splice(-2, 0, " and "), str.splice(4, 0, ", "), str.splice(2, 0, ", "); break;
    case 10:
      str.splice(-2, 0, " and "), str.splice(6, 0, ", "), str.splice(4, 0, ", "), str.splice(2, 0, ", ");
  }
  return str.join("");
}
console.log(formatDuration(31535999));




// function formatDuration(valor) {
//   if (!valor) return "now";
//   const minuto = 60;
//   const hora = 60 * minuto;
//   const dia = 24 * hora;
//   const ano = 365 * dia;
//   let yearr = 0;
//   let dayy = 0;
//   let hourr = 0;
//   let minut = 0;
//   let secund = 0;
//   while (valor > 0) {
//     if (ano - 1 < valor) (valor -= ano), yearr++;
//     else if (dia - 1 < valor) (valor -= dia), dayy++;
//     else if (hora - 1 < valor) (valor -= hora), hourr++;
//     else if (minuto - 1 < valor) (valor -= minuto), minut++;
//     else (secund = valor), (valor = 0);
//   }
//   let str = [];
//   if (yearr) {
//     if (yearr > 1) {
//       str.push(yearr, " years");
//     } else {
//       str.push(yearr, " year");
//     }
//   }
//   if (dayy) {
//     if (dayy > 1) {
//       str.push(dayy, " days");
//     } else {
//       str.push(dayy, " day");
//     }
//   }
//   if (hourr) {
//     if (hourr > 1) {
//       str.push(hourr, " hours");
//     } else {
//       str.push(hourr, " hour");
//     }
//   }
//   if (minut) {
//     if (minut > 1) {
//       str.push(minut, " minutes");
//     } else {
//       str.push(minut, " minute");
//     }
//   }
//   if (secund) {
//     if (secund > 1) {
//       str.push(secund, " seconds");
//     } else {
//       str.push(secund, " second");
//     }
//   }

//   switch (str.length) {
//     case 4: {
//       str.splice(-2, 0, " and ");
//       break;
//     }
//     case 6: {
//       str.splice(-2, 0, " and ");
//       str.splice(2, 0, ", ");
//       break;
//     }
//     case 8: {
//       str.splice(-2, 0, " and ");
//       str.splice(4, 0, ", ");
//       str.splice(2, 0, ", ");
//       break;
//     }
//     case 10: {
//       str.splice(-2, 0, " and ");
//       str.splice(6, 0, ", ");
//       str.splice(4, 0, ", ");
//       str.splice(2, 0, ", ");
//       break;
//     }
//   }
//   return str.join("");
// }
