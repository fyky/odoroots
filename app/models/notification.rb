class Notification < ApplicationRecord
  # アソシエーション
  belongs_to :event, optional: true
  belongs_to :comment, optional: true

  belongs_to :room, optional: true
  belongs_to :message, optional: true
  belongs_to :room, optional: true

  belongs_to :visitor, class_name: 'User', foreign_key: 'visitor_id', optional: true
  belongs_to :visited, class_name: 'User', foreign_key: 'visited_id', optional: true

  belongs_to :reservation, optional: true

  # 並び順を新着順で指定
  default_scope -> { order(created_at: :desc) }

end
