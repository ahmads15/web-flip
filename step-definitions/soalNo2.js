const {Given, Then, When} = require('@cucumber/cucumber');
import * as soalNo2 from '../pages/soalNo2'

Given(/^User open browser page flip.id$/, async () => {
    await soalNo2.openWebsite();
});

When(/^User click '([^"]*)'$/,async (value) => {
    await soalNo2.clickBtn(value);
});

Then(/^User can verify page '([^"]*)'$/, async (valPage) => {
    await soalNo2.verifyPage(valPage);
});


