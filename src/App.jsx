import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [courseList, setCourseList] = useState([]);
  const [credit, setCredit] = useState(0);
  const [amount, setAmount] = useState(0);

  const courseCart = course => {
    const newCourseList = [...courseList, course];
    setCourseList(newCourseList);
  }

  const creditHour = time =>{
    setCredit(credit+time)
  }

  const TotalAmount = price => {
    setAmount(amount+price)
  }

  console.log(courseList);

  return (
    <>
      <Header></Header>
      <div className='lg:flex mx-auto container gap-6'>
        <Courses courseCart={courseCart} creditHour={creditHour} TotalAmount={TotalAmount}></Courses>
        <Cart credit={credit} amount={amount} courseList={courseList}></Cart>
      </div>
    </>
  )
}

export default App
