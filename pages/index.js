import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h6>root@Yanliang:~# whoami</h6>
          <h6>ssh -L 8080:localhost:80 user@remote_host</h6>
          <h6>nmap -sS -sV -p- -T4 8.8.8.8</h6>
          <h6>nc -lvp 4444 -e /bin/bash</h6>
          <h6>tcpdump -i eth0 -nn port 22</h6>
          <h6>ncat --ssl -v example.com 443</h6>
          <h6>sqlmap -u "http://example.com/?id=1" --dbs</h6>
          
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Chan Yanliang</h1>
            <h6 className={styles.bio}>Cybersecurity Enthusiast</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
