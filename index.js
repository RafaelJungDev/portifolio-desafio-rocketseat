const url = `https://api.github.com/users/RafaelJungDev`

const reposUrl = `https://api.github.com/users/RafaelJungDev/repos`

function getGitHubData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  fetch(reposUrl)
    .then(response => response.json())
    .then(data => {
      projectOneTitle.textContent = data[0].name
      projectOneDesc.textContent = data[0].name
      starNumber.textContent = data[0].stargazers_count
      branchNumber.textContent = data[0].forks_count
    })
}

getGitHubData()
