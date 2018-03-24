const id = "#mocha-fixture";
const mochaFixture = document.querySelector(id);

export function append(element) {
  mochaFixture.appendChild(element);
  return element;
}

export function html(html) {
  mochaFixture.innerHTML = html;
}

export function cleanup() {
  mochaFixture.innerHTML = "";
}

