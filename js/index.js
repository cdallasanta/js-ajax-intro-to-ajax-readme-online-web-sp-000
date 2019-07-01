// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('get', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories() {
  let repoList = '<ul>';
  for (var i = 0; i < this.response.length; i++){
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';

  document.getElementById("repositories").innerHTML = repoList;
}
