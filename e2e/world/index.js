const {
  setWorldConstructor,
  World,
  setDefaultTimeout,
  defineParameterType,
} = require("@cucumber/cucumber");
const { Builder, By } = require("selenium-webdriver");
const chromedriver = require("chromedriver");
const chrome = require("selenium-webdriver/chrome");

defineParameterType({
  regexp: /(dashboard|sales|products|customers|analytics)/,
  transformer: function (pageName) {
    return this.path(pageName);
  },
  name: "path",
});

defineParameterType({
  regexp: /(salesCard|ordersCard|customersCard)/,
  transformer: function (card) {
    return this.cardIndex(card);
  },
  name: "card",
});

class DashboardWorld extends World {
  constructor(options) {
    super(options);
  }

  async load() {
    setDefaultTimeout(10 * 1000);
    this.appUrl = this.parameters.appUrl;
    const service = new chrome.ServiceBuilder(chromedriver.path);
    let chromeOptions = new chrome.Options();
    if (this.parameters.headless) {
      chromeOptions = chromeOptions.headless();
    }
    this.driver = await new Builder()
      .forBrowser("chrome")
      .setChromeService(service)
      .setChromeOptions(chromeOptions)
      .build();
  }

  path(pageName) {
    switch (pageName) {
      case "dashboard":
        return "";
      case "sales":
        return "sales/overview";
      case "products":
        return "products/overview";
      case "customers":
      case "analytics":
        return "customers/analytics";
      default:
        return "";
    }
  }

  cardIndex(card) {
    switch (card) {
      case "salesCard":
        return 0;
      case "ordersCard":
        return 1;
      case "customersCard":
        return 2;
      default:
        return 0;
    }
  }
}

setWorldConstructor(DashboardWorld);
