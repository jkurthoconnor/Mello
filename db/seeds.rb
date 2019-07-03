# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
Card.destroy_all
List.destroy_all
Comment.destroy_all

board1 = Board.create(title: "NEW Items")
Board.create(title: "More things")
Board.create(title: "Project todos")
Board.create(title: "Another board")

list1 = List.create(title: "New List", board: board1)
list2 = List.create(title: "Another List", board: board1)

card1 = Card.create(title: "card_1", list: list1, labels: ['blue', 'yellow'], due_date: 2.days.ago)
card2 = Card.create(title: "card_2", list: list1, labels: ['blue', 'red'], due_date: 1.days.from_now)

card3 = Card.create(title: "card_3", list: list2, labels: ['blue'], due_date: 1.days.ago)
card4 = Card.create(title: "card_4", list: list2, labels: ['red', 'yellow'], due_date: 8.days.from_now)
card5 = Card.create(title: "card_5", list: list2, labels: ['blue', 'yellow', 'purple'], due_date: 4.days.from_now)

comment1 = Comment.create(text: "This is a comment", card: card1)
