import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isDisplayed from '../support/check/isDisplayed';
import setInputField from '../support/action/setInputField';
import clickElement from '../support/action/clickElement';
import setWindowSize from '../support/action/setWindowSize';

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


// Given(
//     /^the element "([^"]*)?" is( not)* displayed$/,
//     isDisplayed
// );

// Given(
//     /^the element "([^"]*)?" is( not)* enabled$/,
//     isEnabled
// );

// Given(
//     /^the element "([^"]*)?" is( not)* selected$/,
//     checkSelected
// );

// Given(
//     /^the checkbox "([^"]*)?" is( not)* checked$/,
//     checkSelected
// );

// Given(
//     /^there is (an|no) element "([^"]*)?" on the page$/,
//     checkElementExists
// );

// Given(
//     /^the title is( not)* "([^"]*)?"$/,
//     checkTitle
// );

// Given(
//     /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
//     compareText
// );

// Given(
//     /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
//     checkEqualsText
// );

// Given(
//     /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
//     checkContainsText
// );

// Given(
//     /^the (button|element) "([^"]*)?"( not)* contains any text$/,
//     checkContainsAnyText
// );

// Given(
//     /^the (button|element) "([^"]*)?" is( not)* empty$/,
//     checkIsEmpty
// );

// Given(
//     /^the page url is( not)* "([^"]*)?"$/,
//     checkUrl
// );

// Given(
//     /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
//     checkProperty
// );

// Given(
//     /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
//     checkCookieContent
// );

// Given(
//     /^the cookie "([^"]*)?" does( not)* exist$/,
//     checkCookieExists
// );

// Given(
//     /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
//     checkDimension
// );

// Given(
//     /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
//     checkOffset
// );

// Given(
//     /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
//     setWindowSize
// );

// Given(
//     /^I have closed all but the first (window|tab)$/,
//     closeAllButFirstTab
// );

// Given(
//     /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
//     checkModal
// );
