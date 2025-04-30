export default function OutSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "outside-click";

  if (!element.hasAttribute(outside)) {
    events.forEach((useEvents) => {
      setTimeout(() => {
        html.addEventListener(useEvents, handleOutSideClick);
      });
    });

    element.setAttribute(outside, "");
  }

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      events.forEach((useEvent) => {
        html.removeEventListener(useEvent, handleOutSideClick);
      });
      callback();
    }
  }
}
