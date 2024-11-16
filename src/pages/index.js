import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1-t.png'}
        title={'Empowered Women'}
        subtitle={'New Boundaries, 1-to-1 Protection'}
        // ctaText={'shop now'}
        // ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
        Empowering <span className={styles.gold}>safety</span> today, for a <span className={styles.gold}>stronger</span> tomorrow. {' '}
        </p>
        <p>
        Each of our products is designed to provide women with <span className={styles.gold}>confidence</span> and <span className={styles.gold}>protection</span> in every moment. {' '}
        </p>
      </div>

      {/* Collection Container */}
      {/* <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div> */}

      {/* New Arrivals */}
      {/* <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div> */}

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight-t.jpeg'}
            altImage={'highlight image'}
            miniImage={'/highlightmin-t.jpg'}
            miniImageAlt={'mini highlight image'}
            title={'Elegant Safety Keychain'}
            description={`Crafted for both style and security, this discreet personal alarm is designed with meticulous attention to detail. Perfectly sized to complement any outfit, this alarm is a refined statement of both fashion and functionality, ideal for those who prioritize safety with sophistication.`}
            textLink={'learn more'}
            link={'/blog/blog1'}
          />
        </Container>
      </div>

      {/* Promotion */}
      {/* <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div> */}

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about NB11 Company'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Responsible & Ergonomic Design'}
          subtitle={
            'Discover how we blend functionality and elegance to support your peace of mind, while partnering with trusted innovators to craft tools that empower and protect with style and integrity.'
          }
          ctaText={'read more'}
        ctaAction={goToAbout}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Safety for You'}
          subtitle={'Tag @nb11 to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
