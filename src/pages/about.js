import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about-t.jpg'}
          title={`NB11 \n A Canadian brand since 2020`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
          <p>
            Founded with a commitment to safety and empowerment, NB11Company is a Toronto-based brand redefining personal security with style and innovation. We create practical, elegant tools designed to support women’s confidence and protection in everyday life.
          </p>
          <br />
          <br />
          <p>
            From personal alarms to address-masking ink rollers, each product is crafted with both function and sophistication in mind. Partnering with leading researchers at the University of Toronto, we develop cutting-edge safety solutions, blending technology with user-friendly design. Every NB11 product embodies our mission to empower and protect, ensuring peace of mind with a refined touch.
          </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about3-t.jpg')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
          <h3>Our Values</h3>
          <div ref={valuesRef}>
            <p>
              At NB11Company, our mission extends beyond creating personal safety tools; we are committed to fostering innovation through academic collaboration. By working closely with scholars and researchers, we continually enhance the design and functionality of our products, prioritizing safety and ergonomics. Each product, from personal alarms to address-masking ink rollers, is developed with a blend of practical elegance and advanced research, supporting security without sacrificing style.
            </p>
            <ol>
              <li>Commitment to sustainability in all our products</li>
              <li>Precision-crafted and not mass-produced</li>
              <li>Designed using durable, high-quality materials</li>
            </ol>
            <img alt={'founder'} src={toOptimizedImage('/about2.jpg')}></img>
          </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Being in Toronto means we’re surrounded by a community that values 
              inclusivity and empowerment—values that are central to everything 
              we do. Whether it’s through workshops on personal safety or 
              partnerships with local organizations, we actively contribute to 
              the city we’re proud to call home.
              </p>
              <p>
              Our location also provides easy access to some of the brightest 
              minds in academia and industry, enabling us to collaborate on 
              projects that push boundaries. By working with local talent and 
              resources, we stay rooted in the community while expanding our 
              global reach.{' '}
              </p>
              <p>
              As our team grows, so does our office. We’re committed to creating 
              a space that not only supports innovation but also reflects our 
              evolving vision. Future plans include adding dedicated testing 
              labs for product prototypes, creating collaborative zones for 
              cross-functional teams, and hosting events to engage with our 
              customers and the Toronto community.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about1-t.jpeg')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
