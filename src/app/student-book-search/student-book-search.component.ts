import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import {Router} from '@angular/router';
import {Book} from '../book';
@Component({
  selector: 'app-student-book-search',
  templateUrl: './student-book-search.component.html',
  styleUrls: ['./student-book-search.component.scss']
})
export class StudentBookSearchComponent implements OnInit {
  name:string;
  id:string;
  showAllBooks:boolean=false;
  bookNotAvailable:boolean=false;
  bookAvailable:boolean=false;
  noCopiesAvaiable:boolean=false;
  book1=new Book();
  constructor(private router: Router,private api:ApiCommunicationService) { }
  books:Book[];
  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.api.getBooks().then(
      book => {
        this.noCopiesAvaiable=false;
        this.bookNotAvailable=false;
        this.bookAvailable=false;
        this.showAllBooks=true;
        
        this.books=book;
        console.log(book);
      },
      err=>{
        console.log(err);
      }
    );

  }

  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

  submit(id:string):void
  {
    this.api.getBook(this.id).then(
      book => {
        this.book1=book;
        //console.log(this.book1)
        if(book.copies>0)
        {
          this.showAllBooks=false;
          this.noCopiesAvaiable=false;
          this.bookNotAvailable=false;
          this.bookAvailable=true;
          //alert("The book is available");
        }
      
       else
       {
          this.showAllBooks=false;
          this.bookNotAvailable=false;
          this.bookAvailable=false;
         this.noCopiesAvaiable=true;
        //alert("All the copies of this book are issued");
       }
      
   },
   err => {
     //alert("The book is not available in library");
     this.showAllBooks=false;
     this.bookAvailable=false;
    this.noCopiesAvaiable=false;
     this.bookNotAvailable=true;
  }
);
  }

}
