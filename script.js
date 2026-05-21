// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the print button by its ID
    const printBtn = document.getElementById('printBtn');

    // Add a 'click' event listener to the button
    printBtn.addEventListener('click', function () {
        // Trigger the browser's native print dialogue.
        // Users can choose "Save as PDF" from the printer destination.
        window.print();
    });
});