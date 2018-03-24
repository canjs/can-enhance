/*eslint no-console: ["error", { allow: ["log"] }] */

import {assert} from "chai";
import "steal-mocha";
import domEvents from "can-dom-events";
import h from "hyperscript";
import sinon from "sinon";
import SimpleMap from "can-simple-map";
import domData from "can-util/dom/data/data";
import canViewModel from "can-view-model";

import * as fixture from "./mocha-fixture";

sinon.assert.expose(assert, { prefix: "" });

describe("event binding", function () {

  beforeEach(function() {
    sinon.spy(console, "log");
  });

  afterEach(function() {
    console.log.restore();
    h.cleanup();
    fixture.cleanup();
  });

  it("click", function () {

    const hw = h("p#foo", {
      onclick: () => {
        console.log("foo");
      }
    },
    "hello world");

    fixture.append(hw);


    // hw.dispatchEvent(new Event('click'));

    // document.querySelector("#mocha-fixture").innerHTML = `<p id="foo" onclick="console.log('foo')">Hello World</p>`;


    domEvents.dispatch(hw, "click");

    assert.equal(1,1);
    assert.ok(console.log.calledOnce);
    assert.ok(console.log.calledWith("foo"));

  });

  it("input change", function () {
    const input = h("input#foo", {
      "type": "text",
      "oninput": function () {
        console.log("foo");
      }
    });

    input.value = "hello world";

    domEvents.dispatch(input, "input");

    assert.ok(console.log.calledOnce);
    assert.ok(console.log.calledWith("foo"));
  });


  it("viewmodel", function () {
    const div = h("div",
      h("button", "clickme", {attrs: {"on:click": "doClick()"}}));

    fixture.append(div);


    const vm = SimpleMap.extend({
      doClick: function(){
        console.log("test");
      }
    });

    domData.set.call( div, "viewModel", vm );

    const vm2 = canViewModel( div );

    console.log( vm2);
  });


});
