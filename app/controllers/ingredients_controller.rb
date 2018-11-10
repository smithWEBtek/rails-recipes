class IngredientsController < ApplicationController

  def create
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = @recipe.ingredients.create(params[:ingredients]).permit(:name, :quantity)
    redirect_to recipe_path(@recipe)

  end

  def destroy

  end
end
