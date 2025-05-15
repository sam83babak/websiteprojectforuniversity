// Test JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create a test button
    const testButton = document.createElement('button');
    testButton.textContent = 'Click Me!';
    testButton.style.padding = '10px 20px';
    testButton.style.margin = '20px';
    
    // Add button to body
    document.body.appendChild(testButton);
    
    // Counter for clicks
    let clickCount = 0;
    
    // Add click event listener
    testButton.addEventListener('click', function() {
        clickCount++;
        alert(`You clicked the button ${clickCount} time${clickCount === 1 ? '' : 's'}!`);
        
        // Change button color randomly on click
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });

    // Add a simple hover effect
    testButton.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
        this.style.transform = 'scale(1.1)';
    });

    testButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Add a test message to the page
    const testMessage = document.createElement('p');
    testMessage.textContent = 'This is a test message from JavaScript!';
    testMessage.style.color = '#007bff';
    testMessage.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(testMessage);
});
