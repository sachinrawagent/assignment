const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('./db.json');
const middlewares = jsonserver.defaults({
    static: 'build',
});

server.use(middlewares);
server.use(router);
server.use(
    jsonserver.rewriter({
        '/add-city/*': '/$1',
    })
);



server.listen(process.env.PORT || 8080, () => {
    console.log('JSON Server is running');
}
);
