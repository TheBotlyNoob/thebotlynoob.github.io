(async function(){
    var currentGitHub, data = await fetch("https://api.github.com/users/TheBotlyNoob/repos")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    for (var i = 0 ; i < data.length ; i++) {
        currentGitHub = JSON.parse(JSON.stringify(data[i]));
        $("#githubRepos").append(`<span><a class="githubLink" href="${currentGitHub.html_url}" target="_blank">${currentGitHub.name}</span><br>`);
    }
})();
