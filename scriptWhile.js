function changeColor() {
    // Seleciona o elemento do menu
    var menu = document.getElementById('menu');

    // Alterna a classe para mudar a cor
    menu.classList.toggle('changed-color');
}


document.addEventListener('DOMContentLoaded', function () {
    var dynamicList = document.getElementById('dynamicList');
     // Dados que serão utilizados para criar a lista dinâmica
    var data = ["Teste While 1", "Teste While 2", "Teste While 3", "Teste While 4", "Teste While 5"];
    
    var i = 0;

    // Loop while para percorrer os dados e criar elementos da lista dinâmica
    while (i < data.length) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i];
        dynamicList.appendChild(listItem);
        i++;
    }
});