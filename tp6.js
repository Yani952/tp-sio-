function calcul_moyenne() {
    var n1= prompt("Donner la premiere note");
    var n2= prompt("Donner la deuxieme note");
    var n3= prompt("Donner la troisieme note");

    var somme = Number(n1)+Number(n2)+Number(n3)

    document.write ("Voici la somme: "+somme+ "<Hr>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous etes redoublant");
else
document.write("Vous etes Admis");

}

function test_age() {
    var n1= prompt("donne votre age");

    var age=n1

    document.write ("Voici votre: "+age+ "<Hr>");
    
    
    if (age<18){
    document.write("<font size='8em' color='pink'>"+"vous etes mineur"+"</font>");

    document.bgColor="red";
}

else{
document.write("Vous etes majeur");
document.bgColor="green";
}

}

function simple_affichage(){
    let name = prompt('Donner votre Prenom');
    let familyName = prompt('Donner votre Nom');

    document.write('<div style="margin : auto; width: 300px: border:2px solid blue:">');
    document.write("Bonjour" + name + familyName);
    document.write('</div>')
}

function test_couleur(){
    let c=prompt("donner une couleur")
    if(c == "bleu"|| c == "Bleu"){
        document.body.style.background= "blue"
    }
    else if (c == "rouge"|| c == "ROUGE"){
    document.body.style.background= "red"
    }
    else{
        document.write("couleur non comprise")
    }
} 
