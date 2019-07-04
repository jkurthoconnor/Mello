class Action < ApplicationRecord
  validates_presence_of :description, allow_blank: false
  belongs_to :card

end
