
var arr = ['You know you in love when you fall asleep because reality is finally better than your dreams','Be yourself; everyone else is already taken','m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can as hell don','Be yourself; everyone else is already taken','m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can as hell don','Be yourself; everyone else is already taken']; 

function handleClick() {
    if (arr.length > 0) { 
        var randomIndex = Math.floor(Math.random() * arr.length);
        document.getElementById('output').textContent = arr[randomIndex]; 
    } else {
        document.getElementById('output').textContent = 'arr of list is empty ';
    }
}















