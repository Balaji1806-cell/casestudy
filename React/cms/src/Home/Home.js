// import "./Home.css"
// function Home(){
//     return(
//         <>
//        <center>
//         <img src="https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg" width={300} height={300}></img>
//         </center>
//          <h1 className="home">Welcome to Home Page!</h1>
//          <div>
//             <p>
//                 Division in Home Page
//             </p>
//          </div>
// </>
//     )
// };
// export default Home;


import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Build Stunning Websites with React</h1>
          <p>
            Create fast, modern, and scalable web apps using React with
            beautiful UI components and animations.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1527430253228-e93688616381" alt="Hero" />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fast Performance</h3>
            <p>Optimized React apps that load fast and run smoothly.</p>
          </div>
          <div className="feature-card">
            <h3>Modern UI</h3>
            <p>Beautiful and professional user interface designs.</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Built with best security practices to protect data.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>About Our Platform</h2>
          <p>
            We provide high-quality React solutions for businesses and developers.
            Our goal is to make web development faster, easier, and more powerful.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="About" />
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">Web Development</div>
          <div className="service-card">UI/UX Design</div>
          <div className="service-card">SEO Optimization</div>
          <div className="service-card">Mobile Apps</div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Amazing service and beautiful UI designs!"</p>
            <h4>— John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"Fast, reliable, and professional React developers."</p>
            <h4>— Sarah Smith</h4>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Start Your React Journey Today</h2>
        <button className="cta-btn">Join Now</button>
      </section>

    
      <footer className="footer">
        <p>© 2026 MyApp. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
