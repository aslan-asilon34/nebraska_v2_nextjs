"use client";

import '@/app/styles/global_landing.css';

export default function Home() {
   

    return (
      <div className="">
        <header className="header w-full">
          {/* <!--! topHeader --> */}
          <div className="top-header w-screen flex flex-col items-center justify-between border-b">
              <div className="flex w-full items-center justify-between p-4 md:px-20 border-b">
                  <div className="icons hidden lg:flex items-center gap-2">
                      <a
                          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                          href="#"
                          aria-label="Instagram"
                      >
                          <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                      <a
                          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                          href="#"
                          aria-label="LinkedIn"
                      >
                          <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                      <a
                          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                          href="#"
                          aria-label="GitHub"
                      >
                          <ion-icon name="logo-github"></ion-icon>
                      </a>
                  </div>
                  <h3 className="text-gray-400 font-semibold text-xs">
                      FREE SHIPPING THIS WEEK ORDER OVER - $55
                  </h3>
                  <div className="select hidden md:flex">
                      <select className="mr-2 p-1 px-2 text-sm font-semibold" id="currency" aria-label="Select currency">
                          <option value="USD">USD $</option>
                          <option value="EUR">EUR €</option>
                      </select>
                      <select className="mr-2 p-1 px-2 text-sm font-semibold" id="language" aria-label="Select language">
                          <option value="English">English</option>
                          <option value="Persian">Persian</option>
                      </select>
                  </div>
              </div>

              <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24">
                  <h1 className="font-semibold text-4xl text-gray-600">Anon</h1>
                  <form className="relative w-full sm:w-3/5" role="search">
                      <input
                          className="w-full h-full p-2 border rounded-xl"
                          placeholder="Enter Your Product Name..."
                          id="search"
                          type="text"
                          aria-label="Search products"
                      />
                      <button
                          type="submit"
                          className="absolute right-2 top-2"
                          aria-label="Search"
                      >
                          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                      </button>
                  </form>

                  <div className="icons hidden mr-2 text-3xl md:flex gap-8 text-gray-600">
                      <div className="relative" aria-label="User account">
                          <ion-icon name="person-outline"></ion-icon>
                      </div>
                      <div className="relative" aria-label="Favorites">
                          <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
                          <ion-icon name="heart-outline"></ion-icon>
                      </div>
                      <div className="relative" aria-label="Shopping cart">
                          <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
                          <ion-icon name="bag-handle-outline"></ion-icon>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!--! topHeader --> */}
          {/* <!--? navbar --> */}
            {/* <!--todo desktop Navbar --> */}
            <div className="desktopNavbar">
              <nav className="my-4 hidden lg:flex justify-center">
                <ul className="desktopNavbarUl flex justify-center items-center gap-12 font-sm font-bold text-gray-600">
                  <li className="nav_items relative">
                    <a href="#Home">HOME</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
                  </li>
                  <li className="nav_items relative category_nav_item">
                    <a href="#Categories">CATEGORIES</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
                    
                    <ul className="categoriesItem absolute top-10 shadow-lg rounded-xl hidden grid-cols-4 p-4 gap-4 border text-gray-400 font-normal bg-white z-10">
                      {[
                        {
                          title: "Electronics",
                          items: [
                            "Desktop", "Laptop", "Camera", "Tablet", "Headphone",
                            <img src="./assets/images/electronics-banner-1.jpg" alt="Electronics" />
                          ]
                        },
                        {
                          title: "Men's",
                          items: [
                            "Formal", "Casual", "Sports", "Jacket", "Sunglasses",
                            <img src="./assets/images/electronics-banner-2.jpg" alt="Men's" />
                          ]
                        },
                        {
                          title: "Women's",
                          items: [
                            "Formal", "Casual", "Perfume", "Cosmetics", "Bags",
                            <img src="./assets/images/mens-banner.jpg" alt="Women's" />
                          ]
                        },
                        {
                          title: "More Electronics",
                          items: [
                            "Smart Watch", "Smart TV", "Keyboard", "Mouse", "Microphone",
                            <img src="./assets/images/womens-banner.jpg" alt="More Electronics" />
                          ]
                        },
                      ].map((category, index) => (
                        <li key={index}>
                          <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">{category.title}</h3>
                          <ul className="flex flex-col items-start justify-start gap-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {typeof item === 'string' ? <a href="#">{item}</a> : item}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {[
                    { label: "MEN'S", link: "#Men", subItems: ["Shirt", "Shorts & Jeans", "Safety", "Wallet"] },
                    { label: "WOMEN'S", link: "#Women", subItems: ["Dress & Frock", "Earrings", "Necklace", "Makeup Kit"] },
                    { label: "JEWELRY", link: "#Jewelry", subItems: ["Earrings", "Couple Rings", "Necklace", "Bracelets"] },
                    { label: "PERFUME", link: "#Perfume", subItems: ["Clothes Perfume", "Flower Fragrance", "Safety", "Air Freshener"] },
                    { label: "BLOG", link: "#Blog" },
                    { label: "HOT OFFERS", link: "#HotOffers" }
                  ].map((item, index) => (
                    <li key={index} className="nav_items relative">
                      <a href={item.link}>{item.label}</a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
                      {item.subItems && (
                        <ul className="hoveredItems w-52 absolute top-10 hidden flex-col items-start justify-start gap-2 p-4 rounded-xl shadow-lg border font-normal bg-white">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href="#">{subItem}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>


            {/* <!--? mobile Navbar --> */}
            <div className="mobileNavbar">
                {/* Navbar Button */}
                <div
                  className="z-10 bg-white w-96 lg:hidden flex justify-around items-center p-4 border rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-lg shadow"
                >
                  <button id="openNavbarButton" type="button">
                    <ion-icon name="menu-outline"></ion-icon>
                  </button>

                  <button className="relative" type="button">
                    <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                      0
                    </span>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                  </button>

                  <button type="button">
                    <ion-icon name="home-outline"></ion-icon>
                  </button>

                  <button className="relative" type="button">
                    <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                      0
                    </span>
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button id="categoriesBtn" type="button">
                    <ion-icon name="grid-outline"></ion-icon>
                  </button>
                </div>

                {/* Overlay */}
                <div
                  id="overlayNavbar"
                  className="hidden fixed top-0 left-0 w-screen h-screen bg-gray-500/30 z-10"
                ></div>

                {/* Sidebar Navbar */}
                <div
                  className="fixed top-0 w-72 h-screen bg-white p-4 shadow-lg hidden flex-col justify-start gap-4 text-lg font-semibold overflow-auto z-20"
                  id="sidebarNavbar"
                >
                  <div className="flex justify-between border-b-2 py-4">
                    <h3 className="text-red-400">Menu</h3>
                    <button className="closeButton hover:text-red-500">
                      <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                  </div>

                  {/* Mobile Navbar Items */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <a href="#">Home</a>
                  </div>

                  {/* Men's Category */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Men's</summary>
                      <a href="#">Shirt</a>
                      <a href="#">Shorts & Jeans</a>
                      <a href="#">Safety Shoes</a>
                      <a href="#">Wallet</a>
                    </details>
                  </div>

                  {/* Women's Category */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Women's</summary>
                      <a href="#">Dress & Frock</a>
                      <a href="#">Earrings</a>
                      <a href="#">Necklace</a>
                      <a href="#">Makeup Kit</a>
                    </details>
                  </div>

                  {/* Jewelry Category */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Jewelry</summary>
                      <a href="#">Earrings</a>
                      <a href="#">Couple Rings</a>
                      <a href="#">Necklace</a>
                      <a href="#">Bracelets</a>
                    </details>
                  </div>

                  {/* Perfume Category */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Perfume</summary>
                      <a href="#">Clothes Perfume</a>
                      <a href="#">Deodorant</a>
                      <a href="#">Flower Fragrance</a>
                      <a href="#">Air Freshener</a>
                    </details>
                  </div>

                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <a href="#">Blog</a>
                  </div>
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <a href="#">Hot Offers</a>
                  </div>

                  {/* Language Selection */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Language</summary>
                      <div className="border rounded-xl shadow-xl flex flex-col items-start">
                        <a className="border-b w-full pb-2" href="#">English</a>
                        <a className="border-b w-full pb-2" href="#">Persian</a>
                      </div>
                    </details>
                  </div>

                  {/* Currency Selection */}
                  <div className="mobile_navbar_item border-b pb-3 text-gray-600">
                    <details>
                      <summary>Currency</summary>
                      <div className="border rounded-xl shadow-xl flex flex-col items-start">
                        <a className="border-b w-full pb-2" href="#">USD $</a>
                        <a className="border-b w-full pb-2" href="#">EUR €</a>
                      </div>
                    </details>
                  </div>

                  {/* Social Icons */}
                  <div className="icons flex items-center justify-center gap-4">
                    <a
                      className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
                      href="#"
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a
                      className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
                      href="#"
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a
                      className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
                      href="#"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </div>
                </div>

              {/* Sidebar Categories */}
                <div
                  id="sidebarCategories"
                  className="fixed top-0 w-80 h-screen bg-white p-6 shadow-lg hidden flex-col justify-start gap-4 font-semibold overflow-auto z-20"
                >
                    <div className="categories w-full h-auto">
                      <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg font-semibold mb-4">CATEGORY</h1>
                        <button className="closeButton text-xl hover:text-red-500">
                          <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                      </div>
                      {/* Categories List */}
                      {["Clothes", "Footwear", "Jewelry", "Perfume", "Cosmetics", "Glasses", "Bags"].map(category => (
                        <div className="border-b pb-3 text-lg text-gray-600" key={category}>
                          <details>
                            <summary>{category}</summary>
                            {/* Replace with dynamic items */}
                            <div className="flex justify-between items-baseline text-sm">
                              <a href="#">{category} Item 1</a>
                              <span>100</span>
                            </div>
                            <div className="flex justify-between items-baseline text-sm">
                              <a href="#">{category} Item 2</a>
                              <span>50</span>
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>

                    {/* Bestsellers Section */}
                    <div className="bestsellers w-full h-auto mt-2 flex flex-col items-start justify-start gap-4">
                      <h2 className="text-lg font-semibold">BEST SELLERS</h2>
                      {/* Replace with dynamic items */}
                      {[1, 2, 3, 4].map(item => (
                        <div className="flex items-center justify-start gap-2" key={item}>
                          <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
                            <img className="w-full h-full" src={`./assets/images/products/${item}.jpg`} alt="" />
                          </div>
                          <div className="text-gray-700">
                            <h4 className="text-gray-900">Product {item}</h4>
                            <div className="stars text-yellow-500">
                              <ion-icon name="star"></ion-icon>
                              <ion-icon name="star"></ion-icon>
                              <ion-icon name="star"></ion-icon>
                              <ion-icon name="star-half-outline"></ion-icon>
                              <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                              <s className="text-gray-500">$14.00</s> <strong>$7.00</strong>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


            {/* <!--? Navbar --> */}
          </header>

      </div>
  );

}

