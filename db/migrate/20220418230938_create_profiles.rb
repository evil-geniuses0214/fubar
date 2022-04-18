class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.text :picture
      t.string :branch_of_service
      t.string :military_status
      t.string :city
      t.string :state
      t.string :favorite_beer
      t.string :duty_station
      t.text :about_me

      t.timestamps
    end
  end
end
