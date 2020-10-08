Feature: Edit the computer fields
              As a developer
              I want to be able to test edit the computer functionalities
    
        Background: Open the url
            Given I open the url

        Scenario Outline: Edit computer name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
              And I update the computer name with "<updatedComputerName>"
             When I click the save this computer button
             Then I expect the info message is displayed "<infoMessage>"
    
        Examples:
                  | computerName | updatedComputerName | infoMessage |
                  | Pilot        | Pilot QA Test       | Done!       |
    
        Scenario Outline: Edit introduced date
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
              And I update the introduced date name with "<updatedIntroducedDate>"
             When I click the save this computer button
             Then I expect the info message is displayed "<infoMessage>"
    
        Examples:
                  | computerName | updatedIntroducedDate | infoMessage |
                  | Ar           | 2020-08-08            | Done!       |

        Scenario Outline: Edit discontinued date
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
              And I update the discounted date name with "<updatedDiscontinuedDate>"
             When I click the save this computer button
             Then I expect the info message is displayed "<infoMessage>"
    
        Examples:
                  | computerName | updatedDiscontinuedDate | infoMessage |
                  | Ar           | 2020-08-08              | Done!       |

        Scenario Outline: Edit company name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
              And I select the 1st option for element in company list
             When I click the save this computer button
             Then I expect the info message is displayed "<infoMessage>"
    
        Examples:
                  | computerName | infoMessage |
                  | Ar           | Done!       |

        Scenario Outline: Delete computer name and save
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
              And I click the computer name element
              And I update the computer name with "<updatedComputerName>"
             When I click the save this computer button
             Then I expect the required warning message is displayed
    
        Examples:
                  | computerName | updatedComputerName |
                  | Ar           |                     |
