import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>SpaceCrew-new</title>
        <meta property="og:title" content="SpaceCrew-new" />
      </Helmet>
      <div className="home-container11">
        <div className="home-container12">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link to="/" className="home-navlink1">
              <img
                alt="logo"
                src="/output-onlinepngtools1-200h.png"
                className="home-image10"
              />
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links1">
                <Link to="/" className="home-navlink2">
                  Home
                </Link>
                <a href="#about" className="home-link1">
                  About
                </a>
                <a href="#how it works" className="home-link2">
                  How it works
                </a>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <img
                    alt="image"
                    src="/adoijadjjdjod-200h.png"
                    className="home-logo"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links2">
                  <Link to="/" className="home-navlink3">
                    Home
                  </Link>
                  <a href="#about" className="home-link3">
                    About
                  </a>
                  <a href="#how it works" className="home-link4">
                    How it works
                  </a>
                </nav>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <div className="home-container13">
            <div className="home-container14">
              <span className="home-text100">INDISPENSABLE</span>
              <span className="home-text101">
                In today’s fast-paced business world, reliable support is
                essential. SpaceCrew’s Virtual Assistant (VA) Program provides
                small to mid-sized businesses with dependable, high-quality
                assistance to drive efficiency and growth. Our skilled VAs
                streamline operations, enabling you to focus on building your
                vision.
              </span>
              <a
                href="https://share.hsforms.com/1tjOi9gQ2QvW6gwisyIMnVgss21p"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5 button"
              >
                Get Started
              </a>
            </div>
            <img
              alt="image"
              src="/taskgenie-cover3-500w.png"
              className="home-image11"
            />
          </div>
        </div>
      </div>
      <div id="about" className="home-container15">
        <div className="home-container16">
          <span className="home-text102">
            <span className="home-text103">Why</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text105">Us?</span>
          </span>
          <div className="home-container17">
            <span className="home-text106">Tailored Support:</span>
            <span>Our VAs adapt to your unique business needs.</span>
          </div>
          <div className="home-container18">
            <span className="home-text108">Skilled Professionals</span>
            <span>Access a pool of talented, pre-vetted assistants.</span>
          </div>
          <div className="home-container19">
            <span className="home-text110">Scalable Solutions</span>
            <span>Easily adjust support levels as your business grows.</span>
          </div>
          <div className="home-container20">
            <span className="home-text112">Cost-Effective</span>
            <span>Reduce overhead while increasing productivity.</span>
          </div>
          <div className="home-container21">
            <span className="home-text114">Time-Saving</span>
            <span>
              Focus on core business activities while we handle the rest.
            </span>
          </div>
        </div>
        <img alt="image" src="/picture17-400w.png" className="home-image12" />
      </div>
      <div id="about" className="home-container22">
        <div className="home-container23">
          <span className="home-text116">Productivity</span>
          <span className="home-text117">
            <span>
              Every company deserves great help. See how Virtual Assistants can
              work for you.
            </span>
            <br className="home-text119"></br>
          </span>
        </div>
        <div className="home-container24">
          <div className="home-container25">
            <div className="home-container26">
              <img
                alt="image"
                src="/picture23-500h.png"
                className="home-image13"
              />
            </div>
            <span className="home-text120">
              <span>Customer Service</span>
              <br></br>
            </span>
            <span>
              <span>• Sales Support</span>
              <br></br>
              <span>
                • Phone, Email &amp; Live Chat
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>   Support</span>
              <br></br>
              <span>• Customer Retention &amp;</span>
              <br></br>
              <span>   Relationship Building</span>
              <br></br>
              <span>• </span>
              <span>Escalation Management</span>
              <br></br>
              <span>• </span>
              <span>Customer Onboarding</span>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container27">
            <div className="home-container28">
              <img
                alt="image"
                src="/picture24-500h.png"
                className="home-image14"
              />
            </div>
            <span className="home-text142">
              <span>eCommerce</span>
              <br className="home-text144"></br>
            </span>
            <span>
              <span>• Online store management</span>
              <br></br>
              <span>• </span>
              <span>Inventory tracking</span>
              <br></br>
              <span>• </span>
              <span>Website maintenance</span>
              <br></br>
              <span>• </span>
              <span>Social media management</span>
              <br></br>
              <span>• </span>
              <span>Market Support</span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container29">
            <div className="home-container30">
              <img
                alt="image"
                src="/picture25-500h.png"
                className="home-image15"
              />
            </div>
            <span className="home-text164">
              <span>Bookkeeping</span>
              <br className="home-text166"></br>
            </span>
            <span>
              <span>• Financial transaction records maintenance</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Bills &amp; accounts payable maintenance</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Accounting software management</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Invoicing to customers</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Timely and accurate payroll functions</span>
            </span>
          </div>
          <div className="home-container31">
            <div className="home-container32">
              <img
                alt="image"
                src="/picture26-500h.png"
                className="home-image16"
              />
            </div>
            <span className="home-text181">
              <span>Marketing</span>
              <br></br>
            </span>
            <span>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>SM / Reputation Management</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Lead Generation</span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Email Marketing</span>
              <br></br>
              <span>•</span>
              <span>Marketing Calendar</span>
              <br></br>
              <span>• </span>
              <span>Affiliate &amp; Influencer Engagement</span>
              <br></br>
              <span>• Search Engine Optimization</span>
              <br></br>
              <span>•Graphic Design</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div id="how it works" className="home-container33">
        <span className="home-text204">
          <span className="home-text205">
            Service
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text206">Process</span>
        </span>
        <div className="home-container34">
          <div className="home-container35">
            <div className="home-container36">
              <span className="home-text207">1</span>
            </div>
            <div className="home-container37">
              <span className="home-text208">Discovery</span>
              <span className="home-text209">________________________</span>
              <span>
                Start by booking a Discovery Call where we’ll explore your needs
                and objectives, setting the stage for a tailored approach to
                meet your goals.
              </span>
            </div>
          </div>
          <div className="home-container38">
            <div className="home-container39">
              <span className="home-text211">2</span>
            </div>
            <div className="home-container40">
              <span className="home-text212">Matching</span>
              <span className="home-text213">________________________</span>
              <span>
                Our team will then conduct a comprehensive search to identify
                the best candidates or solutions that fit your criteria and
                needs.
              </span>
            </div>
          </div>
          <div className="home-container41">
            <div className="home-container42">
              <span className="home-text215">3</span>
            </div>
            <div className="home-container43">
              <span className="home-text216">Onboarding</span>
              <span className="home-text217">________________________</span>
              <span>
                Your Virtual Assistants will begin to define work instructions
                and integrates seamlessly with your team.
              </span>
            </div>
          </div>
        </div>
        <div className="home-container44">
          <div className="home-container45">
            <div className="home-container46">
              <span className="home-text219">4</span>
            </div>
            <div className="home-container47">
              <span className="home-text220">Monitoring</span>
              <span className="home-text221">________________________</span>
              <span>
                Our supervisor will work with your in-house department managers
                to ensure work is being completed both successfully along
                quality standards.
              </span>
            </div>
          </div>
          <div className="home-container48">
            <div className="home-container49">
              <span className="home-text223">5</span>
            </div>
            <div className="home-container50">
              <span className="home-text224">Support</span>
              <span className="home-text225">________________________</span>
              <span>
                Finally, we offer ongoing support to ensure a smooth transition
                and successful implementation, addressing any questions or
                issues that arise.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container51">
        <div className="home-container52">
          <div className="home-container53">
            <img
              alt="image"
              src="/imgpsh_fullsize_anim%20(11)-200h.png"
              className="home-image17"
            />
            <span className="home-text227">
              <span className="home-text228">Take the Next Step</span>
              <br className="home-text229"></br>
              <br></br>
              <span>
                Don’t let administrative tasks hold your business back. With the
                SpaceCrew Virtual Assistant Program, you can focus on what truly
                matters – growing your business.
              </span>
              <br></br>
            </span>
            <div className="home-container54">
              <a
                href="https://www.facebook.com/ThreeFreeWishes/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon20"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/threefreewishes"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <img
                  alt="image"
                  src="/twitter%20(2)-200h.png"
                  className="home-image18"
                />
              </a>
              <a
                href="https://www.instagram.com/threefreewishes"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link8"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon22"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="home-container55">
          <img alt="image" src="/img-07-200h.png" className="home-image19" />
          <div className="home-container56"></div>
          <div className="home-container57">
            <input
              type="text"
              placeholder="Add your email"
              className="home-textinput input"
            />
          </div>
          <Link to="/about" className="home-navlink4">
            <div className="home-container58">
              <div className="home-container59"></div>
            </div>
          </Link>
          <a
            href="mailto:hello@taskgenie.com?subject=Website Email"
            className="home-link9 button"
          >
            Contact
          </a>
        </div>
        <div className="home-container60">
          <span className="home-text233">
            Copyright © 2024 SpaceCrew, All Right Reserved.
          </span>
          <div className="home-container61"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
