import styles from "../websiteDevelopment/website.module.css"
import Link from "next/link"


export default function Website_Development(){
    return(
        <div className={styles.container}>
            <br></br>
            <h1 className={styles.header}>website Development</h1>
            <br></br>
            <h2>This is website development page</h2>
<br></br>
            <Link href="/services">Services</Link>
            
        </div>
    )
}