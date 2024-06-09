import React from 'react'
import './Home.css'
import Button from '../../components/Button/Button'
import ArrowIcon from '../../../public/right-arrow.svg'
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-section-left">
            <h1>Make The Best Financial Decisions</h1>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className='hero-section-btns'>
              <Button text="Get Started" img={ArrowIcon} />
              <span>
                <img src="./playBtn-icon.svg" alt="" />
                Watch Video
              </span>
            </div>
            <img src="./hero-section-bandImage.svg" alt="" />
          </div>
          <div className="hero-section-right">
            <img src="./hero-section-mobileImage.svg" alt="" />
          </div>
        </div>
        <div className="features-section">
          <div className="feature-img">
            <img src="./feature-image.svg" alt="" />
          </div>
          <div className="feature-content">
            <h5>Feature</h5>
            <h1>Uifry Premium</h1>
            <div className="feature-item">
              <div className='feature-item-list'>
                <div className="feature-item-list-heading">
                  <img src="./star-icon.svg" alt="" />
                  <span>
                    Budgeting Intervals
                  </span>
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>
              <div className='feature-item-list'>
                <div className="feature-item-list-heading">
                  <img src="./hex-icon.svg" alt="" />
                  <span>
                    Budgeting Intervals
                  </span>
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>
              <div className='feature-item-list'>
                <div className="feature-item-list-heading">
                  <img src="./cube-icon.svg" alt="" />
                  <span>
                    Budgeting Intervals
                  </span>
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages-section">
          <div className="advantages-section-item1">
            <div className="advantages-section-item-image">
              <img src="./advantages-image-1.svg" alt="" />
            </div>
            <div className="advantages-section-item-content">
              <div className="advantages-section-heading">
                <h5>Advantages</h5>
                <h1>why choose Uifry?</h1>
              </div>
              <div className="advantages-content-heading">
                <span><img src="./bell-icon.svg" alt="" /></span>
                <span>clever notifications</span>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
                et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <div className="advantages-section-item2">
            <div className="advantages-section-item-image">
              <img src="./advantages-image-2.svg" alt="" />
            </div>
            <div className="advantages-section-item-content item2-content">
              <div className="advantages-content-heading">
                <span><img src="./star-with-circle.svg" alt="" /></span>
                <span>fully customizable</span>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
                et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-section">
          <h5>testimonial</h5>
          <h1>what our users say about us?</h1>
          <div className="testimonial-content">
            <div className="testimonial-img">
              <img src="./testimonial-image.svg" alt="" />
            </div>
            <div className="testimonial-details">
              <h2>the best financial accounting app ever!</h2>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
                Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <img src="./testimonials-avatars.svg" alt="" />
              <div>Nick Jonas</div>
            </div>
          </div>
        </div>
        <div className="faq-section">
          <h5>Faq</h5>
          <h1>Frequently asked questions</h1>
          <div className="faq-section-content">
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="faq-questions">
              <div className="faq-heading">the best financial accounting app ever!</div>
              <p className="faq-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
        </div>
        <div className="getStarted-section">
          <img src="./getStarted-img.svg" alt="" />
        </div>
      </div >
    </>
  )
}

export default Home