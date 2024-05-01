// import React, { useContext } from "react";
// import { Context } from "../../main";

// const About = () => {
//   const { mode } = useContext(Context);
//   return (
//     <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
//       <div className="container">
//         <h2>About</h2>
//         <p>
//           1. Lifestyle Blogs:
// Lifestyle blogs cover a broad range of topics related to everyday life, including personal development, health and wellness, relationships, fashion, beauty, home decor, and travel. These blogs often offer advice, tips, and inspiration to help readers improve their quality of life and pursue their passions.
//         </p>
//         <p>
//           2. Sports Blogs:
// Sports blogs focus on news, analysis, commentary, and updates related to various sports and athletic events. They cover topics such as game recaps, player profiles, team news, transfer rumors, match predictions, and sports betting tips. Sports blogs cater to fans of all levels and interests, from casual enthusiasts to die-hard supporters.
//         </p>

//        3. Technology Blogs:
// Technology blogs explore the latest trends, innovations, gadgets, software, and developments in the world of technology. They cover topics such as smartphones, computers, artificial intelligence, internet of things (IoT), cybersecurity, social media, and emerging technologies. Technology blogs provide insights, reviews, tutorials, and industry analysis to help readers stay informed and make informed decisions about tech-related products and services.
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//           ullam vitae repudiandae soluta voluptate a odit voluptas dolore nam
//           quasi optio consequatur itaque, mollitia labore sit. Eligendi,
//           doloribus debitis, saepe aspernatur quasi ipsum obcaecati ipsa commodi
//           ea labore ab dolor dolorum voluptatibus adipisci! At nobis minus
//           voluptas fugiat rerum laboriosam.
//         </p>
//       </div>
//     </article>
//   );
// };

// export default About;

import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <div className="category0">
          <h3>Lifestyle Blogs:</h3>
          <p>
            Lifestyle blogs cover a broad range of topics related to everyday
            life, including personal development, health and wellness,
            relationships, fashion, beauty, home decor, and travel. These blogs
            often offer advice, tips, and inspiration to help readers improve
            their quality of life and pursue their passions.
          </p>
        </div>

        <div className="category1">
          <h3>Economy & Business Blogs:</h3>
          <p>
            Economy and business blogs cover topics related to finance,
            economics, entrepreneurship, business management, investing, and
            corporate news. They provide analysis, insights, market trends,
            industry reports, and expert commentary on economic policies,
            financial markets, startups, small businesses, and multinational
            corporations. Economy and business blogs cater to professionals,
            investors, policymakers, and anyone interested in understanding the
            global economy and business landscape.
          </p>
        </div>

        <div className="category2">
          <h3>Technology Blogs:</h3>
          <p>
            Technology blogs explore the latest trends, innovations, gadgets,
            software, and developments in the world of technology. They cover
            topics such as smartphones, computers, artificial intelligence,
            internet of things (IoT), cybersecurity, social media, and emerging
            technologies. Technology blogs provide insights, reviews, tutorials,
            and industry analysis to help readers stay informed and make
            informed decisions about tech-related products and services.
          </p>
        </div>

        <div className="category3">
          <h3>Foods Blogs:</h3>
          <p>
            Food blogs focus on recipes, cooking tips, culinary techniques,
            restaurant reviews, food photography, and gastronomic experiences.
            They cater to food enthusiasts, home cooks, chefs, and anyone
            passionate about exploring different cuisines and flavors. Food
            blogs often feature mouthwatering images and detailed step-by-step
            instructions to help readers recreate delicious
          </p>
        </div>

        <div className="category4">
          <h3>Sports Blogs:</h3>
          <p>
            Sports blogs focus on news, analysis, commentary, and updates
            related to various sports and athletic events. They cover topics
            such as game recaps, player profiles, team news, transfer rumors,
            match predictions, and sports betting tips. Sports blogs cater to
            fans of all levels and interests, from casual enthusiasts to
            die-hard supporters.
          </p>
        </div>

        <div className="category5">
          <h3>Medical Blogs:</h3>
          <p>
            Medical blogs focus on health, wellness, medical research,
            healthcare policy, disease prevention, treatment options, and
            patient education. They provide accurate, reliable information on
            various medical conditions, symptoms, diagnoses, and treatment
            modalities. Medical blogs aim to empower readers to make informed
            decisions about their health and well-being, while also raising
            awareness about important health issues and promoting public health
            initiatives. Each category of blog serves a unique audience and
            provides valuable content and insights on its respective topic.
            Whether you're looking for lifestyle inspiration, sports updates,
            tech reviews, fashion trends, business advice, culinary delights,
            travel adventures, or health information, there's a blog out there
            to cater to your interests and passions.
          </p>
        </div>

        <div className="category6">
          <h3>Travels Blogs:</h3>
          <p>
            Travel blogs showcase destinations, travel itineraries, hotel
            reviews, travel tips, adventure stories, and cultural experiences
            from around the world. They inspire and inform readers about the
            joys of travel, whether it's solo backpacking adventures, family
            vacations, luxury getaways, or budget-friendly trips. Travel blogs
            often include stunning photography and personal anecdotes to
            transport readers to exotic locations and ignite their wanderlust.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
