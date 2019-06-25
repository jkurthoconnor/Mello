class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, nil: false
      t.datetime :due_date
      t.string :labels, array: true, default: [], nil: false
      t.text :description
      t.integer :list_id
      t.integer :board_id
      t.integer :comments_count
    end
  end
end
