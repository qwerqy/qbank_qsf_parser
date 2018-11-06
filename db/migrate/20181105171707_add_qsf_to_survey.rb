class AddQsfToSurvey < ActiveRecord::Migration[5.2]
  def change
    add_column :surveys, :qsf, :string
  end
end
