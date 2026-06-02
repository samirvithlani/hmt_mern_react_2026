import React from 'react'
import { useParams } from 'react-router-dom'

export const BookFilter = () => {
    //<Route path='/bookfilter/:price' element = {<BookFilter/>}></Route>
    const price = useParams().price
    //500
    const books = [
  {
    id: 1,
    name: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    thumbnail: "https://picsum.photos/200/300?random=1",
    pages: 208,
    rating: 4.7,
    language: "English",
    publisher: "HarperOne",
    publishedYear: 1988,
    genre: "Fiction",
    isbn: "9780061122415",
    stock: 25,
    description: "A philosophical novel about following your dreams."
  },
  {
    id: 2,
    name: "Atomic Habits",
    author: "James Clear",
    price: 499,
    thumbnail: "https://picsum.photos/200/300?random=2",
    pages: 320,
    rating: 4.9,
    language: "English",
    publisher: "Avery",
    publishedYear: 2018,
    genre: "Self Help",
    isbn: "9780735211292",
    stock: 18,
    description: "Practical guide to building good habits and breaking bad ones."
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 350,
    thumbnail: "https://picsum.photos/200/300?random=3",
    pages: 336,
    rating: 4.8,
    language: "English",
    publisher: "Plata Publishing",
    publishedYear: 1997,
    genre: "Finance",
    isbn: "9781612680194",
    stock: 30,
    description: "Personal finance classic focused on wealth creation."
  },
  {
    id: 4,
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 275,
    thumbnail: "https://picsum.photos/200/300?random=4",
    pages: 320,
    rating: 4.6,
    language: "English",
    publisher: "The Ralston Society",
    publishedYear: 1937,
    genre: "Motivation",
    isbn: "9781585424337",
    stock: 15,
    description: "Success principles collected from influential people."
  },
  {
    id: 5,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    price: 450,
    thumbnail: "https://picsum.photos/200/300?random=5",
    pages: 256,
    rating: 4.8,
    language: "English",
    publisher: "Harriman House",
    publishedYear: 2020,
    genre: "Finance",
    isbn: "9780857197689",
    stock: 22,
    description: "Timeless lessons on wealth, greed, and happiness."
  }
];

const foundBooks = books.filter((book)=>book.price>= price)
//price -->500 [] -->array -->len -->0
//price -->300 -->[{},{}] -->len -->2
console.log("found object",foundBooks)
  return (
    <div style={{textAlign:"center"}}>
        <h1>No of Book found is {foundBooks.length}</h1>
        {
            foundBooks.length == 0  && <h4>No book found with price {price}</h4>
        }
            
        <h1>BookFilter - {price}</h1>
        {
            foundBooks.map((fb)=>{
                return <li>{fb.name}</li>
            })
        }
    </div>
  )
}
