function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let complete = `completed!`;
        if(this.read == false) complete =  `not yet completed!`;
        let str = `${this.title} by ${this.author}, ${this.pages} pages, ${complete}`;
        return str;
    }
}

const b1 = new Book('A', 'B', 15, true);
console.log(b1.info());