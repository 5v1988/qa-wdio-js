@All @Search
Feature: Search products

    Scenario Outline: Search product and place an order
        Given User opens home page
        When User searches for the product: <ProductName>
        When User verifies that the product: <ProductName> displays in the results
        When User chooses the product: <ProductName> displays in the results
        When User adds choosen product to the cart
        When User proceeds to checkout from the cart
        When User enters the following personal shipping info:
            | Email   | FirstName | LastName |
            | e@e.com | Veera     | V        |
        When User enters the following shipping address info:
            | Street1        | City    | State | Zip   | Country       | PhoneNumber | ShippingMethod |
            | 2048 S Voss Rd | Houston | Texas | 77057 | United States | 8019881988  | Best Way       |
        Then User reviews payments and places order
        Then User verifies that order confirmation: <Message> is displayed

        Examples:
            | ProductName     | Message                      |
            | Driven Backpack | Thank you for your purchase! |