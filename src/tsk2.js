let ans = document.getElementById('ans');
console.log(ans);
function fun() {
    let val = document.getElementById('val').value;

    let ans = document.getElementById('ans');
    console.log(val);
    console.log(one);
    console.log(two);
    console.log(ans);
    if (one == true) {

        let x = val * 60;
        ans.innerText = x;

    } else if (two == true) {

        let x = val * 3600;
        ans.innerText = x;

    }
    console.log(one);
}
let one = false;
let two = false;
function fun1() {
    one = true;

}
function fun2() {
    two = true;

}