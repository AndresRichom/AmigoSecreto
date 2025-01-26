//TextBox = amigo
//Bottun = agregarAmigo
//Button = sortearAmigo 
//-----------------------------------------------------------
let ListaAmigoSorteados = []
//-----------------------------------------------------------
function validarTexto(input) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    return regex.test(input);
  }
//-----------------------------------------------------------
function agregarAmigo(){
    let numeroDeUsuario = document.getElementById('amigo').value;
    console.log(numeroDeUsuario);
    
        if(numeroDeUsuario == ''){
            alert("Favor ingresar a un participante");

        }else{
            ListaAmigoSorteados.push(numeroDeUsuario);
            document.getElementById('amigo').value="";
            if (validarTexto(numeroDeUsuario)){
            }else{
                alert("No se admiten valores nuemricos");
            }

        }
    
    }
//-------------------------------------------------------------    

function Actaulizar(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  ListaAmigoSorteados.forEach(function(numeroDeUsuario){
    let li = document.createElement("li");
    li.textContent = numeroDeUsuario
    lista.appendChild(li);
  });
}
//------------------------------------------------------------
function sortearAmigo(){
    if(ListaAmigoSorteados.length === 0){
        alert("Favor agregar amigos a la lista");
        return;
    }

    let RandomAleato = Math.floor(Math.random()* ListaAmigoSorteados.length);
    let amigoRandom = ListaAmigoSorteados[RandomAleato];
    document.getElementById("resultado").innerHTML = "Amigo secreto: " + amigoRandom;
}