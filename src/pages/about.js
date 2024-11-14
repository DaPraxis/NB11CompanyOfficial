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
            <img alt={'founder'} src={toOptimizedImage('/about2.png')}></img>
          </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Thomas Hill, had both an eye for quality and a
                desire to innovate. As well as using the finest fibres such as
                Sea Island cotton, cashmere and silk, he invented his own
                fabrics. Sunspel continues this commitment to innovation today
                and our unique fabrics include: Q100 Sea Island cotton, Q82
                Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit
                cellular cotton. The technology behind these fabrics remains
                unchanged today and all Sunspel products use the finest cottons,
                wools and fibres.
              </p>
              <p>
                Made in Long Eaton, England and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Sunspel T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 years spent perfecting fabric, fit and style, the
                Sunspel Classic T-shirt is recognised as the finest in the
                world.
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
