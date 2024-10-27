import styles from "../contact/contact.module.css";
import Link from "next/link";




export default function Contact(){
    return(
        <div className={styles.container}>

            <h1 className={styles.header}>Contact Page</h1>
            <br></br>
            <br></br>
            <h2> This is my contact page</h2>
            <br></br>

            <Link href="/">Home</Link>
            
            <br></br>
            <br></br>
            <Link href="/about">About</Link>
            
            <br></br>
            <br></br>
            <Link href="/services">Services</Link>
            
        </div>
    )
}