"use strict";
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
var num = 0;
var Line = "";
		//Top half
    for (var i = 0; i < pHeight; i++) {
        Line += "<p>";
        for (var j = i + 1; j < pHeight; j++) {
            Line += "<span style='color: white;'>" + pSymbol + "</span>";
        }
        for (var j = 0; j <= i; j++) {

            //Is the position even or odd so we change the color
            if (num % 2) {
                //even
                Line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                num++;
                }
            else {
                //odd
                Line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                num++;
                }

        }
        //right half
        for (var j = 0; j <= i; j++) {

            //Is the position even or odd so we change the color
            if (num % 2) {
                //even
                Line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                num++;
                }
            else {
                //odd
                Line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                num++;
                }

        }
        Line += "</p>";
        // console.log(rLine);

    }

    document.getElementById("rtop").innerHTML = Line;
    var Line = "";
    //bottom half
    //left corner
    for (var i = pHeight; i > 0; i--) {
        Line += "<p>";
         for (j = pHeight - i; j > 0; j--) {
            Line += "<span style='color: white;'>" + pSymbol + "</span>";
        }
        for (var j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (num % 2) {
                //even
                Line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                num++;
                }
            else {
                //odd
                Line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                num++;
                }
        }
        //right corner
        for (var j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (num % 2) {
                //even
                Line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                num++;
                }
            else {
                //odd
                Line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                num++;
                }

        }
        
        Line += "</p>";
        //console.log(rLine);

    }

    document.getElementById("rbottom").innerHTML = Line;
}
