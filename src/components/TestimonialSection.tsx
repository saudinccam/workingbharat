import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Render star ratings
  const renderRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients who successfully went abroad with our document services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Mobile view - Single testimonial at a time */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-navy-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].location}</p>
                  {renderRating(testimonials[currentIndex].rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-3">"{testimonials[currentIndex].content}"</p>
              <p className="text-saffron font-medium text-sm">Service: {testimonials[currentIndex].service}</p>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Desktop view - Show all testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mb-3">
                  {renderRating(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-3">"{testimonial.content}"</p>
                <p className="text-saffron font-medium text-sm">Service: {testimonial.service}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://g.page/r/Cbl9FPRKDhPeEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-navy-700 font-medium hover:text-navy-900 transition-colors"
            >
              <span>Read more on Google Reviews</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;