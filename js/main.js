//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let drinks;
let index = 0;

let drinkName = document.querySelector('h2');
let drinkThumb = document.querySelector('img');
let instructions = document.querySelector('h3')

document.querySelector('button').addEventListener('click', update)
document.querySelector('img').addEventListener('click', rotate)




function update(){
    let cocktail = document.querySelector('input').value.split(' ').join('+')
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data.drinks)
          drinks = data.drinks;
          drinkName.innerText = drinks[0].strDrink
          drinkThumb.src = drinks[0].strDrinkThumb
          instructions.innerText = drinks[0].strInstructions
          index = index + 1;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function rotate(){
  drinkName.innerText = drinks[index].strDrink
  drinkThumb.src = drinks[index].strDrinkThumb
  instructions.innerText = drinks[index].strInstructions
  index = (index + 1) % drinks.length
}