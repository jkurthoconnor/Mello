class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    render :show

    rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id"
    render 'api/shared/error', status: :not_found    
  end

  def update
    @card = Card.find(params[:id])
    @card.assign_attributes(card_params)

    if @card.due_date_changed?
      if @card.due_date
        if @card.due_date_was
          @card.actions.create!(description: "due date updated")
        else
          @card.actions.create!(description: "due date added")
        end
      else
        @card.actions.create!(description: "due date removed")
      end
    end

    if @card.completed_changed?
      @card.actions.create!(description: "mark completed")
    end

    if @card.archived_changed?
      if @card.archived?
        @card.actions.create!(description: "archived")
      else
        @card.actions.create!(description: "unarchived")
      end
    end

    @card.save
    render :update, status: 202

    rescue ActiveRecord::RecordNotFound
      @error = "Invalid card id provided"
      render 'api/shared/error', status: :not_found
  end

  def create
    @list = List.find(params[:list_id])
    @card = Card.new(card_params.merge({list: @list}))

    if @card.save
      p "we are here"
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(", ")
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title, :list_id, :description, :archived, :due_date, :completed, labels: [])
  end
end
