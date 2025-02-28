Feature: Todo Data Validation

    Background:
        Given User navigates to the test application

    Scenario Outline: <Description>
        Given User creates a new todo "<TodoName>"
        Then User validates todo "<TodoName>" appears on the list
        And User validates the todo count to be 1
        Then User refreshes the page
        Then User validates todo "<TodoName>" appears on the list
        And User validates the todo count to be 1

        Examples:
            | Description                                              | TodoName                                                       |
            | Validate user is able to create todo with just one char  | A                                                              |
            | Validate user is able to create todo with multiple chars | ABCDE                                                          |
            | Validate user is able to create todo with multiple words | This test is to ensure todo can be created with multiple words |
            | Validate user is able to create todo with 50+ chars      | ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ           |
            | Validate user is able to create todo with special chars  | `~!@#$%^&*()-_=+\|]}[{;:/?.>,<}]                               |
            | Validate user is able to create todo with numbers        | 9876543210                                                     |