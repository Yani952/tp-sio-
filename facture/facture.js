function calculer(){
    var a=document.getElementById("p1").value;
    var b=document.getElementById("q1").value;
    var c= Number(a)*Number(b);
    r1.value=c;

    var d=document.getElementById("p2").value;
    var e=document.getElementById("q2").value;
    var f= Number(d)*Number(e);
    r2.value=f;

    var g=document.getElementById("t1").value;
    var h=document.getElementById("t2").value;
    var i= Number(g)*Number(i);
    r4.value=i;
    var j = Number(c)+Number(f)+Number(i)
    r4.value = j;
}
function reinitialiser(){
    window.location.reload();
}