class IngredientsController < ApplicationController

  def create
    @recipe = Recipe.find(params[:recipe_id)

  end

  def destroy

  end
end
