class Survey < ApplicationRecord
  include PgSearch
  multisearchable :against => [:name]
  has_many :questions
end
