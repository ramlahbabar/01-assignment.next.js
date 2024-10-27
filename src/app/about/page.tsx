import styles from "../about/about.module.css";
import Link from "next/link";

 

export default function About(){
    return(
        <div className={styles.container}>

            <h1 className={styles.header}>About Page</h1>
            <br></br>
            <h2>Read about us from here  </h2>
            <br></br>

           <Link href="/">Home</Link>
            
            <br></br>
            <br></br>
            <Link href="/contact">Contact</Link>
            
            <br></br>
            <br></br>
            <Link href="/services">Services</Link>
            
        </div>
    )
}