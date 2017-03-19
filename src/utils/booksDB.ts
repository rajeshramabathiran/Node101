import * as util from "util";
import * as mongodb from "mongodb";
import { MongoClient } from "mongodb";
import { Book } from "../models/Book";

export class BooksDB {
    private mongodbClient: MongoClient;
    private db: mongodb.Db;
    private connectionString: string;

    constructor(connectionString: string){
        this.connectionString = connectionString;
        this.mongodbClient = new MongoClient();
    }

    public connectDB(): Promise<mongodb.Db> {
        return new Promise<mongodb.Db>((resolve, reject) => {
            if(this.db) {
                return this.db;
            }
            
            this.mongodbClient.connect(this.connectionString, (error: mongodb.MongoError, _db: mongodb.Db) => {
                if(error) {
                    reject (error);
                }
                this.db = _db;
                resolve(this.db);
            })
        });
    }


    public getBooks(): Promise<Book[]>
    {
        return this.connectDB().then(db => {
            let collection: mongodb.Collection = db.collection('books');
            return new Promise<Book[]>((resolve, reject) => {
                let books: Book[] = [];
                collection.find().toArray().then(docs => {
                    docs.map((doc: Book) => {
                        let book: Book = new Book();
                        book.name = doc.name;
                        book.authorName = doc.authorName;
                        books.push(book);
                    })
                    resolve(books);
                }).catch(error => {
                    reject(error);
                })
            })
        });
    }

    public insertBook(book: Book) : Promise<Book> {
        return this.connectDB().then(db => {
            let collection: mongodb.Collection = db.collection('books');
            return new Promise<Book>((resolve, reject) => {
                collection.insert(book).then(result => {
                    resolve(book);    
                }).catch(error => {
                    reject(error);
                });
            })
        });
    }

    public Close(): void {
        this.db.close();
    }
}