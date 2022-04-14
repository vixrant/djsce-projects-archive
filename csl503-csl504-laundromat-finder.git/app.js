const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const { schema, signInUsers, signUpUsers } = require('./helpers/index');
const { verifyAuthentication } = require('./middlewares/index');
const { port } = require('./config/index');

app.set('json spaces', 4);

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// morgan
app.use(morgan('dev'));

// helmet
app.use(helmet());
app.use(helmet.noCache());

// cors
app.use(cors());

// GraphQL playground
app.get('/playground', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/templates/graphQLPlayground.html'));
});

// routes
app.post('/signup', signUpUsers);

app.post('/signin', signInUsers);

app.use('/graphql', verifyAuthentication, graphqlHTTP((req, res, graphQLParams) => ({
    schema,
    context: { user: res.locals.user },
    graphiql: false,
  }))
);

// 404 Resource not found
app.use('*', (req, res, next) => {
  return res.status(404).send({
    error: {
      status: res.statusCode,
      message: 'Resource not found',
    },
  });
});

// custom error handler
app.use((err, req, res, next) => {
  return res.send({
    error: {
      status: 500 || err.status,
      message: err.message,
    },
  });
});

if (typeof module !== 'undefined' && !module.parent) {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}
