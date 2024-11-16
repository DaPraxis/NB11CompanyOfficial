import React from 'react';
import * as styles from './blog1.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const Blog1Page = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'product'}
              title={'Style Meets Safety: Introducing the Fashion-Forward Safety Alarm'}
              image={'/blogs/blogProd1-i.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                In a world where personal safety is a growing concern, women 
                shouldn’t have to choose between security and style. Enter 
                NB11Company's Fashion Safety Alarm—a revolutionary self-defense 
                tool designed to empower women while complementing their everyday 
                looks.
                </p>
                <p className={styles.blogParagraph}>
                Gone are the days of bulky, utilitarian safety devices that draw 
                unwanted attention. Our sleek and elegant safety alarm is more than 
                a device—it's an accessory that blends seamlessly with your wardrobe. 
                Whether clipped to a stylish handbag or worn as a subtle keychain, 
                the NB11 safety alarm redefines how protection can look and feel.
                </p>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/blogs/blogProd1-2.jpg')} alt={'sample1'} />
                </div>
                <h2 className={styles.blogSubHeader}>How It Works</h2>
                <p className={styles.blogParagraph}>
                At the heart of the alarm is advanced technology tailored for ease 
                of use in emergencies. With just a press or pull, the alarm emits 
                a piercing siren designed to alert those nearby and deter potential 
                threats. Its compact size and lightweight design make it easy to 
                carry, while the durable build ensures it’s ready when you need it most.
                </p>
                <div className={styles.imageContainer}>
                    <img src={toOptimizedImage('/blogs/blogProd1-1.jpg')} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>More Than Just a Product</h2>

                <p className={styles.blogParagraph}>
                At NB11Company, we don’t just sell safety alarms—we champion a mission of 
                empowerment and community safety. A portion of every sale supports 
                women’s safety initiatives and academic research to develop even 
                better safety solutions.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Blog1Page;
