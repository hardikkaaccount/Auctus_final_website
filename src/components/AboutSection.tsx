const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-8">
            About The Fest
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-semibold text-foreground">
              Get ready to dive into a week filled with innovation, fun, and learning!
            </p>
            
            <p className="text-2xl sm:text-3xl font-bold gradient-text">
              🚀 AUCTUS – The Flagship Event of IEEE PESCE is on its way!
            </p>
            
            <p className="text-lg sm:text-xl text-primary font-medium">
              Workshops | Games | Techinars
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-10 md:p-12 hover:border-primary/40 transition-all duration-300">
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
              AUCTUS is a premier technical festival designed to foster innovation, 
              collaboration, and technical excellence among students. Through a week of 
              engaging workshops, competitive hackathons, and inspiring talks from industry 
              experts, we aim to create a platform where creativity meets technology. Join us 
              to showcase your skills, learn from the best, and connect with fellow innovators 
              as we shape the future of technology together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
