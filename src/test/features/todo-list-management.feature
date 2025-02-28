Feature: Todo list management

    Background:
        Given User navigates to the test application

    Scenario: Validate user is able to create todo successfully
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        Given User creates a new todo "second todo"
        Then User validates todo "second todo" appears last on the list
        And User validates the todo count to be 2

    Scenario: Validate user is able to edit the todo successfully
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        When User edits the todo "first todo" to "first todo updated"
        Then User validates todo "first todo updated" appears on the list
        And User validates todo "first todo" should not appear on the list

    Scenario: Validate user is able to mark a todo as complete
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        When User marks todo "first todo" as complete
        Then User validates todo "first todo" is marked with green check
        And User validates todo "first todo" is struck off

    Scenario: Validate user is able to delete the todo successfully
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        When User deletes the todo "first todo" using the red X
        Then User validates todo "first todo" should not appear on the list
        And User validates the todo count to be 0

    Scenario: Validate user is able to filter the todo list by active
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        Given User creates a new todo "second todo"
        Then User validates todo "second todo" appears on the list
        Given User creates a new todo "third todo"
        Then User validates todo "third todo" appears on the list
        When User marks todo "first todo" as complete
        And User validates todo "first todo" is struck off
        Then User validates todo "second todo" appears on the list
        Then User validates todo "third todo" appears on the list
        Then User navigates to "Active" todo tab
        Then User validates todo "first todo" should not appear on the list
        Then User validates todo "second todo" appears on the list
        Then User validates todo "third todo" appears on the list

    Scenario: Validate user is able to filter the todo list by completed
        Given User creates a new todo "first todo"
        Then User validates todo "first todo" appears on the list
        Given User creates a new todo "second todo"
        Then User validates todo "second todo" appears on the list
        Given User creates a new todo "third todo"
        Then User validates todo "third todo" appears on the list
        When User marks todo "first todo" as complete
        And User validates todo "first todo" is struck off
        When User marks todo "second todo" as complete
        And User validates todo "second todo" is struck off
        Then User navigates to "Completed" todo tab
        Then User validates todo "first todo" appears on the list
        Then User validates todo "second todo" appears on the list
        Then User validates todo "third todo" should not appear on the list

    Scenario: Validate the todo count on each All/Active/Completed tabs
        Given User creates a new todo "first todo"
        Given User creates a new todo "second todo"
        Given User creates a new todo "third todo"
        Given User creates a new todo "fourth todo"
        Given User creates a new todo "fifth todo"
        Given User creates a new todo "sixth todo"
        When User marks todo "first todo" as complete
        When User marks todo "second todo" as complete
        Then User navigates to "Completed" todo tab
        And User validates the todo count to be 2
        Then User navigates to "Active" todo tab
        And User validates the todo count to be 4
        Then User navigates to "All" todo tab
        And User validates the todo count to be 6