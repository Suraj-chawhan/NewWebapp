import styles from "../app/page.module.css"
import Link from "next/link"
export default function  Navbar(){

return(
<div className={styles.navbar}>
    <h1 className={styles.navbarHeading}>Suraj Chawhan</h1>
<ul className={styles.navul}>
    <li ><Link href="/" className={styles.link}>HOME</Link></li>
    <li><Link  href="/about" className={styles.link}>ABOUT</Link></li>
    <li><Link  href="/contact" className={styles.link}>CONTACT</Link></li>
    <li><Link  href="/disclaimer" className={styles.link} >DISCLAIMER</Link></li>

</ul>
 </div>
);


}