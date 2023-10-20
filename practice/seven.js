// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
class Book{
  constructor(title,author,publication_year){
    this.title = title;
    this.author = author;
    this.publication_year = publication_year;
  }
display_book_details(){
  console.log(`Title of the book ${this.book}`);
  console.log(`Author of the book ${this.author}`);
  console.log(`Publication  of the book ${this.publication_year}`);
}
}

class Ebook extends Book{
  constructor(title,author,publication_year,book_price){
    super(title,author,publication_year)
    this.book_price = book_price;
  }
  display_book_details(){
    console.log(`Title of the book ${this.book}`);
    console.log(`Author of the book ${this.author}`);
    console.log(`Publication  of the book ${this.publication_year}`);
    console.log(`Price of the book ${this.book_price}`);
  }
}

let details = new Ebook("Atomic Habits","James Clear", 2001 ,20000)
console.log(details)
