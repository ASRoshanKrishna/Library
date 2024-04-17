let myLibrary = [];
let index = 0;
const b1 = new Book(index++, 'A', 'B', 15, true);
myLibrary.push(b1);
const b2 = new Book(index++, 's', 'd', 5, true);
myLibrary.push(b2);
const b3 = new Book(index++, 'q', 'w', 1, false);
myLibrary.push(b3);

const cards = document.querySelector('.cards');

function Book(index, title, author, pages, read) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.tog = function(){
        read = !read;
        this.read = read;
    }
    this.info = function() {
        let complete = `not yet completed!`;
        if(this.read == true) complete =  `completed!`;
        let inhtml = 
                    `<p><h2>${this.title}</h2></p>
                    <p>by - ${this.author}</p>
                    <p>pages - ${this.pages}</p>;
                    <div>
                        <button onclick="removeCard(${this.index})">Remove</button>
                    </div>
                    <div>
                        <button onclick="toggle(${this.index})">${complete}</button>
                    </div>`;
        return inhtml;
    }
}

function addBookToLibrary() {
    const getTitle = document.querySelector('#title');
    const getAuthor = document.querySelector('#author');
    const getPages = document.querySelector('#pages');
    const getRead = document.querySelector('#read').checked;

    const book = new Book(index++, getTitle.value, getAuthor.value, getPages.value, getRead);

    myLibrary.push(book);
    display();
    event.preventDefault();
    const form = document.querySelector('#fo');
    form.reset();
}

function display() {
    let child = cards.lastElementChild;
    while(child){
        cards.removeChild(child);
        child = cards.lastElementChild;
    }
    for(let obj in myLibrary){
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML += myLibrary[obj].info();
        cards.appendChild(card);
    }
}

function removeCard (ival) {
    console.log(ival);
    let a = 0;
    let rc = myLibrary[ival];
    myLibrary = myLibrary.filter(function(item) {
        if(item !== rc){
            item.index = a++; 
            return item;
        }
    })
    display();
}

Object.setPrototypeOf(toggle, Book);

function toggle(ival) {
    myLibrary[ival].tog();
    display();
}

display();