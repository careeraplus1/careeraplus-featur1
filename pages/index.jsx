import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout1 from "../components/Layout1";
import PricingVisualResume from "../components/PricingVisualResume";
import FAQ from "../components/FAQ";
import {main} from "../helpers/faq"
import {useState, useEffect} from 'react';
import SigninComponent from "../components/auth/SigninComponent"
import { isAuth } from '../actions/auth';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import AOS from "aos";
import "aos/dist/aos.css";

import { FaRegIdBadge, FaRegCalendarAlt, FaEnvelope, FaBlog, FaLayerGroup} from "react-icons/fa";
const Index = () => {
 const [user, setUser] = useState({role: 2})

 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
  
  const head = () => (
        <Head>
            <title>
              {APP_NAME}
            </title>
            <meta name="description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/image/main`} />
            <meta property="og:image:secure_url" content={`${API}/image/main`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <React.Fragment>
      {head()}
        <Layout1>
          <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
          <section id="hero" className="d-flex align-items-center">
              <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9 text-center">
                    <h1>We help to build Your Dream Career</h1>
                    <h2>We want Dream Job for Everyone</h2>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>

                <div className="row icon-boxes">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box">
                      <div className="icon"><FaRegIdBadge /></div>
                      <h4 className="title"><a href="/visualresume">Visual Resume</a></h4>
                      <p className="description">Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min.</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                      <div className="icon"><FaRegCalendarAlt /></div>
                      <h4 className="title"><a href="examplan">Exam Plan</a></h4>
                      <p className="description">Data Analytics driven Exam Plan with TSET, Backup Days and 3 revision cycle, for GATE, ESE, State PSC and many more.</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                    <div className="icon-box">
                      <div className="icon"><FaBlog /></div>
                      <h4 className="title"><a href="blogs">Blogs</a></h4>
                      <p className="description">We provide extensive information on Career path and advice to improve skills through Videos and Blogs</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                    <div className="icon-box">
                      <div className="icon"><FaEnvelope /></div>
                      <h4 className="title"><a href="/contactus">Support</a></h4>
                      <p className="description">You can reach us for any support or help. Mail us directly at <em>contact@careeraplus.in</em></p>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            
            <section id="about" className="about">
              <div className="container" data-aos="fade-up">

                <div className="section-title">
                  <h2>What We DO</h2>
                  <p>Our aim is to help everyone to get their Dream Job.</p>
                </div>

                <div className="row content">
                  <div className="col-lg-6">
                    <p>
                      Following are few ways through which we can help you to achive your Dream Career.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> We provide easy to use Visual Resume tool.</li>
                      <li><i className="ri-check-double-line"></i> Visual Resume attracts recruiter to spend more time on profile. </li>
                      <li><i className="ri-check-double-line"></i> It helps you stand out in a crowd.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      We also provide, Exam Plan tool, to customize your time table for preparation of any competitive exam. We use extensive data analytics to generate
                      exam plan with Test, Revision, Backup Days and many more.
                    </p>
                    <a href="aboutus" className="btn-learn-more">Who we Are</a>
                  </div>
                </div>

              </div>
            </section>
            
            <section id="services" className="services section-bg">
              <div className="container" data-aos="fade-up">

                <div className="section-title">
                  <h2>Visual Resume Sevices</h2>
                  <p>Most attractive Design, with multiple color theme. Easy to use tool, convert your existing Resume to Visual Resume in 15 Min, with sharing URL.</p>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box iconbox-blue">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                          
                        </svg>
                        <i className="fas fa-layer-group"></i>
                      </div>
                      <h4><a href="/visualresume">Templates</a></h4>
                      <p>Save information once and use it in multiple templates. Tool Take cares of Design Automatically</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box iconbox-orange ">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                        </svg>
                        <i className="fas fa-tasks"></i>
                      </div>
                      <h4><a href="/visualresume">Layout</a></h4>
                      <p>Push down or up any section in resume by just one click. Extensive layout with all possible information.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box iconbox-pink">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                        </svg>
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <h4><a href="/visualresume">Sharing</a></h4>
                      <p>Get a Resume Sharing URL, with attractive clickable post image. You can share it in any social media platform like Linkedin, Facebook </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box iconbox-yellow">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                        </svg>
                        <i className="fas fa-print"></i>
                      </div>
                      <h4><a href="">Printing</a></h4>
                      <p>You get unlimited printing option after subscription. You can also save resume as in <em>pdf</em> format</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box iconbox-red">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                        </svg>
                        <i className="fas fa-palette"></i>
                      </div>
                      <h4><a href="">Colors</a></h4>
                      <p>Choose different and attractive color themes from pre defined color palletes</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box iconbox-teal">
                      <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                        </svg>
                        <i className="fas fa-file"></i>
                      </div>
                      <h4><a href="">Pages</a></h4>
                      <p>Based on your choices in subscription, you can have either 1 Page, 2 Pages or Unlimited Pages Resume</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>
            
            <section id="portfolio" className="portfolio">
              <div className="container" data-aos="fade-up">

                <div className="section-title">
                  <h2>Visual Resume Templates</h2>
                  <p>Fresher ideal for Just College pass out students. Professional for 0-4 years experience. Expert for 4+ years experience.</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="150">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-fresher">Fresher</li>
                      <li data-filter=".filter-pro">Professional</li>
                      <li data-filter=".filter-expert">Expert</li>
                    </ul>
                  </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="300">

                  <div className="col-lg-4 col-md-6 portfolio-item filter-fresher">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/fresher/Template1.JPG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 1</h4>
                        <p>Fresher</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/fresher/template1" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-pro">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/pro/Template2.JPG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 2</h4>
                        <p>Professional</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/pro/template2" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-expert">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/expert/Template3.JPG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 3</h4>
                        <p>Expert</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/expert/template3" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 portfolio-item filter-fresher">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/fresher/Template4.JPG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 4</h4>
                        <p>Fresher</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/fresher/template4" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-pro">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/pro/Template5.JPG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 5</h4>
                        <p>Professional</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/pro/template5" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-expert">
                    <div className="portfolio-wrap">
                      <img src="images/visualresume/expert/Template1_1.PNG" className="img-fluid" alt=""></img>
                      <div className="portfolio-info">
                        <h4>Template 1</h4>
                        <p>Expert</p>
                        <div className="portfolio-links">
                          <a href="/visualresume/expert/template1" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>
            </section>
            <PricingVisualResume />
            <FAQ faq = {main}/>
          </div>
         
          <div className = "main-page-signin container mt-2 text-center">
            {!isAuth() && <SigninComponent />}
            {(user.role == 1) && 
             <Row>
                <Col xs = "12">
                  <a href = "/admin/crud/test/daily/test" className = "btn btn-outline-primary btn-lg mt-4">Create Tests</a>
                </Col>
                <Col xs = "12">
                  <a href = "/admin/crud/blogs/blog" className = "btn btn-outline-primary btn-lg mt-4">Create Blogs</a>
                </Col>
            </Row>
              }
             {(user.role == 0) && 
             <Row>
                <Col xs = "12">
                  <a href = "/visualresume" className = "btn btn-outline-primary btn-lg mt-4">Visual Resume</a>
                </Col>
                <Col xs = "12">
                  <a href = "/examplan" className = "btn btn-outline-primary btn-lg mt-4">Examplan</a>
                </Col>
                <Col xs = "12">
                  <a href = "/user/tests" className = "btn btn-outline-primary btn-lg mt-4">Tests</a>
                </Col>
            </Row>
              }
          </div>
      </Layout1>
    </React.Fragment>
  
)
}

export default Index;