const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/github-repos', (req, res) => {
  superagent.get('https://api.github.com/user/repos?type=owner')
    .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .then( responseData => {
      res.send(responseData.body);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
