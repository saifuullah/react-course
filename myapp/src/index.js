import React from "react";
import ReactDOM from 'react-dom'



// CSS
import './index.css' 


const firstBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title : 'I Love You to the Moon and Back',
  author : 'Amelia Hepworth'

};

const secondBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._SX355_BO1,204,203,200_.jpg',
  title : 'The 48 Laws of Power Paperback',
  author : 'Robert Greene'

};

function BookList() {
  return ( 
  <section className='booklist'> 
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

  </section>
   );
}


const Book = ({ img, title, author}) => {
  return (
     <article className="book"> 
     <img src={img} width='300px' height='400px'/>
     <h1>{title}</h1>
     <h4>{author}</h4>

  </article>
  );
};




ReactDOM.render(<BookList/>, document.getElementById('root'));