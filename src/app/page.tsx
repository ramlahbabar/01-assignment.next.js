import styles from "../app/page.module.css";
import Link from "next/link"


export default function home() {
  return(
    <div className={styles.container} >

      <h1 className={styles.header}>Home Page</h1>
      <br></br>
      <h2>  Welcome to my Home Page</h2>
      <br></br>
<Link href="/about">About</Link>
      <br></br>
      <br></br>
      <Link href="/contact">Contact</Link>
      
      <br></br>
      <br></br>
      <Link href="/services">Services</Link>
      
    
    </div>
  )
}

