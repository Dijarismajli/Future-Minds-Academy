import React, { useState } from 'react';

function Parent() {

  const [Name, setName] = useState("Dijar Ismajli")
  const data = 'Hello there '
  return (
    <>
      <Child message={data} name={Name} />

    </>
  );
}


function Child(props) {
  return (
    <>
      <div> {props.message}</div>
      <hr />
      <div> {props.name}</div>
    </>

  );
}

export default Parent;



//

const fruitInfo = [

  {
    fruit: "strawbarry",
    id: "2",
    color: "red",
    taste: "sweet",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuybc.gov.bc.ca%2Fcommodities%2Fstrawberries%2F&psig=AOvVaw2vr1HU57ct9BOFawDrAJnd&ust=1747413065252000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjamJnzpY0DFQAAAAAdAAAAABAE"
  },

  {
    fruit: "banana",
    id: "5",
    color: "yellow",
    taste: "sweet",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuybc.gov.bc.ca%2Fcommodities%2Fstrawberries%2F&psig=AOvVaw2vr1HU57ct9BOFawDrAJnd&ust=1747413065252000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjamJnzpY0DFQAAAAAdAAAAABAE"



  },

  {
    fruit: "orange",
    id: "3",
    color: "orange",
    taste: "sweet",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuybc.gov.bc.ca%2Fcommodities%2Fstrawberries%2F&psig=AOvVaw2vr1HU57ct9BOFawDrAJnd&ust=1747413065252000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjamJnzpY0DFQAAAAAdAAAAABAE"



  }]


function fruitsList() {
  return (

    <>
      <h1>Parent Component</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {fruits.map((fruitInfo) => <CardChildComponent fruits={fruitInfo} key={fruitInfo.id} />)}

      </div>

    </>
  )
}