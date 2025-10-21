const fs = require('node:fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  // if (id > tours.length)
  if (!tour) {
    return res.status(200).json({
      status: 'Fail',
      message: 'Invalid',
    });
  }
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestedTime,
    reqestedAt1: req.requestedTime1,
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) throw err;
      res.status(201).json({
        status: 'success',
        data: {
          newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: `< Tour not updated yet >`,
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
