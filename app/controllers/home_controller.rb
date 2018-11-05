class HomeController < ApplicationController
  def index
    @questions = Question.includes(:answers).all
    @surveys = Survey.all
  end

  def search
    if params[:search]
      search = PgSearch.multisearch(params[:search])
      @questions = render json: search
    else
      @questions = render json: Question.includes(:answers).all
    end
  end
end
