let inString = document.getElementById("palindrome");
let result = document.getElementById("result");
let checkBtn = document.getElementById("check");

checkBtn.onclick = () => isPalindrome(inString.value);

function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            showResult(false);
            return;
        }
    }
    showResult(true);
}

function showResult(isPalindrome) {
    result.style.color = isPalindrome ? "green" : "red";
    result.value = isPalindrome ? "Palindrome!" : "Not a palindrome!";
}