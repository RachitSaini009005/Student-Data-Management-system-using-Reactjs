// import { logDOM } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { Navigation } from 'react-router-dom'
import { useLocation} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import style from "./stddetails.module.css"
const Stddetails = () => {
  let[content,setContent]=useState([])
//   let navigate = useNavigation()
useEffect(()=>{
    axios.get("http://localhost:3000/student")
    .then((response)=>{
        console.log(response);
       setContent(response.data)
       console.log("DATA GOT");
    })
    .catch(()=>{
        console.log("DATA NOT GOT");
    })
},[])

let deleteData=(abc)=>{
    axios.delete(`  http://localhost:3000/student/${abc}`)
    .then(()=>{
      
        console.log("DATA GOT DELETED");
     })
     .catch(()=>{
         console.log("DATA NOT GOT DELETED");
     })
}
return(
    <div id={style.bg}>
       {content.map((x)=>{
           return(
            <div id={style.tablebg}>
                <table id={style.table}>
                    <tr>
                        <th>
                            STUDENT NAME :{x.name}
                        </th>
                    </tr>

                    <tr>
                        <td>SUBJECT1:</td>
                        <td>{x.sub1}</td>
                    </tr>

                    <tr>
                        <td>SUBJECT2:</td>
                        <td>{x.sub2}</td>
                    </tr>

                    <tr>
                        <td>SUBJECT3:</td>
                        <td>{x.sub3}</td>
                    </tr>

                    <tr>
                        <td>SUBJECT4:</td>
                        <td>{x.sub4}</td>
                    </tr>

                    <tr>
                        <td>ADDRESS</td>
                        <td>{x.address}</td>
                    </tr>

                    <tr><td>PHONE NUMBER</td>
                        <td>{x.Phone}</td>
                    </tr>

                    <tr>
                        <td>

                            <button onClick={()=>{deleteData(x.id)}}>DELETE</button>
                            
                            
                            <Link to={`/edit/${x.id}`}>EDIT</Link>
                        </td>
                    </tr>
                </table>
            </div>
        )
    })}
    </div>
)
} 

 
export default Stddetails