let checkTemp = prompt("Katla temperatuurivahemik");

if (checkTemp >= 0 && checkTemp <= 20 ) {
    console.log ("-1");
} 
if (checkTemp >= 21 && checkTemp <= 40 ) {
    console.log ("0");
} 
if (checkTemp >= 41 && checkTemp <= 60 ) {
    console.log ("1");
}
