// import "./About.css"
// function About(){
//     return(
//         <h1>Welcome to About Page!</h1>
//     )
// };
// export default About;

import "./About.css"
export default function About() {
  return (
    <div className="page">
      <h1>About Our Company</h1>

      <p>
        We are a modern digital solutions company focused on building fast,
        scalable, and visually stunning web applications using React and
        cutting-edge technologies. Our mission is to empower businesses and
        individuals by providing reliable, innovative, and high-quality
        software solutions.
      </p>
      <img src={"https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?semt=ais_hybrid&w=740&q=80"}></img>

      <p>
        Since our founding, we have worked with startups, enterprises,
        freelancers, and creators worldwide. Our team consists of passionate
        developers, designers, strategists, and problem-solvers who believe in
        creating meaningful digital experiences.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To become a global leader in digital innovation by delivering
            creative, secure, and high-performance solutions that help
            businesses scale faster and smarter.
          </p>
        </div>

        <div className="card">
          <h3>Our Mission</h3>
          <img src={"https://www.shutterstock.com/image-illustration/our-mission-symbol-concept-word-260nw-2573825691.jpg"}/>
          <p>
            Our mission is to provide reliable technology solutions that improve
            productivity, enhance user experiences, and drive long-term business
            growth.
          </p>
        </div>

        <div className="card">
          <h3>Our Values</h3>
          <p>
            We believe in innovation, integrity, teamwork, excellence, and
            continuous learning. Our goal is to build trust and deliver value
            in everything we create.
          </p>
        </div>
      </div>

      <p>
        Over the years, we have successfully delivered multiple projects
        including business websites, e-commerce platforms, SaaS dashboards,
        mobile applications, and custom automation tools. We continuously evolve
        to stay updated with modern frameworks and best industry practices.
      </p>

      <p>
        If you are looking for a team that values creativity, performance,
        and reliability, we are here to help bring your ideas to life.
      </p>
    </div>
  );
}
