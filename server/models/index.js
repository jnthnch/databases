var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // execute the query against db the get the messages so that we can return it in the response
      // db.query("INSERT INTO rooms (name) VALUES ('lobby'); INSERT INTO users (name) VALUES ('Mr Fred'); INSERT INTO messages (user_id, room_id, text ) VALUES (1, 1, 'This should be returned is all goes according to plan');", function(err) {
      //   if (err) {
      //     throw callback(new Error ('failed to query the db'));
      //   } else {
          db.query("SELECT * FROM messages;", function(err, results) {
            if (err) {
              callback(new Error ('failed to query the db'));
            } else {
              callback(null, results);
            }
          });
        // }
      // });
    }, // a function which produces all the messages
    post: function (req, callback) {
      console.log(req);
      db.query('INSERT INTO users (name) VALUES (?);', [JSON.stringify(req.body.username)],(err) => {
        if (err) {
          callback(new Error (`what the heck is username: ${JSON.stringify(req.body)}`));
        } else {
          db.query('INSERT INTO rooms (name) VALUES (?);', [req.roomname], (err, roomnameResult) => {
            if (err) {
              callback(new Error ('COULD NOT INSERT ROOM INTO ROOMS TABLE'));
            } else {
              db.query('INSERT INTO messages (user_id, room_id, text) VALUES ((select id from users where name = ?), (select id from rooms where name = ?), ?);', [usernameResult, roomnameResult, req.text], (err) => {
                if (err) {
                  callback (new Error ('COULD NOT INSERT MESSAGE INTO MESSAGES'));
                } else {
                  callback(null);
                }
              })
            }
          })
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


