import BookList from '../BookList/BookList';
import Mailbox from '../Mailbox/Mailbox';
import Product from '../Product/Product';
import Card from '../Card/Card';
import Alert from '../Alert/Alert';

//import css from './App.module.css';

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

export default function App() {

  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product name="Some product" price={0.99} />

      <h2>Message</h2>

      <Mailbox username='Andry' messages='nbubkblh' />
      <Mailbox username='Kate' messages='' />
      
      <h2>Book List</h2>
      <BookList books={favouriteBooks} />

      <h2>props.children</h2>
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <h2>Attribute Style </h2>
      <p
        style={{
          margin: 8,
          padding: "12px 16px",
          borderRadius: 4,
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Please update your email!
      </p>

      <h2>Dynamic Stile</h2>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    
    </>
  );
}
