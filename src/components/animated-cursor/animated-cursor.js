const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.prepend(cursor);

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
  cursor.style.opacity = 1;
});

window.addEventListener(
  "mousedown",
  () => (cursor.style.transform = "scale(1.5)")
);

window.addEventListener("mouseup", (e) => {
  cursor.style.transform = "scale(1)";

  if (e.target.tagName === "A") {
    cursor.style.transform = "scale(5)";
    cursor.style.opacity = 0;
    setTimeout(() => (cursor.style.transform = "scale(1)"), 100);
  }
});

Array.from(document.getElementsByTagName("a")).map((link) => {
  link.addEventListener(
    "mouseenter",
    () => (cursor.style.transform = "scale(1.7)")
  );
  link.addEventListener(
    "mouseleave",
    () => (cursor.style.transform = "scale(1)")
  );
});
