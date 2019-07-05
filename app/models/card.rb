class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list, foreign_key: 'list_id'
  has_many :comments, dependent: :destroy
  has_many :actions, dependent: :destroy
  delegate :board_id, to: :list

  def attributes
    super.merge('board_id' => board_id, 'comments_count'=> comments_count, 'comments' => self.comments)
  end

  def comments_count
    self.comments.length
  end
end
