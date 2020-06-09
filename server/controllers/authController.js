const authController = {};

/**
 * @middleware  Get Access Token from cookies
 * @desc    Saves access token from cookies to res.locals.accessToken
 */
authController.getAccessToken = (req, res, next) => {
  const { accessToken } = req.cookies;
  res.locals.accessToken = accessToken;
  next();
};

// /**
//  * @middleware  Get User Id from cookies
//  * @desc    Saves access token from cookies to res.locals.accessToken
//  */
// authController.getUserId = (req, res, next) => {
//   const { userId } = req.cookies;
//   res.locals.userId = userId;
//   return next();
// };

// /**
//  * @middleware  Get Username by userId
//  * @desc    Looks up user by userId in users table. Saves username to res.locals.username
//  */
// authController.getUsername = (req, res, next) => {
//   const userId = res.locals.userId;

//   const query = `SELECT githandle FROM users WHERE id='${userId}';`;
//   db.query(query).then((data) => {
//     res.locals.username = data;
//   });
// };

authController.saveAccessToken = (req, res, next) => {
  const { user } = req;

  res.cookie("accessToken", user.accessToken, { maxAge: 360000 });
  res.cookie("userId", user.userId, { maxAge: 360000 });
  next();
};

module.exports = authController;

// POST https://github.com/login/oauth/access_token
