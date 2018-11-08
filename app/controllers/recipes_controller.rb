class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all.order("title ASC")
  end

  def new
    @recipe = Recipe.new
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to @recipe
    else
      render 'new'
    end
  end



private
  def recipe_params
    params.require(:recipe).permit(:title, :instructions)
  end
end
