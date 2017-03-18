/* tslint:disable */
import { ValidateParam } from 'tsoa';
import { Controller } from 'tsoa';
import { BooksController } from './../controllers/booksController';

const models: any = {
    "Book": {
        "name": { "required": true, "typeName": "string" },
        "authorName": { "required": true, "typeName": "string" },
    },
};


/* tslint:disable:forin */
export function RegisterRoutes(app: any) {
    app.get('/books',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new BooksController();


            const promise = controller.getBooks.apply(controller, validatedArgs);
            let statusCode = undefined;
            if (controller instanceof Controller) {
                statusCode = (controller as Controller).getStatus();
            }
            promiseHandler(promise, statusCode, response, next);
        });


    function promiseHandler(promise: any, statusCode: any, response: any, next: any) {
        return promise
            .then((data: any) => {
                if (data) {
                    response.json(data);
                    response.status(statusCode || 200);
                } else {
                    response.status(statusCode || 204);
                    response.end();
                }
            })
            .catch((error: any) => next(error));
    }

    function getValidatedArgs(args: any, request: any): any[] {
        return Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return ValidateParam(args[key], request.query[name], models, name)
                case 'path':
                    return ValidateParam(args[key], request.params[name], models, name)
                case 'header':
                    return ValidateParam(args[key], request.header(name), models, name);
                case 'body':
                    return ValidateParam(args[key], request.body, models, name);
                case 'body-prop':
                    return ValidateParam(args[key], request.body[name], models, name);
            }
        });
    }
}