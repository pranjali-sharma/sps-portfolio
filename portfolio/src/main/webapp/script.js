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
 * Fetches quote from the server.
 * Currently just gets a hardcoded message from the server.
 * TODO(psharma): Update this method to use Lambdas.
 */
function getComments() {
  console.log('inside getComments()');
  fetch('/data').then(response => response.json()).then((json) => {
    console.log(json);
    const comments = json.comments;
    console.log(comments);
    const commentsEl = document.getElementById('history');
    for (let i = 0; i < comments.length; i++) {
      commentsEl.appendChild(
          createListElement(comments[i].text, comments[i].userEmail));
    }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text, userEmail) {
  const liElement = document.createElement('li');
  liElement.innerText = '[' + userEmail + ']:' + text;
  return liElement;
}

/** Gets login status */
function getLogin() {
  // fetch login status from servlet
  fetch('/login').then(response => response.json()).then((json) => {
    console.log('json from /login is ' + json);
    if (json.loggedIn) {
      console.log('logged in');
      getComments();
      displayElementWithId('comments-form', true);
      displayElementWithId('history', true);
      const linkContainer = document.getElementById('login-logout');
      linkContainer.href = json.logoutUrl;
      linkContainer.innerText = 'logout';
    }

    else {
      console.log('loggedout');
      const linkContainer = document.getElementById('login-logout');
      linkContainer.href = json.loginUrl;
      linkContainer.innerText = 'login';
      displayElementWithId('comments-form', false);
      displayElementWithId('history', false);
    }
  });
}

function displayElementWithId(elementId, show) {
  if (show) {
    document.getElementById(elementId).style.display = 'block';
  } else {
    document.getElementById(elementId).style.display = 'none';
  }
}
