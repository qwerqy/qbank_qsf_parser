class Question < ApplicationRecord
  include PgSearch
  multisearchable :against => [:title]
  belongs_to :survey
  has_many :answers
end
