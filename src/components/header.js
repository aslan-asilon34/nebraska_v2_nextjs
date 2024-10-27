//import Link
import '../assets/frontend/css/style-prefix.css';
import '../assets/frontend/css/style.css';

function Header() {

    return (
        <header>

          <div className="header-top">
      
            <div className="container">
      
              <ul className="header-social-container">
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
      
              </ul>
      
              <div className="header-alert-news">
                <p>
                  <b>Free Shipping</b>
                  This Week Order Over - Rp 155
                </p>
              </div>
      
              <div className="header-top-actions">
      
                <select name="currency">
      
                  <option value="usd">USD &dollar;</option>
                  <option value="eur">EUR &euro;</option>
      
                </select>
      
                <select name="language">
      
                  <option value="en-US">English</option>
                  <option value="es-ES">Espa&ntilde;ol</option>
                  <option value="fr">Fran&ccedil;ais</option>
      
                </select>
      
              </div>
      
            </div>
      
          </div>
      
          <div className="header-main">
      
            <div className="container">
      
              <a href="#" className="header-logo">
                <img src="./assets/images/logo/logo.svg" alt="Nebraska V2's logo" width="120" height="36" />
              </a>
      
              <div className="header-search-container">
      
                <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
      
                <button className="search-btn">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
      
              </div>
      
              <div className="header-user-actions">
      
                <button className="action-btn">
                  <ion-icon name="person-outline"></ion-icon>
                </button>
      
                <button className="action-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                  <span className="count">0</span>
                </button>
      
                <button className="action-btn">
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  <span className="count">0</span>
                </button>
      
              </div>
      
            </div>
      
          </div>
      
          <nav className="desktop-navigation-menu">
      
            <div className="container">
      
              <ul className="desktop-menu-category-list">
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Home</a>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Categories</a>
      
                  <div className="dropdown-panel">
      
                    <ul className="dropdown-panel-list">
      
                      <li className="menu-title">
                        <a href="#">Electronics</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Desktop</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Laptop</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Camera</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Tablet</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Headphone</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">
                          <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                            height="119" />
                        </a>
                      </li>
      
                    </ul>
      
                    <ul className="dropdown-panel-list">
      
                      <li className="menu-title">
                        <a href="#">Men's</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Formal</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Casual</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Sports</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Jacket</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Sunglasses</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">
                          <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                        </a>
                      </li>
      
                    </ul>
      
                    <ul className="dropdown-panel-list">
      
                      <li className="menu-title">
                        <a href="#">Women's</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Formal</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Casual</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Perfume</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Cosmetics</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Bags</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">
                          <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                        </a>
                      </li>
      
                    </ul>
      
                    <ul className="dropdown-panel-list">
      
                      <li className="menu-title">
                        <a href="#">Electronics</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Smart Watch</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Smart TV</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Keyboard</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Mouse</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">Microphone</a>
                      </li>
      
                      <li className="panel-list-item">
                        <a href="#">
                          <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                        </a>
                      </li>
      
                    </ul>
      
                  </div>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Men's</a>
      
                  <ul className="dropdown-list">
      
                    <li className="dropdown-item">
                      <a href="#">Shirt</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Shorts & Jeans</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Safety Shoes</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Wallet</a>
                    </li>
      
                  </ul>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Women's</a>
      
                  <ul className="dropdown-list">
      
                    <li className="dropdown-item">
                      <a href="#">Dress & Frock</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Earrings</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Necklace</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Makeup Kit</a>
                    </li>
      
                  </ul>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Jewelry</a>
      
                  <ul className="dropdown-list">
      
                    <li className="dropdown-item">
                      <a href="#">Earrings</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Couple Rings</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Necklace</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Bracelets</a>
                    </li>
      
                  </ul>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Perfume</a>
      
                  <ul className="dropdown-list">
      
                    <li className="dropdown-item">
                      <a href="#">Clothes Perfume</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Deodorant</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Flower Fragrance</a>
                    </li>
      
                    <li className="dropdown-item">
                      <a href="#">Air Freshener</a>
                    </li>
      
                  </ul>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Blog</a>
                </li>
      
                <li className="menu-category">
                  <a href="#" className="menu-title">Hot Offers</a>
                </li>
      
              </ul>
      
            </div>
      
          </nav>
      
          <div className="mobile-bottom-navigation">
      
            <button className="action-btn" data-mobile-menu-open-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>
      
            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
      
              <span className="count">0</span>
            </button>
      
            <button className="action-btn">
              <ion-icon name="home-outline"></ion-icon>
            </button>
      
            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
      
              <span className="count">0</span>
            </button>
      
            <button className="action-btn" data-mobile-menu-open-btn>
              <ion-icon name="grid-outline"></ion-icon>
            </button>
      
          </div>
      
          <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
      
            <div className="menu-top">
              <h2 className="menu-title">Menu</h2>
      
              <button className="menu-close-btn" data-mobile-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
      
            <ul className="mobile-menu-category-list">
      
              <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
              </li>
      
              <li className="menu-category">
      
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Men's</p>
      
                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>
      
                <ul className="submenu-category-list" data-accordion>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Shirt</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Safety Shoes</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Wallet</a>
                  </li>
      
                </ul>
      
              </li>
      
              <li className="menu-category">
      
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Women's</p>
      
                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>
      
                <ul className="submenu-category-list" data-accordion>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Dress & Frock</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Makeup Kit</a>
                  </li>
      
                </ul>
      
              </li>
      
              <li className="menu-category">
      
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Jewelry</p>
      
                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>
      
                <ul className="submenu-category-list" data-accordion>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Couple Rings</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Bracelets</a>
                  </li>
      
                </ul>
      
              </li>
      
              <li className="menu-category">
      
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Perfume</p>
      
                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>
      
                <ul className="submenu-category-list" data-accordion>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Clothes Perfume</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Deodorant</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Flower Fragrance</a>
                  </li>
      
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Air Freshener</a>
                  </li>
      
                </ul>
      
              </li>
      
              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>
      
              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>
      
            </ul>
      
            <div className="menu-bottom">
      
              <ul className="menu-category-list">
      
                <li className="menu-category">
      
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>
      
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                  </button>
      
                  <ul className="submenu-category-list" data-accordion>
      
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">English</a>
                    </li>
      
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>
      
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>
      
                  </ul>
      
                </li>
      
                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                  </button>
      
                  <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">USD &dollar;</a>
                    </li>
      
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">EUR &euro;</a>
                    </li>
                  </ul>
                </li>
      
              </ul>
      
              <ul className="menu-social-container">
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
      
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
      
              </ul>
      
            </div>
      
          </nav>
      
        </header>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
    </div>
    )

}

export default Header