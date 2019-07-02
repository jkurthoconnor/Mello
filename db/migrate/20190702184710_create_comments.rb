class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :card_id
      t.text :text, nil: false
      t.timestamps
    end
  end
end
