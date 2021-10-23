const {client} = require('nightwatch-api');
const timeOut = 3000;


export const waitElementVisible = async (elementSelector) => {
    await client.waitForElementVisible(elementSelector, timeOut);
};

export const waitElementVisibleWithXpath = async (elementSelector) => {
    await client.useXpath();
    await client.waitForElementVisible(elementSelector, timeOut);
    await client.useCss();
};


export const clickElement = async (elementSelector) => {
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
};

export const clickElementViaXpath = async (elementSelector) => {
    await client.useXpath();
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
    await client.useCss();
};




export const clickElementUseXpath = async (elementSelector) => {
    await client.useXpath();
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
    await client.useCss();
};

export const expectElementEqualText = async (elementSelector, expectedText) => {
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).text.to.equal(expectedText);
};

export const expectElementEqualTextXpath = async (elementSelector, expectedText) => {
    await client.useXpath();
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).text.to.equal(expectedText);
    await client.useCss();
};


export const getStringTextXpath = async (elementSelector) => {
    let text;
    client.useXpath();
    await waitElementVisible(elementSelector);
    await client.getText(elementSelector, (result) => {
      text = result.value;
    });
    client.useCss();
    return text;
  };
