
import Link from "next/link"
import styles from "../AppDevelopment/appDevelopment.module.css"

export default function AppDevelopment(){
    return(
        <div className={styles.container}>
            <br>
            </br>

            <h1 className={styles.header}>App Development Page</h1>

           <Link href="/services">services</Link>
            
        </div>
    )
}