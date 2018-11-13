$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('#home_button').on('click', (e) => {
    e.preventDefault()
    fetch(`/recipes.json`)
    .then(res => res.json())
    .then(data => data)
  })
}


// function nextRecipe() {
//   var nextId = parseInt($(".js-next").attr("data-id")) + 1
//   updateView(nextId)
// }
//
// function previousRecipe() {
//   var prevId = parseInt($(".js-previous").attr("data-id")) - 1
//   updateView(prevId)
// }
