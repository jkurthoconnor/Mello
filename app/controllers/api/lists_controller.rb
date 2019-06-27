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

  def update

  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
