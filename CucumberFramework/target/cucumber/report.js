$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10926019300,
  "status": "passed"
});
formatter.before({
  "duration": 9603129800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid first name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 576250600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 3099787300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 87242800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.after({
  "duration": 658336500,
  "status": "passed"
});
formatter.after({
  "duration": 703247800,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products",
  "description": "",
  "id": "products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \u003c\"url\"\u003e website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u003c\"button\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "container-special-offers"
      ],
      "line": 10,
      "id": "products;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9628410800,
  "status": "passed"
});
formatter.before({
  "duration": 9680476500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \u003c\"url\"\u003e website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u003c\"button\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 20
    }
  ],
  "location": "ProductSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 3792400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "button",
      "offset": 17
    }
  ],
  "location": "ProductSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 93600,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.after({
  "duration": 653787800,
  "status": "passed"
});
formatter.after({
  "duration": 720354100,
  "status": "passed"
});
});