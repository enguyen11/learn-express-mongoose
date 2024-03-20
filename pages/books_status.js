let BookInstance = require('../models/bookinstance');


exports.show_all_books_status = function(res) {
  //TODO
  BookInstance.find({'status': {$eq: 'Available'}})
  return res.send([{BookInstance}]);
}

