
// funcionalidade principal: clicar e gerar a marcação do pedido
//  passo 1: prato principal
let pratoPrincipal= [];
let bebidas= [];
let sobremesas=[]
function pratoPrincipal1(){
    if(document.querySelectorAll(".container")[0].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[0].classList.add("container-chosen1");
        pratoPrincipal.push("Carne com molho da casa") ;
    }else{
        document.querySelectorAll(".container")[0].classList.remove("container-chosen1");
        pratoPrincipal.splice("Carne com molho da casa");
    }
}
function pratoPrincipal2(){
    if(document.querySelectorAll(".container")[1].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[1].classList.add("container-chosen1");
        pratoPrincipal.push("Peixe frito com um pouco de salada"); 
    }else{
        document.querySelectorAll(".container")[1].classList.remove("container-chosen1");
        pratoPrincipal.splice("Peixe frito com um pouco de salada");
    }
}
function pratoPrincipal3(){
    if(document.querySelectorAll(".container")[2].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[2].classList.add("container-chosen1");
        pratoPrincipal.push("Salada com tempero árabe"); 
    }else{
        document.querySelectorAll(".container")[2].classList.remove("container-chosen1");
        pratoPrincipal.splice("Salada com tempero árabe");
    }
}


document.querySelectorAll(".container")[0].addEventListener("click", pratoPrincipal1);
document.querySelectorAll(".container")[1].addEventListener("click", pratoPrincipal2);
document.querySelectorAll(".container")[2].addEventListener("click", pratoPrincipal3);

// passo 2: bebidas

function bebidas1(){
    
    if(document.querySelectorAll(".container")[3].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[3].classList.add("container-chosen1");
        bebidas.push("Coca-cola"); 
    }else{
        document.querySelectorAll(".container")[3].classList.remove("container-chosen1");
    }
}
function bebidas2(){
    if(document.querySelectorAll(".container")[4].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[4].classList.add("container-chosen1");
        bebidas.push("Resfresco"); 
    }else{
        document.querySelectorAll(".container")[4].classList.remove("container-chosen1");
    }
}
function bebidas3(){
    if(document.querySelectorAll(".container")[5].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[5].classList.add("container-chosen1");
        bebidas.push("Água Mineral"); 
    }else{
        document.querySelectorAll(".container")[5].classList.remove("container-chosen1");
    }
}

document.querySelectorAll(".container")[3].addEventListener("click", bebidas1);
document.querySelectorAll(".container")[4].addEventListener("click", bebidas2);
document.querySelectorAll(".container")[5].addEventListener("click", bebidas3);

//passo3: sobremesa
function sobremesa1(){
    if(document.querySelectorAll(".container")[6].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[6].classList.add("container-chosen1");
        sobremesas.push("Pudim"); 
    }else{
        document.querySelectorAll(".container")[6].classList.remove("container-chosen1");
    }
}
function sobremesa2(){
    if(document.querySelectorAll(".container")[7].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[7].classList.add("container-chosen1");
        sobremesas.push("Bolo de chocolate"); 
    }else{
        document.querySelectorAll(".container")[7].classList.remove("container-chosen1");
    }
}
function sobremesa3(){
    if(document.querySelectorAll(".container")[8].classList.contains("container-chosen1") == false){
        document.querySelectorAll(".container")[8].classList.add("container-chosen1");
        sobremesas.push("Sorvete"); 
    }else{
        document.querySelectorAll(".container")[8].classList.remove("container-chosen1");
    }
}
document.querySelectorAll(".container")[6].addEventListener("click", sobremesa1);
document.querySelectorAll(".container")[7].addEventListener("click", sobremesa2);
document.querySelectorAll(".container")[8].addEventListener("click", sobremesa3);

function button(){
  // como pular linha dentro do confirm??  
    if( window.confirm((`Seu pedido foi:\n Prato(s): ${ pratoPrincipal.join("; ")} \n Bebida(s): ${bebidas.join("; ")}\n Sobremesa(s):  ${sobremesas.join("; ")}`   )) == true){
        let mensagem = `Olá, gostaria de pedir um combo com:\n ${pratoPrincipal.join("; ")} \n${bebidas.join("; ")} \n ${sobremesas.join("; ")}`;
        window.open("https://wa.me/+5521993534009?text=" + mensagem);
        

    }
    
   
}
document.querySelector(".button").addEventListener("click", button);

//rolagem do scrollbar e enconder botão

function scrollMovie(){
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })

}
function hiddenButton(){
    if(window.scrollY > 213){
        document.querySelector(".scroll-button").style.display="block";

    }else{
        document.querySelector(".scroll-button").style.display="none";
    }
}
document.querySelector(".scroll-button").addEventListener("click", scrollMovie);
window.addEventListener("scroll", hiddenButton);
