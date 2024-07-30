import css from './App.module.css';

export default function App() {

  // const handelClick = (event) => {
  //   console.log('Hello world!!!')
  //   console.log(event)
  // }

  const handelClick = (massage) => {
    console.log('Hello world!!!');
    console.log(massage);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log('Hello form submit');
  };

  return (
    <div className={css.container} >
      <h1>State in React</h1>
      <hr />
      {/* <button onClick={handelClick}>Click me!</button> */}
      <button onClick={() => handelClick('This is arg')}>Click me!</button>

      <form onSubmit={handelSubmit}>
        <button>Submit</button>
      </form>
    </div>
  )
}
