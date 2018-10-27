import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { IAbstractBook } from './IAbstractBook';

@Component({
    selector: 'yalms-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    constructor(private bookService: BookService) { }

    private abstractBook: IAbstractBook = { bookName: '', bookAuthor: '', bookISBN10: '', bookISBN13: '' };

    ngOnInit() {
    }

    onKeyBookTitle(event: any) {
        this.abstractBook.bookName = event.target.value;
    }

    onKeyBookAuthor(event: any) {
        this.abstractBook.bookAuthor = event.target.value;
    }

    onKeyBookISBN10(event: any) {
        this.abstractBook.bookISBN10 = event.target.value;
    }

    onKeyBookISBN13(event: any) {
        this.abstractBook.bookISBN13 = event.target.value;
    }

    onSubmitAbstractBook() {
        this.bookService.createAbstractBook(this.abstractBook);
    }


}
