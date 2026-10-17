import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import Gallery from '@/components/Gallery'
import MediaShowcase from '@/components/MediaShowcase'
import ScrollTop from '@/components/ScrollTop'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <div className="curtain" aria-hidden="true"><span>Gaana Meera</span></div>
      <SiteHeader />
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="copy">
              <h1><span>Master the Art of</span> <span>Carnatic Music</span></h1>
              <p className="lead">Structured Carnatic music classes for students of all ages, taught in Canada since 2009.</p>
              <div className="cta"><a className="btn gold" href="#programs">Explore Classes</a><a className="btn line" href="#about">Meet the Guru</a></div>
            </div>
          </div>
        </div>
      </header>
      <div className="stats wrap"><div><b>2009</b><span>Teaching Carnatic music in Canada</span></div><div><b>Grades 1–7</b><span>A clear, structured path</span></div><div><b>All ages</b><span>Children through adults</span></div></div>
      <main>
        <section id="about" className="wrap">
          <h2 className="t">About the Guru</h2>
          <div className="guru">
            <div className="portrait"><div className="ph"><Image src="/images/guru.jpg" alt="Smt. Vanathy Gowreesan, founder and principal guru" width={672} height={896} /></div><div className="cap"><strong>Smt. Vanathy Gowreesan</strong><span>Founder and principal guru</span></div></div>
            <div className="bio">
              <p>Smt. Vanathy Gowreesan is the founder and principal guru of Gaana Meera School of Fine Arts, passionately dedicated to teaching Carnatic music in Canada since 2009. She combines a strong traditional foundation with a structured and engaging teaching approach, making Carnatic music accessible to students of all ages.</p>
              <p>Vanathy was introduced to Carnatic music by her mother, <a href="https://meeravillavarayar.com" target="_blank" rel="noopener noreferrer">Dr. Meera Villavarayar</a>, one of Sri Lanka’s foremost music educators and scholars. Growing up in a culturally rich environment, she studied at Hindu Ladies College, Colombo (Saiva Mangayar Kalakam), where she actively participated in Carnatic music and Pannisai competitions, winning prizes at the all-island level. She served as a school prefect and president of the Fine Arts Union, showcasing her dedication to music and leadership from an early age.</p>
              <p>Her training included vocal music under her mother and Karunakaran Thilaiampalam, Veena under Rathai Kumarathas, and Bharatanatyam under Vasuki Mugunthen. After completing school, she moved to Chennai to pursue a B.Sc. in Electronic Media at M.O.P. Vaishnav College for Women (affiliated with the University of Madras). During her time in Chennai, she underwent advanced Carnatic music training under <a href="https://www.sruti.com/artist/dr-ma-bhageerathi" target="_blank" rel="noopener noreferrer">Dr. M.A. Bhageerathi</a> (daughter of the legendary violinist M.S. Anantharaman) and continued her Bharatanatyam training under Roja Kannan. She also successfully completed the Lower and Higher Government Technical Examinations in Music during this time.</p>
              <p>After migrating to Canada, Vanathy further pursued her passion by completing B.Music and M.Music through Annamalai University’s Distance Education Program, training under Shri Venkatesh Natarajan and Shri GRS Murthy. She regularly attends music workshops and masterclasses to enhance her knowledge and stay current with new pedagogical approaches, ensuring that her students benefit from the highest standard of music education.</p>
              <p>In addition to her musical pursuits, she holds a Diploma in Contemporary Web Design and works professionally as a full-stack developer. This unique combination of technical expertise and artistic knowledge allows her to bring a structured, innovative, and student-focused approach to her teaching.</p>
            </div>
          </div>
        </section>

        <section id="why" className="wrap">
          <h2 className="t">Why families learn with us</h2>
          <div className="why">
            <div><h3>A clear path</h3><p>Grades 1 to 7 give every student a roadmap, so you always know what comes next.</p></div>
            <div><h3>Taught by a trained guru</h3><p>Lessons come from a musician trained in vocal, Veena and Bharatanatyam, with a B.Music and M.Music.</p></div>
            <div><h3>Theory and practice together</h3><p>Students sing and learn the theory behind each raga and rhythm.</p></div>
            <div><h3>Videos and music games</h3><p>The Academy Hub will bring informational videos and interactive games for practice between classes.</p></div>
            <div><h3>Stay in touch with your guru</h3><p>The Academy Hub will help students and parents connect with their gurus.</p></div>
            <div><h3>For every age</h3><p>Children, teenagers and adults all learn at a pace that suits them.</p></div>
          </div>
        </section>
        <section id="programs" className="alt"><div className="wrap">
          <h2 className="t">Programs</h2>
          <p className="sub">Carnatic vocal lessons organised by grade. Contact us to find the right starting level.</p>
          <div className="levels">
            <div className="lv"><div className="g">Grades 1–2</div><h3>Foundation</h3><p>For students new to Carnatic music.</p><ul><li>Sarali varisai and basic exercises</li><li>Swaras and sruthi</li><li>Simple songs</li></ul></div>
            <div className="lv"><div className="g">Grades 3–4</div><h3>Intermediate</h3><p>For students who have the basics.</p><ul><li>Varnams and keerthanas</li><li>Raga and tala theory</li><li>Voice culture</li></ul></div>
            <div className="lv"><div className="g">Grades 5–7</div><h3>Advanced</h3><p>For students ready for deeper repertoire.</p><ul><li>Krithis and compositions</li><li>Improvisation</li><li>Performance practice</li></ul></div>
          </div>
        </div></section>
        <section id="steps" className="wrap">
          <h2 className="t">How to get started</h2>
          <ol className="steps">
            <li><h3>Get in touch</h3><p>Tell us about the student and what you hope to learn.</p></li>
            <li><h3>Meet your guru</h3><p>Talk through your level and goals to choose a grade.</p></li>
            <li><h3>Join a class</h3><p>Settle on a weekly class time and begin.</p></li>
            <li><h3>Practice in the Hub</h3><p>Use the Hub’s videos and music games between classes once it opens.</p></li>
          </ol>
        </section>
        <Gallery />
        <MediaShowcase />
        <section id="hub" className="wrap">
          <h2 className="t">The Gaana Meera Academy Hub</h2>
          <div className="panel">
            <div className="l">
              <h3>Your Complete Carnatic Learning Journey</h3>
              <p className="grades">Grades 1–7</p>
              <p>Access theory and practical lessons, informational videos and interactive music games, and connect with your guru.</p>
              <p>Empowering your voice, finding your rhythm.</p>
            </div>
            <div className="r"><h3>Member Portal Login</h3><span className="badge">Coming soon</span><p>Our member portal for students, parents and teachers is on its way. Until it opens, please contact us with any questions.</p><a className="btn" href="#contact">Contact us</a></div>
          </div>
        </section>

        <section id="faq" className="wrap">
          <h2 className="t">Questions and answers</h2>
          <details><summary>Do I need any music experience?</summary><p>No. Students new to Carnatic music begin in the Foundation level.</p></details>
          <details><summary>What ages do you teach?</summary><p>We teach students of all ages, from children to adults.</p></details>
          <details><summary>What is the Academy Hub?</summary><p>It is our member portal for students, parents and teachers, with lessons, videos, music games and a way to connect with gurus. It is coming soon.</p></details>
          <details><summary>How do I choose a grade?</summary><p>Contact us and we will help you pick a starting level based on the student's experience.</p></details>
        </section>
        <section id="contact" className="contact"><div className="wrap">
          <h2>Ready to begin?</h2>
          <p>Get in touch to find the right grade and class time.</p>
          <div className="cta"><a className="btn gold" href="mailto:gaanameerafinearts@gmail.com">Email us</a><a className="btn line" href="tel:+14165587596">Call us</a></div>
          <ul><li>Phone: <a href="tel:+14165587596">+1-416-558-7596</a></li><li>Email: <a href="mailto:gaanameerafinearts@gmail.com">gaanameerafinearts@gmail.com</a></li></ul>
        </div></section>
      </main>
      <footer><div className="wrap">Copyright © {new Date().getFullYear()} Gaana Meera School of Fine Arts. All rights reserved.</div></footer>
      <ScrollTop />
      <Reveal />
    </>
  )
}
