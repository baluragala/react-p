function* github() {
  let org = yield fetch('https://api.github.com/orgs/facebook').then(res => res.json());
  console.log(org);
  let repos = yield fetch(org.repos_url).then(res => res.json());
  console.log(repos);
  let contribs = yield fetch(repos[0].contributors_url).then(res => res.json());
  console.log(contribs);
}

var iterator = github();

iterator.next().value.then(org => {
  iterator.next(org).value.then(repos => {
    iterator.next(repos).value.then(contribs => console.log(contribs))
  })
});