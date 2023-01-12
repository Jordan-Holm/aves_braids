class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :service_type
      t.float :service_estimate
      t.float :approx_time
      t.string :service_img
      t.text :description

      t.timestamps
    end
  end
end
