$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('#home_button').on('click', (e) => {
    console.log('hello')
    e.preventDefault()

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
