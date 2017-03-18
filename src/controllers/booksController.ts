import { Get, Route } from "tsoa";
import { Book } from "../models/book";
import { BooksDB } from "../utils/booksDB";

@Route('books')
export class BooksController {
    @Get()
    public getBooks(): Promise<Book[]> {
        let connectionString: string = process.env.MONGODB_CONNECTIONSTRING ? process.env.MONGODB_CONNECTIONSTRING : "mongodb://localhost/booksDB";

        let booksDB: BooksDB = new BooksDB(connectionString);
        return new Promise<Book[]>( (resolve, reject) => {
            booksDB.getBooks().then(books => {
                 resolve(books);
             }).catch(error => {
                 reject(error);
             });
        });
    }
}