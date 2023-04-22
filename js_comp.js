function hoverBorderNavItem(id, transparency) {
  const element = document.getElementById(id);
  const navbar = document.getElementById("navbar_container");
  element.style.borderBottom = `2px solid rgba(249, 194, 60, ${transparency})`;
}
function linkTo(link, new_window = false) {
  if (new_window) {
    window.open(link);
  } else window.location.href = link;
}
function saveToClipboard(text) {
  navigator.clipboard.writeText(text).then(function (x) {
    alert("Copied!");
  });
}
function showComponent(element_id, default_val) {
  if (element_id === "") return;
  let element = document.getElementById(element_id);
  let get_current_status = getComputedStyle(element).display;
  element.style.display = get_current_status === "none" ? default_val : "none";
}
function hoverColor(element_id, color) {
  if (element_id === "") return;
  let element = document.getElementById(element_id);
  element.style.backgroundColor = color;
}
function hoverDissappear(element_id, opacity) {
  if (element_id === "") return;
  let element = document.getElementById(element_id);
  element.style.opacity = opacity;
}
