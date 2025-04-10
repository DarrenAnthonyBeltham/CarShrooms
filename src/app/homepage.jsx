import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Porsche GT 911",
      subtitle: "Discover your dream",
      image: "/images/porsche-911.jpg",
    },
    {
      id: 2,
      title: "Ferrari SF90",
      subtitle: "Unleash your passion",
      image: "/images/ferrari.jpg",
    },
    {
      id: 3,
      title: "Lamborghini Huracan",
      subtitle: "Experience the extraordinary",
      image: "/images/lamborghini.jpg",
    },
  ];
  
  const featuredNews = {
    title: "Delivering on A singular Vision",
    content: "On August 12, 1994, a 22-year-old Christian von Koenigsegg decided to follow his dream and build the ultimate supercar. Koenigsegg Automotive is born",
    image: "/images/koenigsegg-news.jpg",
  };
  
  const carCategories = [
    {
      title: "Mercedes-AMG G 63",
      category: "SUV",
      image: "/images/mercedes-g63.jpg",
    },
    {
      title: "Venom F5",
      category: "Hypercars",
      image: "/images/venom-f5.jpg",
    },
    {
      title: "Chevrolet Corvette",
      category: "Supercars",
      image: "/images/corvette.jpg",
    },
    {
      title: "Dodge Charger SRT Hellcat",
      category: "",
      image: "/images/dodge-charger.jpg",
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <h1 className="text-2xl font-cursive">CarStream</h1>
          </Link>
        </div>
        <button className="text-2xl">☰</button>
      </header>

      {/* Hero Section with Slider */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                <div className="absolute bottom-12 left-12 text-white z-20">
                  <p className="text-sm mb-1">{slide.title}</p>
                  <h2 className="text-4xl font-bold">{slide.subtitle}</h2>
                </div>
                <div className="h-full w-full relative">
                  {/* Replace with actual Image component when you have the images */}
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-600">Image: {slide.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-red-600' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-8">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 pr-8">
            <button onClick={prevSlide} className="text-2xl mb-4">←</button>
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {featuredNews.title.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </h3>
              <p className="my-4 text-sm">{featuredNews.content}</p>
              <button className="flex items-center text-sm font-medium border border-black px-4 py-2 rounded-full">
                READ MORE <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">News Image</p>
            </div>
            <button onClick={nextSlide} className="text-2xl mt-4 float-right">→</button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-16 h-0.5 bg-gray-400 mx-4"></div>
          <button className="text-sm">View All News</button>
        </div>
      </section>

      {/* Car Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {carCategories.map((car, index) => (
          <div key={index} className="relative h-72 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="absolute top-6 left-6 z-20">
              {car.category && <span className="text-xs text-white uppercase">{car.category}</span>}
            </div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <h3 className="text-2xl font-bold mb-2">{car.title}</h3>
              <button className="flex items-center text-xs border border-white rounded-full px-4 py-1">
                Explore <span className="ml-2">→</span>
              </button>
            </div>
            <div className="h-full w-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Image: {car.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="bg-gray-800 text-white py-8 px-6 text-center">
        <h3 className="text-sm uppercase mb-2">Newsletter</h3>
        <p className="text-sm mb-4">Stay up to date with the latest news from CarStream.</p>
        <div className="max-w-xs mx-auto">
          <button className="bg-red-600 text-white text-sm py-2 px-8 w-full">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="text-2xl font-bold leading-none">
              <div>THE</div>
              <div>SHOW</div>
              <div>MUST</div>
              <div>GO ON</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Buy</h4>
            <ul className="space-y-2 text-sm">
              <li>Current vehicle offers</li>
              <li>Price list and Brochure</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shopping Guide</h4>
            <ul className="space-y-2 text-sm">
              <li>Test Drive</li>
              <li>Find a Dealer</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>5-Year star service</li>
              <li>24 Hour Roadside Assistance</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Our Brand</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact</li>
              <li>About CarStream</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div>© 2024 CarStream</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Legal Notices</span>
            <span>Cookie Policy</span>
            <span>Data Protection</span>
          </div>
        </div>
      </footer>
    </div>
  );
}