class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list, foreign_key: 'list_id'
  delegate :board_id, to: :list

  def attributes
    super.merge('board_id' => board_id)
  end
end