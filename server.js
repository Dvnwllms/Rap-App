const express = require("express");
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  }

require('./passport')(app);

app.use(require('./routes'));


app.use((error, req, res, next) => {
    console.error(error);
    res.json({
      error
    })
  });

require('./middleware/mongoose')()
  .then(() => {
    app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
  })
  .catch(err => {
    console.error('Unable to connect to mongo.')
    console.error(err);
  });