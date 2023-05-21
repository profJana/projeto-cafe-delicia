var modal = document.getElementById("modalCapuccino");
var modalTorta = document.getElementById("modalTorta");
var modalSalgados = document.getElementById("modalSalgados");
var modalMilshakes = document.getElementById("modalMilkshakes");
var abrirModal = document.getElementById("openModal");
var abrirSalgados = document.getElementById("openSalgados");
var abrirMilkshakes = document.getElementById("openMilkshake");
var abrirTorta = document.getElementById("openTorta");
var fecharModal = document.getElementsByClassName("close")[0];
var closeTortas = document.getElementsByClassName("closeTortas")[0];
var closeSalgados = document.getElementsByClassName("closeSalgados")[0];
var closeMilkshakes = document.getElementsByClassName("closeMilkshake")[0];

//café
abrirModal.onclick = function(){
    modal.style.display = "block";
}
fecharModal.onclick = function(){
    modal.style.display = "none";
}


//salgados
abrirSalgados.onclick = function(){
    modalSalgados.style.display = "block"; //visível
}
closeSalgados.onclick = function(){
    modalSalgados.style.display = "none"; //invisível
}

//torta
abrirTorta.onclick = function(){
    modalTorta.style.display = "block";
}
closeTortas.onclick = function(){
    modalTorta.style.display = "none";
}

//milkshake
abrirMilkshakes.onclick = function(){
    modalMilshakes.style.display = "block";
}
closeMilkshakes.onclick = function(){
    modalMilshakes.style.display = "none";
}



