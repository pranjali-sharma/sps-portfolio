// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['And I knew exactly what to do. But in a much more real sense, I had no idea what to do.', 'It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.', 'When you’re backed against the wall, break the goddamn thing down.', 'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * Fetches random quote from the server.
 * Currently just gets a hardcoded message from the server.
 * TODO(psharma): Update this method to use Lambdas.
 */
function getRandomQuote() {
    console.log("inside getrandomquote");
  fetch('/data').then(response => response.json()).then((quote) => {
      console.log(quote)
    const arrayListElement = document.getElementById('quote-container');
    arrayListElement.innerHTML = '';
    arrayListElement.appendChild(
        createListElement('Comment: ' + quote[0]));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}


