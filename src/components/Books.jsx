import React from "react";
import { Link } from "react-router-dom";

export const Books = () => {
  const books = [
    {
      id: 1,
      name: "The Alchemist",
      price: 299,
      author: "Paulo Coelho",
      thumbnail: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      name: "Atomic Habits",
      price: 499,
      author: "James Clear",
      thumbnail: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      name: "Rich Dad Poor Dad",
      price: 350,
      author: "Robert Kiyosaki",
      thumbnail: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      name: "Think and Grow Rich",
      price: 275,
      author: "Napoleon Hill",
      thumbnail: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      name: "The Psychology of Money",
      price: 450,
      author: "Morgan Housel",
      thumbnail: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      name: "Deep Work",
      price: 399,
      author: "Cal Newport",
      thumbnail: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      name: "Ikigai",
      price: 320,
      author: "Hector Garcia",
      thumbnail: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      name: "Zero to One",
      price: 420,
      author: "Peter Thiel",
      thumbnail: "https://picsum.photos/200/300?random=8",
    },
  ];
  return (
    <div style={{ textAlign: "center" }} className="container">
      <h1>BOOKS</h1>
      <Link to={`/bookfilter/1000`}>FILTER</Link>
      <div className="row">
        <div className="col">
          {books.map((book) => {
            return (
              <div className="card h-10 shadow-sm">
                <img style={{height:100,width:200}}
                  src={book.thumbnail}
                  className="card-img-top"
                  alt={book.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.author}
                  </h6>

                  <p className="card-text">{book.description}</p>

                  <p className="fw-bold">₹{book.price}</p>

                  <Link to={`/bookdetail/${book.id}`} className="btn btn-primary">Detail</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
