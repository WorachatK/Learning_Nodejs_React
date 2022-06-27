import { useState,useEffect } from 'react'
import './formComponent.css'
import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props)=>{

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event)=>{
        let title = event.target.value
        setTitle(title)
    }

    const inputAmount = (event)=>{
        let amont = event.target.value
        setAmount(amont)
    }
    
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData ={
            id:uuidv4(),
            title:title,
            amount:Number(amount),
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }

    useEffect(()=>{
        const checkData =title.trim().length>0
        if(amount!=='0' && amount!=='' && checkData){
            setFormValid(true)
        }
        else {
            setFormValid(false)

        }
    },[title,amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน <+รายรับ,-รายจ่าย>" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className='btn' type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent