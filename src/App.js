import React from 'react';
import './App.css';
import Customer from './components/Customer';

var customers=[
  {
  'id': 1,
  'image': 'http://placeimg.com/64/64/any/1',
  'name':"노선경",
  'birthday':"950211",
  'gender':"여자",
  'job':"디자이너"
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/any/2',
  'name':"마틴시",
  'birthday':"920101",
  'gender':"남자",
  'job':"음악가"
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/any/3',
  'name':"무무얌",
  'birthday':"970512",
  'gender':"여자",
  'job':"개발자"
}
]

function App() {
  return (
    <div>{
      customers.map(c => {
        return (
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
          )
        })
      }
   </div>
  )}
        

export default App;
