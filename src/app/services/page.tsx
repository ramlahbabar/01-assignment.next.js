

import styles from "../services/services.module.css";
import Link from "next/link"
export default function Services(){
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Service Page</h1>
            <br></br>
<h2>This is service page</h2>
<br></br>
           <Link href="/">Home</Link>
           
           <br></br>
           <br></br> 
           <Link href="services/appDevelopment">AppDevelopment</Link>
           
           <br></br>
           <br></br>
           <Link href="services/websiteDevelopment">Website_Development</Link>
            
        </div>
    )
}