var modal = document.getElementById("modalCapuccino");
var abrirModal = document.getElementById("openModal");
var fecharModal = document.getElementsByClassName("close")[0];

abrirModal.onclick = function(){
    modal.style.display = "block";
}

fecharModal.onclick = function(){
    modal.style.display = "none";
}
