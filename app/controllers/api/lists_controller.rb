class Api::ListsController < ApplicationController
  # POST api/lists
  def create
    @board = Board.find(params[:board_id])
    @list = List.new(list_params.merge({board: @board}))

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(", ")
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: 404
  end

  #PUT/PATCH api/lists/:id
  def update
    @list = List.find(params[:id])
    @list.title = params[:title]

    @list.save
    render :update, status: :updated

    rescue ActionController::ParameterMissing
      @error = "Invalid list id provided"
      render 'api/shared/error', status: :unprocessable_entity
    end

  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
