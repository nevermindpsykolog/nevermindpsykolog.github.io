
function toggleContent(button) {
  const content = button.parentElement.nextElementSibling;
  content.classList.toggle('show');
  
  const plusIcon = button.querySelector('.fa-plus');
  const minusIcon = button.querySelector('.fa-minus');
  
  if (content.classList.contains('show')) {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'inline';
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    plusIcon.style.display = 'inline';
    minusIcon.style.display = 'none';
    content.style.maxHeight = "0";
  }
}
