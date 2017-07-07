import {indexRouter} from './routes/index';
import {createServerApp} from "./app-helper";
// import users from './routes/users';

export function initAppHandler() {
    let app = createServerApp();

    // todo. set IOC to test
    indexRouter(app);
    // app.use('/users', users);

    forwardToErrorHandler(app);
    errorHandler(app);

    return app;
}

function forwardToErrorHandler(app) {
    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

function errorHandler(app) {
    app.use((err, req, res) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        let status = err.status || 500;
        let stack = err.stack || "throws new error";
        res.render('error', {status: status, stack: stack});
    });
}