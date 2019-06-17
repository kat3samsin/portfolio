const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/kat3samsin/kat3samsin.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)