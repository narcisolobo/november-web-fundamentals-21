var nameSpot = document.getElementById("name");
var input = document.getElementById("input");
var image = document.getElementById("image");

// async function fetchPokemon(){
//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + input.value);
//     var data = await response.json();
//     console.log(data);

//     image.src = data.sprites.front_default;
//     image.alt = data.name;
//     nameSpot.innerText = data.name;
// }

function fetchPokemon(){
    var data;
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            data = res;
            image.src = data.sprites.front_default;
            image.alt = data.name;
            nameSpot.innerText = data.name;
        })
        .catch(err => {
            image.src = "imgs/missingno.png";
            image.alt = "missing pokemon";
            nameSpot.innerText = "pokemon not found";
        });
}