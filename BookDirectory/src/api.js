
const router= require('express').Router();
const books=require("./directory");


let booksDirectory=books;

router.get('/books',function(req,res){
    // res.send(booksDirectory)

    res.send("hello")
});

router.get('/books/:id',function(req,res){
    const{id}=req.params

    const book=booksDirectory.find(x=>x.isbn===id);
    if (!book) return res.status(404).send("Book doesn't exist");
else{
    res.send(book)
}
})
  

router.post('/books',function(req,res){
    const{
    title,
    isbn,
    pageCount,
    authors,
    categories

    }=req.body

    const bookExist=booksDirectory.find(x=>x.isbn===isbn);
    if (!bookExist) return res.status(404).send("Book exist");

    const book={
        title,
        isbn,
        pageCount,
        authors,
        categories
        
    }

    booksDirectory.push(book);
    res.send(book);




});


module.exports = router;