#!/usr/bin/env node
var parray = [2, 3, 5, 7];
var flag = 0;
for (var i = 10; ; i++) {
    flag = 0;
    if (parray.length >= 100)
	break;

    for(var j = 0; j < parray.length; j++) {
	if (i % parray[j] == 0){
	    flag = 1;
	    // process.stdout.write("xxxx" + parray[j].toString()+"xxxx\n");
	    break;
	}
    }

    if (flag == 0) {
	parray.push(i);
    }
}
process.stdout.write("First 100 prime numbers\n");
process.stdout.write(parray.join(","));

