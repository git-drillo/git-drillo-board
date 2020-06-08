const fetch = require("node-fetch");

const projectController = {};

// add something to check if a repo exists andd send a response back to the user. res.json()

/**
 * @middleware  GET /users/:username/repos from github api
 * @desc    Gets a list of respositories accessible to the user and saves it to res.locals.repos
 */
projectController.getRepos = (req, res, next) => {
  const { accessToken } = res.locals;
  const { username } = res.locals;

  fetch(`https://api.github.com/users/${username}/repos`, {
    method: "get",
    params: { access_token: accessToken },
  })
    .then((res) => res.json())
    .then((data) => {
      res.locals.allRepos = [...data];
    })
    .catch((err) => console.log("ERROR: ", err));
  return next();
};

/**
 * @middleware  Checks if the given repository exists in the user's list of accessible repositories
 * @desc    Saves whether or not repo exists in list of accesible repos to res.locals.repoExists
 */
projectController.doesRepoExist = (req, res, next) => {
  // res.locals.repoExists - boolean
  const { repo: targetRepo } = req.body;
  const { allRepos: repoList } = res.locals;

  // loop through array of repos. check if targetRepo appears as repo name
  for (let i = 0; i < repoList.length; i++) {
    if (repoList[i].name == targetRepo) {
      // set repoExists to true
      res.locals.repoExists = true;
      // save repo object in res.locals.targetRepo
      res.locals.targetRepo = true;
    } else {
      // if the repo doesn't exist,
      res.locals.repoExists = false;
      status(400).json({ isCreated: isCreated });
    }
  }
  return next();
};

/**
 * @middleware  Get the owner of a particular repository
 * @desc    Saves the repository owner for a repository accessible to the current user
 */
projectController.getRepoOwner = (req, res, next) => {
  // save the owner from the res.locals.targetRepo into res.locals.owner
  const { targetRepo } = res.locals;

  const owner = targetRepo.owner.login;
  res.locals.owner = owner;

  return next();
};

/**
 * @middleware  GET /repos/:owner/:repo/collaborators from github api
 * @desc    Saves the collaborators on a given project in an array on res.locals.collaborators
 */
projectController.getCollaborators = (req, res, next) => {
  const { accessToken } = res.locals;
  const { owner } = res.locals;
  const { selectedRepo: repo } = res.locals;
  const collaborators = [];

  fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators`, {
    method: "get",
    params: { access_token: accessToken },
  })
    .then((res) => res.json())
    .then((data) => {
      // loop through the data and save all values for login to an array
      for (let i = 0; i < data.length; i++) {
        const githandle = data[i].login;
        if (githandle !== owner) {
          collaborators.push(githandle);
        }
      }
      res.locals.collaborators = collaborators;
    })
    .catch((err) => console.log("ERROR: ", err));
};
