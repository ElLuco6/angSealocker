const Board = require ('../model/board');
 

  
   exports.findBoard = (req, res, next) => {
    Board.find()
      .then(board => res.status(200).json(board))
      .catch(error => res.status(400).json({ error }));
  };  