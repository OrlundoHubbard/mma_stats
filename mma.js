async function fetchMMAData() {
    try {
        const response = await fetch('/api/mma');
        const data = await response.json();
    }
}