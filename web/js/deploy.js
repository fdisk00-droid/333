// Interactive Deployment Simulation

// Function to simulate CAJA ROJA folding and unfolding states
function simulateDeployment() {
    const states = ['Folding', 'Unfolding'];
    let currentState = 0;

    // Terminal-style logging function
    function log(message) {
        const timestamp = new Date().toISOString().split('T')[0] + ' ' + new Date().toISOString().split('T')[1].split('.')[0];
        console.log(`\x1b[36m[${timestamp}]\x1b[0m ${message}`); // Cyan color
    }

    // Start simulation
    log('Simulation started...');
    log('Visual Style: Cyberpunk Aesthetics');

    setInterval(() => {
        log(`CAJA ROJA is currently: ${states[currentState]}`);
        currentState = (currentState + 1) % states.length;
    }, 2000); // Change state every 2 seconds
}

simulateDeployment();
