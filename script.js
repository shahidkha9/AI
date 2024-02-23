/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
     // Replace 'YOUR_API_KEY' with your OpenAI API key
  const apiKey = f56d674203a94e1a9cb586886c60828f;

  async function sendMessage() {
      const userInput = document.getElementById("userInput").value;
      appendMessage("You: " + userInput);

      const response = await getChatbotResponse(userInput);
      appendMessage("Chatbot: " + response);

      document.getElementById("userInput").value = "";
  }

  async function getChatbotResponse(userInput) {
      const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + apiKey,
          },
          body: JSON.stringify({
              model: 'text-davinci-003',
              prompt: userInput,
              max_tokens: 50
          })
      });

      const data = await response.json();
      return data.choices[0].text.trim();
  }

  function appendMessage(message) {
      const chatbox = document.getElementById("chatbox");
      const messageElement = document.createElement("div");
      messageElement.textContent = message;
      chatbox.appendChild(messageElement);
      chatbox.scrollTop = chatbox.scrollHeight;
  }
</script>

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
