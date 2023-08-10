import TechCarousel from '../shared/TechCarousel';
import './about-us.css';
const imageList = [
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59439cb0de601_Ruby_On_Rails_Logo.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594257d0de60a_1280px-Node.js_logo.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5945d3e0de603_1200px-Amazon_Web_Services_Logo.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594a9b00de614_2048px-Unofficial_JavaScript_logo_2.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5947c9b0de608_2560px-Twilio-logo-red.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59433920de60c_3-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5943a960de607_CSS3_logo_and_wordmark.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594f54f0de602_512px-HTML5_logo_and_wordmark.svg.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5943e7a0de605_social-icon-google-cloud-1200-630-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59428f60de604_Angular_full_color_logo.svg.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594327d0de611_2560px-Django_logo.svg-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59466db0de60b_Gatsby_Logo-p-500.png',
    'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59405300de60f_HIghest%2520possible%2520gro-p-500.png'
]
function AboutUs(){
    return (
        <div className='about-us'>
            <div className="flex-box">
                <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691701503/coffee-cup_ifepna.jpg' alt='coffee-cup' className='coffee-cup'/>
                <div className='box-header'>
                    <h2 className='about-header'> Welcome to the World of Coffee! </h2>
                    <h2 className='about-header'> Welcome to the World of Coffee! </h2>
                </div>
                <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691701503/coffee-cup_ifepna.jpg' alt='coffee-cup' className='coffee-cup left-cup' />
            </div>
            <div className='rel-position'>
                <p>
                    At Coffee Shop, we are passionate about providing you with the finest and most delightful coffee experience. Whether you're a coffee aficionado or a casual coffee enthusiast, we invite you to embark on a journey of taste, aroma, and culture through the world of coffee.
                </p>
                <p>
                    <strong>Our Coffee Collection:</strong> <br/>
                    Indulge in a curated selection of premium coffee beans sourced from the most renowned coffee-growing regions across the globe. From the lush hills of Ethiopia to the high altitudes of Colombia, each coffee bean is carefully handpicked to ensure that only the best reaches your cup. Choose from a variety of single-origin coffees, signature blends, and unique flavored coffees that cater to every taste preference.
                </p>
                <p>
                    <strong>Brewing Equipment and Accessories:</strong> <br/>
                    To complement our exceptional coffee beans, we offer a wide range of high-quality coffee brewing equipment and accessories. From classic French presses and sleek espresso machines to modern pour-over sets and state-of-the-art grinders, we have everything you need to brew your perfect cup of coffee at home. Our selection of brewing methods allows you to explore different brewing techniques and unlock diverse flavor profiles.
                </p>
                <p>
                    <strong>Coffee Subscriptions:</strong> <br/>
                    Never run out of your favorite coffee again with our convenient coffee subscription service. Simply choose your preferred coffee, select the frequency of delivery, and let us take care of the rest. With our subscriptions, you'll receive freshly roasted coffee delivered straight to your doorstep, ensuring you never miss a morning without the aroma of freshly brewed coffee to awaken your senses.
                </p>
                <p>
                    <strong>The Art of Coffee:</strong> <br/>
                    At Coffee Shop, we believe that coffee is not just a beverage; it's an art form. Discover the art of coffee through our informative blog posts and captivating articles. Learn about the history of coffee, the science behind roasting, and the secrets to crafting the perfect espresso. We share brewing tips, latte art tutorials, and interviews with coffee experts to help you elevate your coffee experience and become a true coffee connoisseur.
                </p>
                <p>
                    <strong>Sustainability and Ethical Sourcing:</strong> <br/>
                    We are committed to sustainability and ethical sourcing practices. Our coffee beans are sourced from farmers who prioritize environmental conservation and fair labor practices. By choosing our coffee, you support a sustainable and responsible coffee industry that cares for both the planet and the people involved in the process.
                </p>
                <p>
                    <strong>Join Our Coffee Community:</strong> <br/>
                    Become a part of our vibrant coffee community, where coffee lovers from around the world come together to share their passion and knowledge. Connect with fellow enthusiasts, exchange brewing techniques, and showcase your latte art creations. Our online platform allows you to engage with like-minded individuals and deepen your love for coffee.
                </p>
                <p>
                    <strong>Customer Satisfaction Guarantee:</strong> <br/>
                    We take great pride in our products and services, and your satisfaction is our top priority. If, for any reason, you are not completely satisfied with your purchase, our friendly customer support team is here to assist you. We stand behind the quality of our coffee and are dedicated to ensuring you have a delightful experience with every cup.
                </p>
                <p>
                    <strong>Let's Brew the Perfect Cup Together::</strong> <br/>
                    At Coffee Shop, we invite you to embark on a delightful journey into the captivating world of coffee. Let's explore the rich flavors, unique aromas, and diverse brewing methods that make coffee one of the most cherished beverages worldwide. Join us in celebrating the art and science of coffee as we take your coffee experience to new heights, one cup at a time. Cheers to great coffee!
                </p>
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/priya-kumari-gupta/" target="_blank" rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691703029/coffee-shop/icons8-linkedin_shgvmj.svg' alt='linkedin' />
                </a>
                <a href="https://www.youtube.com/channel/UCj2JU8BQn2FK1SdNCZHND_A" target="_blank" rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691703039/coffee-shop/icons8-youtube_dtijsc.svg' alt='youtube' />
                </a>
                <a href="https://twitter.com/Priya31g" target="_blank" rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691703039/coffee-shop/icons8-twitter_dudobk.svg' alt='twitter' />
                </a>
            </div>
        </div>
    )
}
export default AboutUs;