@FeatureA
Feature: Demoblaze Automation Test

  @Logout
  Scenario Outline: Successfully Logout after Login with correct credential
    Given I am on the front page
    When I try to login with correct credential
    Then I am successfully logged in with username "rolansiagian"
    When I try to logout with click the Log Out button
    Then I am successfully logged out!

  @ATC
  Scenario Outline: Successfully Add item to Cart
    Given I am on the front page
    When I try to login with correct credential
    Then I am successfully logged in with username "rolansiagian"
    # When I add item "Nokia lumia 1520" to cart
    # Then I am successfully go to Product Detail of "Nokia lumia 1520"
    # When I click on Add to Cart button
    When I add item "Samsung galaxy s6" to cart
    When I add item "Nokia lumia 1520" to cart