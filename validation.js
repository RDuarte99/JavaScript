function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("Correo electrónico no coincidente.")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element)
      }, 3000)
    } else {
      form.submit();
    }
  });
};

window.onload = emailValidation;
