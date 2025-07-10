import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const projects = [
  {
    title: 'Unify-AI',
    description: 'A unified web interface for interacting with multiple LLMs via Together AI and Scira. Features automatic chaining, markdown cleanup, and multi-model support.',
    image: '/images/proj1.gif',
    tags: ['AI Chat', 'LLM'],
    githubLink: 'https://github.com/GOATNINJA10/Unify-AI'
  },
  {
    title: 'ActiveStride',
    description: 'ActiveStride is a sleek and dynamic eCommerce frontend designed to deliver a seamless and engaging shopping experience for active lifestyle enthusiasts.',
    image: '/images/PROJ.JPG',
    tags: ['E-Commerce', 'Frontend'],
    githubLink: 'https://github.com/GOATNINJA10/ActiveStride'
  },
  {
    title: 'ThreeDesign',
    description: 'A 3D T-shirt customization web app built with Three.js, allowing users to design and visualize personalized apparel in real-time.',
    image: '/images/proj3.JPG',
    tags: ['ThreeJS', 'Design'],
    githubLink: 'https://github.com/KshitijBramhecha/threejs-ai-design'
  }
];

const ShowcaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);
  const timeoutRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-advance slides disabled
  // Uncomment the following code to re-enable auto-advancing slides
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);
  */

  // Animation on slide change
  useEffect(() => {
    const slides = slideshowRef.current?.querySelectorAll('.slide');
    if (!slides) return;

    // Reset all slides
    gsap.set(slides, { opacity: 0, x: '100%' });
    
    // Animate current slide in
    gsap.to(slides[currentSlide], {
      x: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Animate previous slide out
    const prevSlideIndex = (currentSlide - 1 + projects.length) % projects.length;
    gsap.to(slides[prevSlideIndex], {
      x: '-100%',
      opacity: 0,
      duration: 0.8,
      ease: 'power3.in'
    });

  }, [currentSlide]);

  return (
    <section id="work" className="relative h-screen w-full overflow-hidden bg-black">
      <div 
        ref={slideshowRef}
        className="h-full w-full relative flex items-center lg:px-20"
      >
        {/* Left Arrow - Desktop Only */}
        <button 
          onClick={prevSlide}
          className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10
                    w-12 h-12 items-center justify-center text-2xl
                    active:scale-90 transform transition-transform"
          aria-label="Previous slide"
        >
          ←
        </button>
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`slide absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center">
              {/* Left side - Project Info */}
              <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
                <div className="inline-flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                  {project.description}
                </p>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  <span>View on GitHub</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              {/* Right side - Project Image */}
              <div className="lg:w-1/2 h-1/2 lg:h-4/5 flex items-center justify-center">
                <div className="relative w-full max-w-4xl mx-auto">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-lg"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={` w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


        {/* Right Arrow - Desktop Only */}
        <button 
          onClick={nextSlide}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10
                    w-12 h-12 items-center justify-center text-2xl
                    active:scale-90 transform transition-transform"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ShowcaseSection;