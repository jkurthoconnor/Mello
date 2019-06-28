class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])

    rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id"
    render 'api/shared/error', status: :not_found    
  end

  def create

  end
end