// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('get', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  let repoList = '<ul>';
  for (var i = 0; i < repos.length; i++){
    repoList += '<li>' + repos[i]['name'] + '</li>';
  }
  repoList += '</ul>';

  document.getElementById("repositories").innerHTML = repoList;
}
