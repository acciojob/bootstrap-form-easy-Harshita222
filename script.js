// JavaScript for custom form validation
(function() {
    'use strict';

    // Fetch the form element
    var form = document.getElementById('internship-form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Check if the form is valid
        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        // Add Bootstrap's was-validated class to the form
        form.classList.add('was-validated');
    }, false);
})();
