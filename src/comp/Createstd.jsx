import React, { useState } from 'react'
import axios from 'axios'
import style from './createstd.module.css'


const Createststd = () => {
  let[name,setName]=useState("")
  let[sub1,setSub1]=useState("")
  let[sub2,setSub2]=useState("")
  let[sub3,setSub3]=useState("")
  let[sub4,setSub4]=useState("")

  // let[total,setTotal]=useState("")
  let[address,setAddress]= useState("")
  let[Phone,setPhone]=useState("")


  let nameData=(x)=>{
    setName(x.target.value)
  }

  let sub1Data=(x)=>{
    setSub1(x.target.value)
  }

  let sub2Data=(x)=>{
    setSub2(x.target.value)
  }

  let sub3Data=(x)=>{
    setSub3(x.target.value)
  }
  
  let sub4Data=(x)=>{
    setSub4(x.target.value)
  }

  let addressData=(x)=>{
    setAddress(x.target.value)
  }

  let PhoneData=(x)=>{
    setPhone(x.target.value)
  }

  // let totalData=(x)=>{
  //   setTotal((parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)/400)*100)
  // }

  let formhandle=()=>{
    let multidata={name,sub1,sub2,sub3,sub4,address,Phone}
    axios.post("http://localhost:3000/student",multidata)
    .then((response)=>{
      console.log("STUDENT IS CREATED");
      console.log(response.data);
    })
    .catch(()=>{
      console.log("STUDENT NOT CREATED");
    })
  }
  return(
    <div id={style.form}>
      <h1>CREATE STUDENT FORM</h1>
      <label htmlFor="">NAME</label>
      <input className={style.t} type="text" onChange={nameData}  value={name}/> <br />
      <br />
       
      <label htmlFor="">SUBJECT1</label>
      <input className={style.t} type="text" onChange={sub1Data}  value={sub1}/>
      <br />
      <br />

      <label htmlFor="">SUBJECT2</label>
      <input className={style.t} type="text" onChange={sub2Data}  value={sub2}/>
      <br />
      <br />

      <label htmlFor="">SUBJECT3</label>
      <input className={style.t} type="text" onChange={sub3Data}  value={sub3}/>
      <br />
      <br />

      <label htmlFor="">SUBJECT4</label>
      <input className={style.t} type="text" onChange={sub4Data}  value={sub4}/>
      <br />
      <br />

      <label htmlFor="">Address</label>
      <input className={style.t} type="text" onChange={addressData}  value={address}/>
      <br />
      <br />

      <label htmlFor="">PHONE NUMBER</label>
      <input className={style.t} type="text" onChange={PhoneData}  value={Phone}/>
      {/* <label htmlFor="">Total</label>
      <input className={style.t} type="text"  onChange={totalData} value={total}/> */}
      {/* <h1>{total}</h1> */}
      <br />
      <br />

      <button onClick={formhandle}>SUBMIT</button>
    </div>
  )
  
}

export default Createststd