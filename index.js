require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

const githubData = {
  "login": "rustammansuri1117",
  "id": 200468362,
  "node_id": "U_kgDOC_Lnig",
  "avatar_url": "https://avatars.githubusercontent.com/u/200468362?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rustammansuri1117",
  "html_url": "https://github.com/rustammansuri1117",
  "followers_url": "https://api.github.com/users/rustammansuri1117/followers",
  "following_url": "https://api.github.com/users/rustammansuri1117/following{/other_user}",
  "gists_url": "https://api.github.com/users/rustammansuri1117/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rustammansuri1117/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rustammansuri1117/subscriptions",
  "organizations_url": "https://api.github.com/users/rustammansuri1117/orgs",
  "repos_url": "https://api.github.com/users/rustammansuri1117/repos",
  "events_url": "https://api.github.com/users/rustammansuri1117/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rustammansuri1117/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Java Backend Developer | Core Java | Spring Boot | Hibernate/JPA | Microservices | REST APIs | Spring Security | DSA | MySQL | Docker | Git & GitHub",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 8,
  "created_at": "2025-02-23T08:12:51Z",
  "updated_at": "2026-09-24T16:28:23Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github' , (req , res)=>{
    res.json(githubData)
})

app.get('/login' , (req ,res) => {
    res.send('<h2>kindly login here</h2>')
})

app.get('/signup' , (req , res)=>{
    res.send('hey signup with historian timeline')
})

app.get('/chai' , (req , res)=>{
    res.send(123)
})

app.get('/code' , (req , res)=>{
    res.send('code and chai')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})