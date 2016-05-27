class CreateTrack < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name
      t.json :roll
    end
  end
end
