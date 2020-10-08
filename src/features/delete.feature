Feature: Delete the computer
              As a developer
              I want to be able to test delete the computer functionalities

        Background: Open the url
            Given I open the url

        Scenario Outline: Edit computer name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
             When I click delete this computer button
             Then I expect the info message is displayed "<infoMessage>"

        Examples:
                  | computerName | infoMessage |
                  | A            | Done!       |