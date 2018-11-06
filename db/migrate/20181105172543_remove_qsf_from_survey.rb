class RemoveQsfFromSurvey < ActiveRecord::Migration[5.2]
  def change
    remove_column :surveys, :qsf, :string
  end
end
