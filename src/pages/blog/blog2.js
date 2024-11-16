import React from 'react';
import * as styles from './blog1.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const Blog2Page = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'product'}
              title={'Protect Your Privacy: Meet the Adorable Privacy Protection Scroller'}
              image={'/blogs/blogProd2-1.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                In a world where identity theft and data breaches are on the rise, 
                safeguarding your personal information is more important than ever. 
                At NB11Company, we believe privacy protection doesn’t have to be dull 
                or intimidating. Introducing our Privacy Protection Scroller—a cute, 
                efficient, and fun way to keep your sensitive information safe.
                </p>
                <p className={styles.blogParagraph}>
                <li>Compact & Portable: Designed to fit in your hand, this scroller is 
                    lightweight and easy to carry, making it perfect for home, office, or on-the-go use.</li>
                
                <li>Efficient Coverage: With just one swipe, the roller stamps out sensitive text 
                    using advanced ink patterns that obscure your data completely.</li>
                
                <li>Eco-Friendly Refills: The ink is refillable, ensuring you can protect your 
                    privacy while reducing waste.</li>
                
                <li>Charming Design: Shaped like an adorable little figure, the scroller brings 
                    a touch of playfulness to your privacy routine. Available in multiple colors, 
                    it’s functional and fun!</li>
                </p>
                {/* <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd2-i.png')} alt={'sample1'} />
                </div> */}
                <h2 className={styles.blogSubHeader}>Why Privacy Matters</h2>
                <p className={styles.blogParagraph}>
                Whether it’s a discarded bill, a shipping label, or a confidential 
                document, every piece of paper with personal information is a potential 
                risk. Traditional shredders can be bulky and noisy, while marker pens 
                often fail to completely obscure your details. Our scroller offers a 
                smarter, simpler, and more stylish solution.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd2-2.jpg')} alt={'sample3'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd2-3.jpg')} alt={'sample4'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd2-i.png')} alt={'sample5'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd2-5.jpg')} alt={'sample6'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Where Innovation Meets Practicality</h2>
                <p className={styles.blogParagraph}>
                Our Privacy Protection Scroller is more than just a product—it’s 
                part of our commitment to helping individuals feel safe in every 
                aspect of their lives. From safety alarms to privacy tools, 
                NB11Company designs products that combine innovation, convenience, 
                and style to meet the modern challenges of our customers.{' '}
                </p>

                <h2 className={styles.blogSubHeader}>Perfect for Everyone</h2>
                <p className={styles.blogParagraph}>
                Whether you're a busy professional, a parent safeguarding your family’s 
                information, or a student protecting your personal records, this privacy 
                tool is a must-have. It also makes a thoughtful gift for anyone who 
                values security and style in equal measure.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Blog2Page;
