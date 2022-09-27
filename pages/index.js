import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../public/1.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>ThanHtutZaw - thz</title>
        <meta name="description" content="Web Dev" />
        <meta name='keywords' content="thanhtutzaw - Frontend Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.cardsContainer}>

          <li className={[styles.card, styles.card1].join(" ")}>
            <Image className={styles.image} width={200} height={220} layout='fixed' src={image} alt="profile"></Image>
          </li>
          <li className={[styles.card, styles.card2].join(" ")}>2</li>
          <li className={[styles.card, styles.card3].join(" ")}>3</li>
          <li className={[styles.card, styles.card4].join(" ")}>
            <div className={[styles.d4_face, styles.d4_front].join(" ")}>React</div>
            <div className={[styles.d4_face, styles.d4_back].join(" ")}>Next</div>
            <div className={[styles.d4_face, styles.d4_right].join(" ")}>SCSS</div>
            <div className={[styles.d4_face, styles.d4_left].join(" ")}>TypeScript</div>
            <div className={[styles.d4_face, styles.d4_top].join(" ")}>Firebase</div>
            <div className={[styles.d4_face, styles.d4_bottom].join(" ")}>Nest</div>


            {/* <li className={[ styles.card4].join(" ")}>d</li> */}
            {/* <li className={[ styles.card5].join(" ")}>ccc</li> */}
          </li>





        </ul>
      </main>
    </>


  )
}
