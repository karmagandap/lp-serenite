// get all buttons
const buttons = document.querySelectorAll(".menu-list__item button");
// get all detail contents
const contents = document.querySelectorAll(".menu-detail__item");

// looping all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClickButton);
}

// register listener
function onClickButton(event) {
  // remove all active button and content
  removeActiveClass();
  // get button id target
  const targetId = event.target.id;
  // define a variable for targeted content
  let targetedContent;
  // looping through all contents
  for (let i = 0; i < contents.length; i++) {
    // get data-id from content and compare
    const contentId = contents[i].getAttribute("data-id");
    // if the data-id from content matches with button id, set variable
    if (contentId === targetId) {
      targetedContent = contents[i];
    }
  }
  // set targeted content with the same data-id and button id to active
  targetedContent.classList.add("is-active");
  // set targeted button to active
  event.target.classList.add("is-active");
}

// remove all active button and content
function removeActiveClass() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("is-active");
    contents[i].classList.remove("is-active");
  }
}
