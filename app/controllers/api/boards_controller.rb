class Api::BoardsController < ApplicationController
  # GET api/boards
  def index
    @boards = Board.all
    render :index
  end

  # GET api/boards/:id  api/boards#show
  def show
    @board = Board.find(params[:id])

    rescue ActiveRecord::RecordNotFound
    @error = "Invalid board id"
    render 'api/shared/error', status: :unprocessable_entity
  end

  # POST api/boards
  def create
    @board = Board.new(board_params)

    if @board.save
      render :create, status: :created
    else
      @error = @board.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
