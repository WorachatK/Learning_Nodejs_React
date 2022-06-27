import './App.css';
import Transaction from './components/transection'; 
import FormComponent from './components/formComponent';
import { useState,useEffect, } from 'react';
import DataContext from "./data/DataContext"
import ReportComponent from "./components/ReportComponent"
import {BrowserRouter as Router,Route, Routes,Link} from "react-router-dom";


function App() {

  const Title =()=><h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
  const Description =()=><p>บันทึกข้อมูลในชีวิตประจำวัน</p>


  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense}}>
      
      <div className='container'>
        <Router>
            <div>
                <Title/>
                <div>
                    <ul className='horizontal-menu'>
                        <li>
                            <Link to='/'>ข้อมูลบัญชี</Link>
                        </li>
                        <li>
                            <Link to='/insert'>บันทึกข้อมูล</Link>
                        </li>
                    </ul>
                </div>
                <Description/>
            </div>

          <Routes>
            <Route exact path='/' element={<ReportComponent/>}/>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/><Transaction items={items}/> </>}/>
          </Routes>
          
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
