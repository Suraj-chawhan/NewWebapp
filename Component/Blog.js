
import Image from 'next/image';
import Head from 'next/head';
import styles from '../app/page.module.css';

export default function Blog({img,title,desc,id,handleclick}) {

  return (
    <div key={id} onClick={()=>handleclick(id)}>
      <div className={styles.container}>
        <div className={styles.blogdetails}>
          <Image src={`/${img}`} alt={`blog ${id}`} className={styles.blogimg} width={300} height={200} />
          <h2 className={styles.blogtitle}>{title}</h2>
          <p className={styles.blogpara}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
