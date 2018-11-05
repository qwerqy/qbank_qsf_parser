class Answer < ApplicationRecord
  include PgSearch
  belongs_to :question
end
