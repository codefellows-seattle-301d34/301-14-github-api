// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
  url: '/github-repos',
  method: 'GET'
})
  .then(
    data => {
      data.forEach(repo => 
        $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`));
      console.log(data);
    },
    err => console.error(`${err.status} ${err.statusText} is the way my stuff is broken.`));
