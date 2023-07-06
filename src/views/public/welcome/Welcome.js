import React from 'react'
import './welcome.css';
function Welcome() {
  return (
    <div id='welcom-container'>

<div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
                <img src="assets/img/logo/loder.jpg" alt=""/>
            </div>
        </div>
    </div>
</div>
<header>
    <div className="header-area">
        <div className="main-header ">
            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="col-xl-12">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="header-info-left">
                                <ul>     
                                    <li>Tel: +212 (0) 610 00 00 88</li>
                                    <li>Email: noreply@yourdomain.com</li>
                                </ul>
                            </div>
                            <div className="header-info-right">
                                <ul className="header-social">    
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li> <a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom  header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="logo">
                                <a href="index.html" className='nav-link' style={{
                                
                                    color: 'white',
                                    fontSize: '32px',
                                    fontWeight: 'bolder',
                              
                                }}>
                                  SPEED <span style={{color:'#f15f22'}}>DELIVERY</span> 
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                <div className="main-menu d-none d-lg-block">
                                    <nav> 
                                        <ul id="navigation">                                                                                          
                                            <li><a href="index.html">Acueil</a></li>
                                            <li><a href="about.html">A propos se nous?</a></li>
                                            <li><a href="services.html">Nos services</a></li>
                                            <li><a href="contact.html">Contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <div className="header-right-btn d-none d-lg-block ml-20">
                                    <a href="contact.html" className="btn header-btn">Get A Qoue</a>
                                </div> */}
                            </div>
                        </div> 
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<main>
    <div className="slider-area ">
        <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9">
                            <div className="hero__caption">
                                
                                <h1>Solutions <span>logistiques</span> sûres et fiables!</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="our-info-area pt-70 pb-40">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-info mb-30">
                        <div className="info-icon">
                            <span className="flaticon-support"></span>
                        </div>
                        <div className="info-caption">
                            <p>Notre call center</p>
                            <span>+ (123) 1800-567-8990</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-info mb-30">
                        <div className="info-icon">
                            <span className="flaticon-clock"></span>
                        </div>
                        <div className="info-caption">
                            <p>Dimanche FERMÉ</p>
                            <span>Mon - Sat 8.00 - 18.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-info mb-30">
                        <div className="info-icon">
                            <span className="flaticon-place"></span>
                        </div>
                        <div className="info-caption">
                            <p>Massira 1, Rue 292</p>
                            <span>Témara, Maroc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="categories-area section-padding30">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-80">
                        <span>Nos Services</span>
                        <h2>Que pouvons-nous faire pour vous?</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-shipped"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Livraison rapide de vos commandes</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-ship"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Stockage</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-plane"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Suivie des courses</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about-low-area padding-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about-caption mb-50">
                        <div className="section-tittle mb-35">
                            <span>A propos de nous</span>
                            <h2>Des solutions logistiques et de transport sûres qui nous font gagner plusieurs avantages:</h2>
                        </div>
                        <ul>
                            <li>Possibilité de suivie de vos courses.</li>
                            <li>Nos livreurs sont compétants et sûres en route.</li>
                            <li>Nouvelle technologie intégré pour une trés bonne gestion de nos livreurs.</li>
                            <li>Notre depot est sûre et trés bien organisé.</li>
                            <li>Un emballage covenable et professionnel.</li>
                        </ul>
                        <br/><br/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-img ">
                        <div className="about-font-img">
                            <img src="assets/img/gallery/about2.jpg" width={480} height={480} alt=""/>
                        </div>
                        <div className="about-back-img d-none d-lg-block">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <section className="contact-form-area section-bg  pt-115 pb-120 fix">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-xl-8 col-lg-9">
                    <div className="contact-form-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle mb-50">
                                    <span>Obtenez un devis gratuitement</span>
                                    <h2>Demander un devis gratuit</h2>
                                    <p>Brook présente vos services avec des mises en page flexibles, pratiques et cdpose. Vous pouvez sélectionner vos mises en page et éléments préférés.</p>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="contact-form">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Nom complet"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-form">
                                        <input type="text" placeholder="Numéro de Télephone"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="input-form">
                                        <input type="text" placeholder="Message"/>
                                    </div>
                                </div>
                                
                             
                                <div className="col-lg-12">
                                    <button name="submit" className="submit-btn">Demander un devis</button>
                                </div>
                            </div>
                        </form>	
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <div className="testimonial-area testimonial-padding section-bg" data-background="assets/img/gallery/section_bg04.jpg">
        <div className="container">
            <div className="row justify-content-between">
                
                <div className="col-xl-12">
                    <div className="testimonial-form text-center">
                        <h3>Toujours à l'écoute, toujours compréhensif.</h3>
                        <input type="text" placeholder="Votre message" />
                        <button name="submit" className="submit-btn">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</main>
<footer>

   <div className="footer-area footer-bg">
        <div className="container">
            <div className="footer-top footer-padding">
                <div className="footer-heading">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-8 col-md-8">
                            <div className="wantToWork-caption wantToWork-caption2">
                                <h2>Nous sachons trés bien l'importance d'aborder chaque travail!</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <span className="contact-number f-right">+212 612 45 65 45</span>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-between">
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Société</h4>
                                <ul>
                                    <li><a href="#">A propos de nous?</a></li>
                                    <li><a href="#">Société</a></li>
                                    <li><a href="#"> Notre politique</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Heures de travail</h4>
                                <ul>
                                    <li><a href="#">Lundi 11am-7pm</a></li>
                                    <li><a href="#"> Mardi au Vendredi 11am-8pm</a></li>
                                    <li><a href="#"> Samedi 10am-6pm</a></li>
                                    <li><a href="#"> Dimanche 11am-6pm</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-logo">
                                <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                            </div>
                            <div className="footer-tittle">
                                <div className="footer-pera">
                                    <p className="info1">La concurrence commerciale actuellement en E-commerce au maroc devient de plus en plus agressive sur tout les plans.
                                        Nous présentons une solution solutions logistiques et de transport sûre qui peut montrer la différence..</p>
                                </div>
                            </div>
                            <div className="footer-social ">
                                <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="footer-copy-right text-center">
                            <p>
                                droits d'auteur &copy;{new Date().getFullYear()} Tous les droits sont réservés | <i className="fa fa-heart" aria-hidden="true"></i> par <a href="" target="_blank">CEDAMUS</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div id="back-top" >
    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
</div>


    </div>

  )
}

export default Welcome