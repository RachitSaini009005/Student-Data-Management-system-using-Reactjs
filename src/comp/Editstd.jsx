// import React from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Stddetails from './Stddetails'
import style from './createstd.module.css'


const Editstd = () => {
    
    let[name,setName]=useState("")
    let[sub1,setSub1]=useState("")
    let[sub2,setSub2]=useState("")
    let[sub3,setSub3]=useState("")
    let[sub4,setSub4]=useState("")

  // let[total,setTotal]=useState("")
    let[address,setAddress]= useState("")
    let[Phone,setPhone]=useState("")

    let{index}=useParams()
    // let navigate =useNavigate()

    // navigate("/stddetails")
    useEffect(()=>{
        
        axios.get(`http://localhost:3000/student/${index}`)
        .then((response)=>{
            console.log(response);
           setName(response.data.name)
           setSub1(response.data.sub1)
           setSub2(response.data.sub2)
           setSub3(response.data.sub3)
           setSub4(response.data.sub4)
           setAddress(response.data.address)
           setPhone(response.data.Phone)
          console.log("data got for editing");
        })
        // let {navigate} = useNavigation()
// navigate("<Stddetails")

        .catch(()=>{
            console.log("DATA NOT GOT EDITING");
        })
    },[])

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
    
    
      let formhandle=()=>{
        let multidata={name,sub1,sub2,sub3,sub4,address,Phone}
        axios.put(`http://localhost:3000/student/${index}`,multidata)
        .then((response)=>{
          console.log("STUDENT IS updated");
        //   console.log(response.data);
        })
        .catch(()=>{
          console.log("STUDENT NOT updated");
        })
      }
      return(
        <div id={style.form}>
            <h1>EDIT FORM</h1>
          <label htmlFor="">NAME</label>
          <input  className={style.t} type="text" onChange={nameData}  value={name}/>
          <br /><br />
          <label htmlFor="">SUBJECT1</label>
          <input className={style.t} type="text" onChange={sub1Data}  value={sub1}/>
          <br /><br />
          <label htmlFor="">SUBJECT2</label>
          <input className={style.t} type="text" onChange={sub2Data}  value={sub2}/>
          <br /><br />
          <label htmlFor="">SUBJECT3</label>
          <input className={style.t} type="text" onChange={sub3Data}  value={sub3}/>
          <br /><br />
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

export default Editstd
