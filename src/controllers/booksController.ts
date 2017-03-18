import { Get, Route } from "tsoa";
import { Book } from "../models/book";

@Route('books')
export class BooksController {
    @Get()
    public getBooks(): Promise<Book[]> {
        let books: Book[] = [
            new Book("Harry Potter", "J.K. Rowling")
        ];
        return Promise.resolve(books);
    }
}