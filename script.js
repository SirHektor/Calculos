function Ret(){
    let x=Number(prompt("Insira o primeiro lado da forma"))
    let y=Number(prompt("Insira o segundo lado da forma"))
    let z=Number(prompt("Insira o terceiro lado da forma"))
    res='O volume desta forma é '+x*y*z;
    alert(res);
    document.getElementById('a_ret').innerHTML=res
}
