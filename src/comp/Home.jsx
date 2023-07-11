import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
const Home = () => {
  return (
    <div>
        <section id={style.nav}>
            <Link to="/student">CREATE STUDENT</Link>
            <Link to="/details">STUDENT DETAILS</Link>
        </section>
    </div>
  )
}

export default Home