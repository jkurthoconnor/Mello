class List < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  has_many :cards, dependent: :destroy

end
