

import Image from "next/image"
import Link from 'next/link';
import Footer from "../../../Component/Footer.js"
import Navbar from "../../../Component/Navbar.js"
import data from "../../../Component/data.js"
import styles from '../../page.module.css'

export default function BlogDetails({params}) {
let id=parseInt(params.id)

  return (
    <div>
      <Navbar/>
    <div className={styles.blogDIScontainer}>
   
      <div className="blogDISentry">
        <Image src={`/${data[id].img}`} alt={data[id].title} className={styles.blogDISimage} width={400} height={200} />
        <h1 className={styles.blogDISH1}>{data[id].title}</h1>
        <p className={styles.blogDISP}>{data[id].content}</p>
       
      </div>
     
    </div>
    <Footer/>
    </div>
  );
}
