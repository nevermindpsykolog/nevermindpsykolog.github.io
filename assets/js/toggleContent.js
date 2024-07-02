
function toggleContent(element, whoami) {
  const content = element.querySelector(whoami);
  const checkbox = element.querySelector('input[type="checkbox"]');

  if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
    content.style.maxHeight = content.scrollHeight + "px";
    checkbox.checked = true;
  } else {
    content.style.maxHeight = "0";
    checkbox.checked = false;
  }
}

function handleCheckboxChange(checkbox, whoami) {
    const serviceItem = checkbox.closest('.service_item');
    toggleContent(serviceItem, whoami);
}