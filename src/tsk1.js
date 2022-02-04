
console.log(10);
function fun() {

    let l = document.getElementById("len").value;
    let w = document.getElementById("wid").value;
    console.log(l);
    console.log(w);

    let a = document.getElementById("ans");
    let b = document.getElementById("ans2");

    let ans = l * w;

    let ans2 = (2 * l) + (2 * w);
    console.log(ans);
    a.innerText = " " + ans + " sq.mtr";
    b.innerText = " " + ans2 + " mtr"
}



