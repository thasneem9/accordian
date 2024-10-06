import React from 'react'
import '../styleTest.css'
import { useState } from 'react'
import data from '../data.js'
const Accordian = () => {
    const [selectedItems,setSelectedItems]=useState([])
    const [stick,setStick]=useState(false)
    const [openAll,setOpenAll]=useState(false)



    const handleClick=(id)=>{
        if(!stick){
        //when cliked: if it was already exiting in array itmeans it was clicked already, hence nullify it to close else add it to display
        setSelectedItems(selectedItems.includes(id) ? []: [id])
        }else{
//if stick is on: add the slectdid, if clicked agian(id==included inslectedid) then filetr it outt>
if(selectedItems.includes(id)){
setSelectedItems(selectedItems.filter((ids)=>ids!==id))
}else{
    setSelectedItems((prev)=>[...prev,id])

}

        }

    }
    const handleOpen=()=>{
        setOpenAll(!openAll)
    }
  return (
    <>
    <h1>
        Accordian Project
    </h1>
    <div className='buttons'>
        <button onClick={()=>setStick(!stick)}>{stick? 'stick : on':'stick:off'}</button>
        <button onClick={handleOpen}>{openAll ? 'close all':'open all'}</button>
    </div>
   
    {data.map((item)=>(
        <div className='container' onClick={()=>handleClick(item.id)}>
            <div className='items'>
                <h2>{item.question}</h2>
              {(selectedItems.includes(item.id) || openAll ) &&   (<p>{item.answer}</p>)}
              {(item.image && (selectedItems.includes(item.id)|| openAll) )&& <img src={`./${item.id}.png`}></img>}
            </div>


        </div>
    ))}

    </>
  )
}

export default Accordian