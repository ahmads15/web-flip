const {Given, Then, When} = require('@cucumber/cucumber');
import * as soalNo1 from '../pages/soalNo1'



Then(/^User dapat mengecek bila data tidak sesuai$/,async () => {
    await soalNo1.verifyResults();
});
