import setInputField from '../support/action/setInputField';
import clickElement from '../support/action/clickElement';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import selectOption from '../support/action/selectOption';

const { When } = require('cucumber');
const { Then } = require('cucumber');

When(/^I update the computer name with "([^"]*)"$/, (updatedComputerName) => {
    setInputField("enter", updatedComputerName, "#name")
});

When(/^I update the introduced date name with "([^"]*)"$/, (updatedIntroducedDate) => {
    setInputField("enter", updatedIntroducedDate, "#introduced")
});

When(/^I update the discounted date name with "([^"]*)"$/, (updatedDiscontinuedDate) => {
    setInputField("enter", updatedDiscontinuedDate, "#discontinued")
});

When(/^I select the 1st option for element in company list$/, () => {
    selectOption("value", "1","#company")
});

Then(/^I expect the required warning message is displayed$/, () => {
    checkIfElementExists("#main > form:nth-child(2) > fieldset > div.clearfix.error > div > span")
});

When(/^I click the save this computer button$/, () => {
    clickElement("click","element","#main > form:nth-child(2) > div > input")
});

When(/^I click delete this computer button$/, () => {
    clickElement("click","element","#main > form.topRight > input")
});

