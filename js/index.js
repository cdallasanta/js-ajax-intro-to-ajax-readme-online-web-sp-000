// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', )
  req.open('get', 'https://api.github.com/users/octocat/repos');
  req.send();
}
