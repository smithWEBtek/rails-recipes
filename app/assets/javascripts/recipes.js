$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    $("a.home_button").on('click', (e) => {
        e.preventDefault()
        fetch(`/recipes.json`)
            .then(response => response.json())
            .then(recipes => {
                console.log("here are recipes: ", recipes);

                $("div.recipes ol").html("")
                recipes.forEach(recipe => {
                    let newRecipe = new Recipe(recipe)
                    let recipeHtml = newRecipe.formatIndex(recipe)
                    $("div.recipes").append(recipeHtml)
                })
            })
    })
}

class Recipe {
    constructor(id, title, instructions, ingredients) {
        this.id = id,
        this.title = title,
        this.instructions = instructions,
        this.ingredients = ingredients || []
    }

    formatIndex(recipe) {
        console.log("recipe: ", recipe)

        let recipeHtml = (`<h1>${recipe.title}</h1>`)
        return recipeHtml
    }
}
// Cernan

// Recipe.prototype.formatIndex = function(){
//     return "<li id='recipe-"+ this.id +"'><strong>" + this.title + ": </strong>" + this.instructions
//   }
// Jenn

// $(function(){
//   $("a.home_button").on('click', function(e){
// //       $.get(this.href).success(function(data){
// //         $("div.recipes").html(data)
// //       })
// //       e.preventDefault();
// //     })
// //   })
// // Avi
//
// $(function(){
//   $("a.home_button").on('click', function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })
//     e.preventDefault();
//   })
// })
//     })
//     // $.get(this.href).success(function(json){
//     //   var $ol = $("div.recipes ol")
//     //   $ol.html("")
//     //   json.forEach(function(recipe){
//     //     $ol.append("<li>" + recipe.title + "</li>");
//     //   })
//     })
//     e.preventDefault();
//   })
// })

// function nextRecipe() {
//   var nextId = parseInt($(".js-next").attr("data-id")) + 1
//   updateView(nextId)
// }
//
// function previousRecipe() {
//   var prevId = parseInt($(".js-previous").attr("data-id")) - 1
//   updateView(prevId)
// }
// Jenn
