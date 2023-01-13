@FeatureA
Feature: Latihan Automation di demoqa.com

    @Click
    Scenario Outline: Successfully click 3 Buttons in Elements Page
        Given I am on the Main Page
        When I click Elements Button
        Then I successfully go to "Elements" Page
        When I click Button on Navbar
        Then I successfully go to "Buttons" Page
        When I click on Click Me Button
        Then I successfully click on Click Me Button
        When I click on Right Click Me Button
        Then I successfully click on Right Click Me Button
        When I click on Double Click Me Button
        Then I successfully click on Double Click Me Button

    @Drop
    Scenario Outline: Successfully Drag and Drop
        Given I am on the Main Page
        When I click Interactions Button
        Then I successfully go to "Interactions" Page
        When I click Droppable on Navbar
        Then I successfully go to "Droppable" Page
        When I doing Drag and Drop
        Then I successfully doing Drag and Drop