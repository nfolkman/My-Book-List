const Book = require('../models/Book')

module.exports = {
    getBooks: async (req,res)=>{
        console.log(req.user)
        try{
            const bookItems = await Book.find({userId:req.user.id})
            // const itemsLeft = await Book.countDocuments({userId:req.user.id,completed: false})
            res.render('books.ejs', {books: bookItems, /*left: itemsLeft,*/ user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addBook: async (req, res)=>{
        try{
            await Book.create({title: req.body.bookTitle, status: 'plan to read', userId: req.user.id})
            console.log('Book has been added!')
            res.redirect('/books')
        }catch(err){
            console.log(err)
        }
    },
    changeStatus: async (req, res)=>{
      //Need to fix try block
        try{
            await Book.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Status changed')
            res.json('Status changed')
        }catch(err){
            console.log(err)
        }
    },
      changePage: async (req, res)=>{
        //Need to fix try block
        try{
            await Book.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                page: req.body.page
            })
            console.log('Page changed')
            res.json('Page changed')
        }catch(err){
            console.log(err)
        }
    },
    deleteBook: async (req, res)=>{
        //Need to fix console.log and try block
        console.log(req.body.todoIdFromJSFile)
        try{
            await Book.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Book deleted')
            res.json('Book deleted')
        }catch(err){
            console.log(err)
        }
    }
}    