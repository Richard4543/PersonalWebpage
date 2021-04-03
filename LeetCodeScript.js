function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
        if (pass1 != "LeetGroup"){
            history.go(0);
            var pass1 = prompt('Incorrect Password - Try Again.',' ');
        }
        if (pass1 == "LeetGroup") {
            window.open('LeetCode.html');
            return;
        } 
        if (pass1 == null){
            history.go(0);
            return;
        }
        testV+=1;
        var pass1 = prompt('Incorrect Password - Try Again.',' ');
    }
    if (pass1!="LeetGroup" & testV ==3) history.go(0);
    return " ";
}