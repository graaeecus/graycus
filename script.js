// Handle "YES" button click to show the thank you message
document.getElementById('yes-button').addEventListener('click', function() {
    // Hide main section
    document.getElementById('main-section').style.display = 'none';
    // Show thank you section
    document.getElementById('thank-you-section').style.display = 'block';
});

// Handle the "NO" button moving
document.getElementById('no-button').addEventListener('mouseover', function() {
    const button = document.getElementById('no-button');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.transform = `translate(${x}px, ${y}px)`;
});
