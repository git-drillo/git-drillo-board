const db = require('../db/postgres.js');

const dbController = {
  /**
   * Get a user's github handle from the userId cookie
   */
  async getUserFromUserIdCookie(req, res, next) {
    console.log('in db controller cookies')
    try {
      const id = req.cookies.userId;
      const query = `
      SELECT * FROM users
      WHERE id = $1;`;
      console.log(query)
      console.log(id)
      const result = await db.query(query, [id]);
      console.log('RESULT OF QUERY', result)
      res.locals.githandle = result.rows[0].githandle;
      return next();
    } catch ({ message }) {
      res.status(400).json({
        log: 'Error in db.getUserFromUserIdCookie',
        message,
      });
    }
  },
  getUserIdFromUser(req, res, next) {},
};

module.exports = dbController;
