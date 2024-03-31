'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../Component/Navbar.js"
import Blog from "../Component/Blog.js"
import Footer from "../Component/Footer.js"
import { useRouter } from "next/navigation"
import data from "../Component/data.js"

export default function Home() {
const router=useRouter()

const handleClick=(myid)=>{
router.push(`blog/${myid-1}`)
}



  return (
    <div className={styles.body}>
<Navbar/>
<div>
  {
    data.map((val)=><Blog title={val.title} img={val.img} desc={val.desc} id={val.id} key={val.id} handleclick={(id)=>handleClick(id)}/>)


}
</div>
<Footer/>

    </div>
  );
}
