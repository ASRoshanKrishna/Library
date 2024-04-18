let myLibrary = [];
let index = 0;
const b1 = new Book(index++, 'The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(b1);
const b2 = new Book(index++, 'Harry Potter', 'J. K. Rowling', 223, true);
myLibrary.push(b2);
const b3 = new Book(index++, 'Da Vinci Code', 'Dan Brown', 689, false);
myLibrary.push(b3);

const form = document.querySelector('#fo');
const cards = document.querySelector('.cards');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addnew");
const closeButton = document.querySelector("#close");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    event.preventDefault();
    form.reset();
    dialog.close();
});

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
        let complete = `Not Read`;
        if(this.read == true) complete =  `Read`;
        let inhtml = 
                    `<p><h3>${this.title}</h3></p>
                    <p>by - ${this.author}</p>
                    <p>pages - ${this.pages}</p>
                    <div>
                        <button id="switch" type="button" onclick="toggle(${this.index})">${complete}</button>
                    </div>
                    <div>
                        <button id="del" type="button" onclick="removeCard(${this.index})">Remove</button>
                    </div>`;
        return inhtml;
    }
}

function addBookToLibrary() {
    const getTitle = document.querySelector('#title');
    const getAuthor = document.querySelector('#author');
    const getPages = document.querySelector('#pages');
    const getRead = document.querySelector('#read').checked;

    if(getTitle.value != "Book Name" && getAuthor.value != "Author Name" && getPages.value != 0){
        const book = new Book(index++, getTitle.value, getAuthor.value, getPages.value, getRead);

        myLibrary.push(book);
        display();
        event.preventDefault();
        form.reset();
        dialog.close();
    }
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
    let a = 0;
    let rc = myLibrary[ival];
    myLibrary = myLibrary.filter(function(item) {
        if(item !== rc){
            item.index = a++; 
            return item;
        }
    })
    index = a;
    display();
}

function toggle(ival) {
    myLibrary[ival].tog();
    display();
}

display();