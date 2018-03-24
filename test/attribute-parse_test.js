import {assert} from "chai";
import "steal-mocha";
import * as fixture from "./mocha-fixture";
import h from "hyperscript";

import "../lib/attributes-binding";
import AttributesBinding from "../lib/attributes-binding";

describe("attribute finding", function () {

  beforeEach(function() {
  });

  afterEach(function() {
    // h.cleanup();
    // fixture.cleanup();
  });

  it("click binding", function () {
    const html = h("div",
      h("p", "helloworld"),
      h("div", "clickme", {attrs: {"on:click": "clickMe()"}}));


    fixture.append(html);
    
    let foo = new AttributesBinding(html);
    assert.equal(1, foo.parse().length);

    // document.querySelectorAll()

  });

});


/**
 * Find all the elements with a tagName that matches.
 * @param {RegExp} regEx  regular expression to match against tagName
 * @returns {Array}       elements in the DOM that match
 */
// function getAllTagMatches(regEx) {
//   return Array.prototype.slice.call(document.querySelectorAll('*')).filter(function (el) {
//     return el.tagName.match(regEx);
//   });
// }
// getAllTagMatches(/^di/i); // Returns an array of all elements that begin with "di", eg "div"
