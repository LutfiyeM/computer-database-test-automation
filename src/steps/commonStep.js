import { Given } from 'cucumber';

import openWebsite from '../support/action/openWebsite';

// Open the website
Given(/^I open the url$/, () => {
    openWebsite("url","http://computer-database.herokuapp.com/computers")
});
