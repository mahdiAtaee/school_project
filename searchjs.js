const f = document.getElementById("form");
 const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'sabzlearn.ir';

      function submitted(event) {
        event.preventDefault();

        win.focus();
      }

      f.addEventListener('submit', submitted);