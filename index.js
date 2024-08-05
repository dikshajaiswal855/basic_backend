require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData={
    "login": "dikshajaiswal855",
    "id": 111669785,
    "node_id": "U_kgDOBqfyGQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/111669785?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dikshajaiswal855",
    "html_url": "https://github.com/dikshajaiswal855",
    "followers_url": "https://api.github.com/users/dikshajaiswal855/followers",
    "following_url": "https://api.github.com/users/dikshajaiswal855/following{/other_user}",
    "gists_url": "https://api.github.com/users/dikshajaiswal855/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dikshajaiswal855/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dikshajaiswal855/subscriptions",
    "organizations_url": "https://api.github.com/users/dikshajaiswal855/orgs",
    "repos_url": "https://api.github.com/users/dikshajaiswal855/repos",
    "events_url": "https://api.github.com/users/dikshajaiswal855/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dikshajaiswal855/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Diksha Jaiswal",
    "company": null,
    "blog": "https://diksha-portfolio-8vpg-git-main-diksha-jaiswals-projects.vercel.app/",
    "location": "Noida Uttar Pradesh",
    "email": null,
    "hireable": null,
    "bio": "#ingeniousCoder.😎😎",
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-08-21T02:33:58Z",
    "updated_at": "2024-08-03T11:18:16Z"
    }

app.get('/twitter', (req, res) => {
    res.send('Helloo World!')
  })

app.get('/youtube', (req, res) => {
    res.send('<h1> Helloo World!</h1>')
  })

  app.get('/github', (req, res) => {
    res.json(githubData)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})