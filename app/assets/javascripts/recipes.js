// $(() => {
//   bindClickHandlers()
// })
//
// const bindClickHandlers = () => {
//   $('#home_button').on('click', (e) => {
//     e.preventDefault()
//     fetch(`/recipes.json`)
//     .then(response => response.json())
//     .then(recipes => {
//       // $("div").html('')
//         recipes.forEach(recipe => {
//           let newRecipe = new Recipe(recipe)
//           let recipeHtml = newRecipe.formatIndex()
//           $("div.recipes").append(recipeHtml)
//         })
//     })
//   })
// }
//
// function Recipe(id, title, instructions){
//   this.id = id
//   this.title = title
//   this.instructions = instructions
// }

// Recipe.prototype.formatIndex = function() {
//   let recipeHtml = `
//   <h1>${this.title}</h1>
//   `
//   return recipeHtml
// }

// Recipe.prototype.formatIndex = function(){
//     return "<li id='recipe-"+ this.id +"'><strong>" + this.title + ": </strong>" + this.instructions
//   }

$(function(){
  $('#home_button').on('click', function(e){
      $.get(this.href).success(function(data){
        $("div.recipes").html(data)
      })
      e.preventDefault();
    })
  })

// function nextRecipe() {
//   var nextId = parseInt($(".js-next").attr("data-id")) + 1
//   updateView(nextId)
// }
//
// function previousRecipe() {
//   var prevId = parseInt($(".js-previous").attr("data-id")) - 1
//   updateView(prevId)
// }
