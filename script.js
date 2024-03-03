async function fetchAndFilterPosts() {
    const titleKeyword = document.getElementById('titleInput').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        const filteredPosts = posts.filter(post => post.title.includes(titleKeyword));

        if (filteredPosts.length > 0) {
            filteredPosts.forEach(post => {
                outputDiv.innerHTML += `<p><strong>Title:</strong> ${post.title}</p>`;
                outputDiv.innerHTML += `<p><strong>Body:</strong> ${post.body}</p>`;
                outputDiv.innerHTML += '<hr>';
            });
        } else {
            outputDiv.innerHTML = '<p>No matching posts found.</p>';
        }
    } catch (error) {
        console.error('Error fetching or filtering posts:', error);
        outputDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}