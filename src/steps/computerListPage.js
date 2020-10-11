import checkContainsText from '../support/check/checkContainsText';
import setInputField from '../support/action/setInputField';
import clickElement from '../support/action/clickElement';

const { When } = require('cucumber');
const { Then } = require('cucumber');

When(/^I enter "([^"]*)" to the searchbox$/, (computerName) => {
    setInputField("enter", computerName, "#searchbox")
});

When(/^I click filter by name button$/, () => {
    clickElement("click","element","#searchsubmit")
});

When(/^I click the computer name element$/, () => {
	clickElement("click","element","#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a")
});

Then(/^I expect the info message is displayed "([^"]*)"$/, (infoMessage) => {
    checkContainsText("element", "#main > div.alert-message.warning", null ,infoMessage)
});

Then(/^The computer should be found and listed "([^"]*)"$/, (computerName) => {
	checkContainsText("element", "#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a", null,computerName)
});

Then(/^I expect nothing to display warning info will be shown on the screen "([^"]*)"$/, (infoMessage) => {
    checkContainsText("element", "#main > div.well > em", null, infoMessage)
});


When(/^I click add a new computer button$/, () => {
	clickElement("click","element","#add")
});
