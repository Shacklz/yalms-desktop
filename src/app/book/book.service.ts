import { Injectable } from '@angular/core';
import { IAbstractBook } from './IAbstractBook';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private readonly abstractBookUrl = 'http://localhost:8080/abstractBook/add';

    constructor(private http: HttpClient) { }

    public createAbstractBook(abstractBook: IAbstractBook): Boolean {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.http.post(this.abstractBookUrl, abstractBook)
            .subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                },
                error => {
                    console.log("Error", error);
                }
            );
        return true;
    }
}

