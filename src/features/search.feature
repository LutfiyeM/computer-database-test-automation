Feature: Search the computer
              As a developer
              I want to be able to test search functionalities
    
        Background: Open the url
            Given I open the url

    #@TestCaseID1
        Scenario Outline: Search existing computer with full name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
             Then The computer should be found and listed "<computerName>"

        Examples:
                  | computerName |
                  | Amiga        |

    #@TestCaseID2
        Scenario Outline: Search existing computer with incompleted name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
             Then The computer should be found and listed "<computerName>"

        Examples:
                  | computerName |
                  | Pil          |

    #@TestCaseID3
        Scenario Outline: Search unexisting computer
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
             Then I expect nothing to display warning info will be shown on the screen "<infoMessage>"

        Examples:
                  | computerName  | infoMessage        |
                  | 06October2020 | Nothing to display |
        
    #@TestCaseID4
        Scenario Outline: Search computer with company name
             When I enter "<computerName>" to the searchbox
              And I click filter by name button
             Then I expect nothing to display warning info will be shown on the screen "<infoMessage>"

        Examples:
                  | computerName | infoMessage        |
                  | Texas        | Nothing to display |