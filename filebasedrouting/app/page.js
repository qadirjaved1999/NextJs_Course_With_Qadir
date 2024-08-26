"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const flexContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '50px'
  };
  const navigate = useRouter();
  const navigateFun = (name) => {
    console.log("========>>>>>>>",name)
    navigate.push(name)
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2>Welcom to Next Js</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      {/* What is Linking */}
      <div className="linking" style={flexContainerStyle}>
        <h3><Link href="about">Go to About Us Page</Link></h3>
        <h3><Link href="auth">Go to Auth Us Page</Link></h3>
        <h3><Link href="contact">Go to Contact Us Page</Link></h3>
      </div>
       {/* What is Navigation */}
      <div className="linking" style={flexContainerStyle}>
        {/* <button onClick={()=>navigate.push("/about")}>Go to About</button>
        <button onClick={()=>navigate.push("/auth")}>Go to Auth</button>
        <button onClick={()=>navigate.push("/contact")}>Go to contact</button> */}
         <button className="btn" onClick={()=>navigateFun("/about")}>Go to About</button>
        <button className="btn" onClick={()=>navigateFun("/contact")}>Go to contact</button>
        <button className="btn" onClick={()=>navigateFun("/auth")}>Go to Auth</button>

      </div>
    </main>
  );
}
