function passWord() {
    var storedPassword = "LeetGroup"; // Set your password here
    var pass1 = prompt('Please Enter Your Password','');
    
    if (pass1 === storedPassword) {
        window.location.href = "LeetCode.html"; // Redirect to the protected page
    } else {
        alert('Incorrect Password. Please try again.');
    }
}
