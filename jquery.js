$(document).ready(function () {
    $("#button1").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 1;
    });
    $("#button2").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 2;
    });
    $("#button3").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 3;
    });
    $("#button4").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 4;
    });
    $("#button5").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 5;
    });
    $("#button6").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 6;
    });
    $("#button7").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 7;
    });
    $("#button8").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 8;
    });
    $("#button9").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 9;
    });
    $("#button0").click(function () {
        if (document.forms.display.value == 0) {
            document.forms.display.value = "";
        }
        document.forms.display.value += 0;
    });
    $("#buttonPlus").click(function () {
        document.forms.display.value += '+';
    });
    $("#buttonMinus").click(function () {
        document.forms.display.value += '-';
    });
    $("#buttonMultiply").click(function () {
        document.forms.display.value += '*';
    });
    $("#buttonDivide").click(function () {
        document.forms.display.value += '/';
    });
    $("#buttonClear").click(function () {
        document.forms.display.value = 0;
    });
    $("#buttonEquals").click(function () {
        if (display.value === "") {
        }
        else {
            document.forms.display.value = eval(document.forms.display.value);
        }
    });
})