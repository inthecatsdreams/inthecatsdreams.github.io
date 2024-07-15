document.addEventListener("DOMContentLoaded", function() {
    const username = "inthecatsdreams";
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    fetch(reposUrl)
        .then(response => response.json())
        .then(repos => {
            const reposDiv = document.getElementById("repos");
            repos.forEach(repo => {
                const repoDiv = document.createElement("div");
                repoDiv.className = "repo";
                repoDiv.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description || "No description available"}</p>
                    <p><a href="${repo.html_url}" target="_blank">View Repository</a></p>
                `;
                reposDiv.appendChild(repoDiv);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});