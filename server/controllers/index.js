var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    //grab what we need from the req 
      models.messages.get(function(err, result){
        if(err) {
          throw err
        } else {
          res.send(result);
        }
      })  
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, (err) => {
        if (err) {
          console.log(err)
          res.writeHead(404);
          res.end();
        } else {
          res.writeHead(200);
          res.end();
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('testing a get request to users');
    }, 
    post: function (req, res) {
      res.send('testing a post request to users');
    }
  }
};

