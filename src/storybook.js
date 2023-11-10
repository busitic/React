import React from 'react'

const Book = (props) =>{
 const {img,Title,Author} = props.book;
 const clickHandler = (e) =>{
  console.log(e)
  console.log(e.target)
  alert('hello-world')
 }
 const complexExample = (Author) => {
  console.log(Author)
 }
 return (
    <article className='book' onMouseOver={() => {
      console.log(Author)
    }}>
    <img src={img} alt=''/>
    <h1 onClick={()=> console.log(Title)}>{Title}</h1>
    <h4>{Author}</h4>
    <button type="button"onClick={clickHandler} >
      reference example
    </button>
    <button type='button' onClick={() => complexExample(Author)}> more complex example 

    </button>
  </article>
  );
};



export default Book
