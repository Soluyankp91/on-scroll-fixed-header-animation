import css from "../index.css";
import img_ from "../img.png";

let container = document.querySelector("#container");
let img = document.querySelector("#img");
let header = document.querySelector("#header");
let avatar = document.querySelector("#avatar");
let stickyContainer = document.querySelector("#sticky");
let initialWidth = container.clientWidth;
console.log(initialWidth);

container.addEventListener("scroll", (e) => {
  console.log(container.scrollTop);
  let scrollTop = container.scrollTop;
  let imgStyles = img.style;
  let headerStyles = header.style;
  let avatarStyles = avatar.style;
  let stickContainerStyles = stickyContainer.style;
  if (scrollTop <= 0) {
    stickContainerStyles.top = -scrollTop;
    avatarStyles.transform = `scale(1)`;
    imgStyles.borderRadius = `0%`;
    avatarStyles.top = 0;
    stickContainerStyles.zIndex = 1;
  } else if (scrollTop < initialWidth - 180) {
    stickContainerStyles.top = -scrollTop;
    avatarStyles.transform = `scale(1)`;
    imgStyles.borderRadius = `0%`;
    avatarStyles.top = 0;
    stickContainerStyles.zIndex = 1;
    stickContainerStyles.transition = "none";
    // avatarStyles.top = scrollTop / 2;
    avatarStyles.transitionProperty = "transform";
  } else if (scrollTop > initialWidth - 180 && scrollTop < initialWidth - 55) {
    avatarStyles.transitionProperty = "transform, top";
    stickContainerStyles.top = -(initialWidth - 180);
    stickContainerStyles.zIndex = 100;
    avatarStyles.transform = `scale(${180 / initialWidth})`;
    avatarStyles.top = initialWidth / 2 - 180 / 2;
    // avatarStyles.right = initialWidth / 2 - 180 / 2;
    imgStyles.borderRadius = `50%`;
  } else if (scrollTop > initialWidth - 55) {
    stickContainerStyles.transition = "top .2s ease-in-out";
    stickContainerStyles.top = -(initialWidth - 55);
    avatarStyles.transform = `scale(${55 / initialWidth})`;
    avatarStyles.top = initialWidth / 2 - 55 / 2;
  }
});
