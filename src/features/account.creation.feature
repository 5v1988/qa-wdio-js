@All @NewAccount
Feature: Account Creation related scenarios

    Scenario Outline: Create a new account
        Given User opens home page
        When User navigates to create new customer account
        When User enters personal info: <firstName> and <lastName>
        When User checks the checkbox 'Sign Up for Newsletter'
        When User enters sign-in info: <email> , <password> and <confirmPassword>

        Examples:
            | firstName | lastName | email    | password  | confirmPassword |
            | Vithun    | V        | testmail | Test12345 | Test12345       |
