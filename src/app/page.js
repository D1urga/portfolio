import Link from "next/link";
import Header from "./components/header";
import style from "./page.module.css";
import Image from "next/image";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import img1 from "./images/an2.jpeg";
import img2 from "./images/an3.jpeg";
import img3 from "./images/an4.jpeg";

export default function Home() {
  return (
    <main>
      <div className={style.outer_div1}>
        <div className={style.div11}>
          <Image
            src={img1}
            alt="image"
            priority={true}
            className={style.photo1}
          />
        </div>
        <div className={style.div12}>
          <p>Hello I'm</p>
          <h1>Anoop kumar</h1>
          <h2>Full Stack </h2>
          <h2>Android & Ios Developer </h2>
          <h2>fullstack Web Developer </h2>
          <div className={style.btns}>
            <Link href="https://www.cricbuzz.com/" target="blank">
              <h3 className={style.btn1}>Experience</h3>
            </Link>
            <Link href="">
              <h3 className={style.btn2}>Contact info</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.outer_div2}>
        <p>Explore my</p>
        <h2>Experience</h2>
        <div className={style.wrapper}>
          <div className={style.cont1}>
            <h5 className={style.title1}>Frontend Developement</h5>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Next js</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>React Js</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Flutter</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>HTML</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>CSS</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>JS & TS</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>SASS</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Mat..Ui</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
          </div>
          <div className={style.cont1}>
            <h5 className={style.title1}>Backend Developement</h5>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Node JS</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Express js</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Django</h3>
                <h4 className={style.subhead}>InterMediate</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>Php</h3>
                <h4 className={style.subhead}>InterMediate</h4>
              </div>
            </div>
            <div className={style.cont11}>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>MongoDb</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
              <div className={style.cont111}>
                <AiFillCheckCircle className={style.check} />
                <h3 className={style.head}>SQL</h3>
                <h4 className={style.subhead}>Experienced</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.outer_div3}>
        <p>Explore my Experience in</p>
        <h2>Hackathons</h2>
        <div className={style.hack}>
          <div className={style.hack1}>
            <h5 className={style.hname}>IIEC National Hackathon </h5>
            <h5 className={style.hrank}>1st Winner</h5>
            <h5 className={style.hcont}>
              Hackathon organised by IIEC and VIT University for finding
              solution of various problem statements related to real world
            </h5>
          </div>
          <div className={style.hack1}>
            <h5 className={style.hname}>GDSC Solution Challenge</h5>
            <h5 className={style.hrank}>1st Winner</h5>
            <h5 className={style.hcont}>
              Hackathon organised by Google for finding solution of various
              problem statements related to real world
            </h5>
          </div>
          <div className={style.hack1}>
            <h5 className={style.hname}>Build a WebApp</h5>
            <h5 className={style.hrank}>1st Winner</h5>
            <h5 className={style.hcont}>
              Hackathon organised by VIT University and NGC club for finding
              solution of various problem statements related to real world
            </h5>
          </div>
          <div className={style.hack1}>
            <h5 className={style.hname}>Hack Day </h5>
            <h5 className={style.hrank}>3rd Winner</h5>
            <h5 className={style.hcont}>
              Hackathon organised by BRACK University and VIT University for
              finding solution of various problem statements related to
              Universities
            </h5>
          </div>
        </div>
      </div>
      <div className={style.outer_div4}>
        <p>Checkout my recent</p>
        <h1>Projects</h1>
        <div className={style.project}>
          <div className={style.project1}>
            <div className={style.pro1}>
              <Image
                src={img2}
                alt="image"
                priority={false}
                className={style.myimg}
              />
            </div>
            <div className={style.pro1}>
              <h3 className={style.pr}>Next App</h3>
              <h3 className={style.pr1}>A full stack responsive website</h3>
              <Link
                href="https://github.com/D1urga/nextdev.git"
                target="blank"
                className={style.git}
              >
                Github
              </Link>
            </div>
          </div>
          <div className={style.project1}>
            <div className={style.pro1}>
              <Image
                src={img3}
                alt="image"
                priority={false}
                className={style.myimg}
              />
            </div>
            <div className={style.pro1}>
              <h3 className={style.pr}>Flick Analytics</h3>
              <h3 className={style.pr1}>A full stack responsive app</h3>
              <Link
                href="https://github.com/D1urga/flick.git"
                target="blank"
                className={style.git}
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.contact}>
        <p>Get in touch</p>
        <h1>Contact me</h1>
        <div className={style.cont}>
          <div className={style.con1}>
            <MdEmail className={style.log} />
            <p>anupchaudhary1021@gmail.com</p>
          </div>
          <div className={style.con1}>
            <FiLinkedin className={style.log} />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
      <Header />
    </main>
  );
}
