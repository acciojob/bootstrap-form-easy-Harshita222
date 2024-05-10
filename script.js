
 
//         document.getElementById('internship-form').addEventListener('submit', function(event) {
//             // Get form fields
//             var firstNameInput = document.getElementById('first-name-input');
//             var lastNameInput = document.getElementById('last-name-input');
//             var emailInput = document.getElementById('email-input');
//             var collegeInput = document.getElementById('college-input');
//             var rollNoInput = document.getElementById('roll-no-input');
//             var graduationYearInput = document.getElementById('graduation-year-input');
//             var conditionsCheckbox = document.getElementById('conditions-checkbox');

//             // Check if first name is empty
//             if (!firstNameInput.value.trim()) {
//                 document.getElementById('first-name-feedback').textContent = 'First name is required.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('first-name-feedback').textContent = ''; // Clear error message
//             }
// if (!firstNameInput.value.trim()) {
//     firstNameInput.classList.add('is-invalid');
//     event.preventDefault(); // Prevent form submission
// } else {
//     firstNameInput.classList.remove('is-invalid');
// }
//             // Check if last name is empty
//             if (!lastNameInput.value.trim()) {
//                 document.getElementById('last-name-feedback').textContent = 'Last name is required.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('last-name-feedback').textContent = ''; // Clear error message
//             }

//             // Check if email is empty
//             if (!emailInput.value.trim()) {
//                 document.getElementById('email-feedback').textContent = 'Email required.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('email-feedback').textContent = ''; // Clear error message
//             }

//             // Check if college name is empty
//             if (!collegeInput.value.trim()) {
//                 document.getElementById('college-feedback').textContent = ' Please provide a valid college.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('college-feedback').textContent = ''; // Clear error message
//             }

//             // Check if roll no is empty
//             if (!rollNoInput.value.trim()) {
//                 document.getElementById('roll-no-feedback').textContent = 'Please provide a valid Roll No.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('roll-no-feedback').textContent = ''; // Clear error message
//             }

//             // Check if graduation year is not selected
//             if (!graduationYearInput.value) {
//                 document.getElementById('graduation-year-feedback').textContent = 'Please select a valid graduation year.';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('graduation-year-feedback').textContent = ''; // Clear error message
//             }

//             // Check if conditions checkbox is not checked
//             if (!conditionsCheckbox.checked) {
//                 document.getElementById('conditions-feedback').textContent = 'you must agree before submitting .';
//                 event.preventDefault(); // Prevent form submission
//             } else {
//                 document.getElementById('conditions-feedback').textContent = ''; // Clear error message
//             }
//         });

// 	document.querySelector('form').addEventListener('submit', function(event) {
//     if (!event.target.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//     }
//     event.target.classList.add('was-validated');
// });

document.getElementById('internship-form').addEventListener('submit', function(event) {
    if (!event.target.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    event.target.classList.add('was-validated');
});