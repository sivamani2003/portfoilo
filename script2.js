const scriptURL = 'https://script.google.com/macros/s/AKfycbwA5sBt-OYuv38WiaVid-U-pGmt9SZ3HJD7j0G7eBwDIn217ZpO6phrYv9L_UZ9rX43QA/exc'
            const form = document.forms['submit-to-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            })