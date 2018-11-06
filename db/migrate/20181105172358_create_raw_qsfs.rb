class CreateRawQsfs < ActiveRecord::Migration[5.2]
  def change
    create_table :raw_qsfs do |t|
      t.string :qsf

      t.timestamps
    end
  end
end
