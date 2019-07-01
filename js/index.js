// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('get', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  let repoList = `<ul>${repos.map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;

  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(anchor) {
  anchor.dataset.repo
}
