const db = require('./../db/');

const postData = (req) => {
  let cqlCommand = `INSERT INTO test.testtable (id, text) VALUES(${Number(req.id)}, '${req.text}')`;
  db.execute(cqlCommand, (err, data) => {
    if (err) {
      console.log('ERROR CQL', err);
    } else {
      console.log("SUCCESS CQL");
      console.log('this is data in db.query', data);
    }
  })
};

const getData = () => {
  return new Promise((resolve, reject) => {
    db.execute('SELECT * FROM test.testtable', (err, response) => {
      if (err) {
        reject(err)
      }
      resolve(response.rows)
    })
  })
};

module.exports = {
  postData,
  getData
};
