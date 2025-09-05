import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'yanliangchan.me',
    href: 'https://yanliangchan.me',
  },
  {
    social: 'email',
    link: 'yanliangchan@gmail.com',
    href: 'mailto:yanliangchan@gmail.com',
  },
  {
    social: 'github',
    link: 'Yanliangchan',
    href: 'https://github.com/Yanliangchan',
  },
  {
    social: 'linkedin',
    link: 'Chan Yanliang',
    href: 'https://www.linkedin.com/in/yanliangchan/',
  },
  {
    social: 'twitter',
    link: 'yanliangchan',
    href: 'https://www.twitter.com/yanliangchan',
  },
  {
    social: 'instagram',
    link: 'yanliangchan',
    href: 'https://www.instagram.com/yanliangchan',
  },

  {
    social: 'telegram',
    link: 'Yan1iangchan',
    href: 'https://t.me/yan1iangchan',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
