Feature: Add the computer
              As a developer
              I want to be able to test add the computer functionalities

        Background: Open the url
            Given I open the url

        Scenario Outline: Add new computer
             When I click add a new computer button
              And I update the computer name with "<updatedComputerName>"
              And I update the introduced date name with "<updatedIntroducedDate>"
              And I update the discounted date name with "<updatedDiscontinuedDate>"
              And I select the 1st option for element in company list
             When I click the save this computer button
             Then I expect the info message is displayed "<infoMessage>"
    
        Examples:
                  | computerName | updatedComputerName | updatedIntroducedDate | updatedDiscontinuedDate | infoMessage |
                  | Pilot        | Pilot QA Test       | 2020-10-10            | 2020-09-09              | Done!       |
