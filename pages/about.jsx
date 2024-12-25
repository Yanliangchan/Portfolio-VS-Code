const AboutPage = () => {
  return (
    <>
      <header className="container">
        <h1>Yanliang</h1>
        <p>A Aspiring Purple Team with a passion in programming</p>
      </header>

      <section className="about container">
        <img src="https://media.licdn.com/dms/image/v2/C5603AQE8wL8fuWadyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659631959812?e=1740009600&v=beta&t=U8jWbVUu3SHZ75lO0M-QoIQUdw5Dntn0ihL4mLgr-ec" alt="Yanliang's Profile Picture" />
        <div>
          <h2>About Me</h2>
          <p>Hello 👋 I'm Yanliang, a year 3 student studying a diploma in cybersecurity and digital forensics at Ngee Ann Polytechnic. I have hands-on experience in penetration testing and have actively participated in various Capture The Flag (CTF) competitions.</p>
          <br></br>
          <p>Im a cybersecurity enthusiast with a passion for exploring and securing technology who enjoy web development from time to time. I enjoys giving back to society through volunteering with TJYN and playing a role in ISC2 Singapore Chapter's Youth Wing.</p>
        </div>
      </section>

<br></br>
      <section className="container">
        <h2>Experiences / Roles</h2>
        <div className="card">
          <h3>CSA - Intern</h3>
          <p>September 2024 - March 2025</p>
          <p>Classified</p>
        </div>
        <div className="card">
          <h3>NK Robotics - Coding and Robotics Educator</h3>
          <p>September 2023 - Present</p>
          <p>Leading the technical team in organizing cybersecurity workshops and events. Developed and reviewed over 100 challenges for CTF competitions.</p>
        </div>
        <div className="card">
          <h3>ISC² Singapore Chapter - Secretarial Role</h3>
          <p>January 2023 - Present</p>
          <p>Planning and coordinating events, while managing internal operations to ensure smooth and efficient execution</p>
        </div>
        <div className="card">
          <h3>NullSec - Head of Technology</h3>
          <p>April 2023 - September 2024 </p>
          <p>Leading the technical team in organizing cybersecurity workshops and events. Developed and reviewed over 100 challenges for CTF competitions.</p>
        </div>
      </section>

      <section className="container">
        <h2>Certificates</h2>
        <div className="grid">
          <div className="card">
            <h3>Network Defense Essentials (NDE)</h3>
            <p>Issued by EC-Council</p>
            <p>Issued: April 2024</p>
            <p>
              Credential ID:{" "}
              <a 
                href="https://codered.eccouncil.org/certificate/54d4433a-a0ad-4a30-a6bf-7740ddcfe89d?finalAssessment=true&type=1&logged=false" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Credential ID: 319729
              </a>
            </p>
            <p>Skills: Network Security</p>
          </div>
          
          <div className="card">
            <h3>Ethical Hacking Essentials (EHE)</h3>
            <p>Issued by EC-Council</p>
            <p>Issued: October 2023</p>
            <p>Credential ID: 256839</p>
            <p>Skills: Ethical Hacking</p>
          </div>
          
          <div className="card">
            <h3>Google Cybersecurity</h3>
            <p>Issued by Google</p>
            <p>Issued: October 2023</p>
            <p>Credential ID: 6BYFA5WNU5MT</p>
            <p>Skills: Cybersecurity</p>
          </div>
          
          <div className="card">
            <h3>Network Defense</h3>
            <p>Issued by Cisco</p>
            <p>Issued: May 2022</p>
            <p>
              Credential ID:{" "}
              <a 
                href="https://www.credly.com/badges/a416972c-a7f5-4767-9e01-902ce8a855ba?source=linked_in_profile" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Credly Verified
              </a>
            </p>
            <p>Skills: Cybersecurity</p>
          </div>

          <div className="card">
            <h3>Ethical Hacker</h3>
            <p>Issued by Cisco</p>
            <p>Issued: Pending</p>
            <p>
              Credential ID:{" "}
              <a 
                href="www.blank.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Credly Verified
              </a>
            </p>
            <p>Skills: Ethical Hacking</p>
          </div>

          <div className="card">
            <h3>Enterprise Security Management</h3>
            <p>Issued by Palo Alto Networks</p>
            <p>Issued: Nov 2024</p>
            <p>
              Credential ID:{" "}
              <a 
                href="https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                AH3ltTed8u
              </a>
            </p>
            <p>Skills: Network Security</p>
          </div>
        </div>
      </section>




      <style jsx>{`
        body {
          font-family: 'Source Sans Pro', sans-serif;
          background-color:currentColor;
          color: #eee;
          margin: 0;
          padding: 0;
        }

        .container {
          width: 90%;
          margin: 0 auto;
          padding: 0.2rem 0;
        }

        .container a {
          color: white; 
          text-decoration: none; /* Removes underline */
        }

        .container a:visited {
          color: inherit; /* Ensures visited links stay the same color */
        }

        .container a:hover {
          color: grey; /* Keeps the hover state the same */
        }

        .container a:active {
          color: inherit; /* Ensures active links do not change color */
        }
        h1, h2, h3 {
          color: var(--accent-color);
        }

        .about {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          margin-top: 1rem;
          align-items: center;
        }

        .about img {
          max-width: 150px;
          border-radius: 10px;
          margin: 0; /* Remove any default margin */
          padding: 0; /* Remove any default padding */
          vertical-align: middle; /* Ensures the image aligns vertically in the middle */
        }

        .about p {
          line-height: 1.6;
          width: 80%
        }

        .about img {
          max-width: 250px; 
          border-radius: 10px;
        }

        .card {
          background: rgba(0, 0, 0, 0.2); /* Darkens the current color slightly */
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem 0;
        }


        .card h3 {
          margin-top: 0;
        }

        footer {
          text-align: center;
          margin-top: 3rem;
          padding: 1rem 0;
          background-color: #1a1a1a;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 1px; /* This reduces the vertical spacing */
          grid-column-gap: 20px; /* You can keep the column gap as is or reduce it as well */
        }
        
        .about.container {
          display: flex;
          align-items: flex-start; /* Aligns items at the start of the container */
          margin-top: 20px; /* Adjust as needed */
        }

        .about.container img {
          border-radius: 10px; /* Keeps the rounded corners for the image */
          margin-right: 20px; /* Space between the image and text */
        }

        .about.container div {
          margin-top: 10px; /* Adjust this value to bring the text upwards */
        }

        .about.container h2 {
          margin-bottom: 10px; /* Adds spacing between the "About Me" heading and the paragraph */
        }

      `}</style>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;