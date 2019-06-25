# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
board1 = Board.create(title: "NEW Items")
Board.create(title: "More things")
Board.create(title: "Project todos")
Board.create(title: "Another board")

list1 = List.create(title: "New List", board: board1)

card = Card.create(title: "card_1", list: list1, labels: ['blue', 'yellow'], due_date: 2.days.from_now, comments_count: 25)
