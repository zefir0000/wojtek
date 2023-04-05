const app = require('./app');

app.set('port', process.env.PORT || 8123);

const server = app.listen(app.get('port'), () => {
    console.info(`Listening on ${ server.address().port }`);
});
