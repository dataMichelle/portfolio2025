const HeroProject = ({ imageURL, title, altText }) => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto mt-8 mb-12">
      {/* Screenshot Container */}
      <div className="relative z-10 w-full max-w-[36rem] rounded-lg shadow-2xl overflow-hidden border border-neutrals-100 dark:border-neutrals-700 transform hover:scale-[1.02] transition-transform duration-300">
        <img
          src={imageURL}
          alt={altText || `Screenshot of ${title}`}
          className="w-full h-auto object-cover"
        />
        {/* Overlay with Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h1 className="text-white text-xl md:text-2xl font-nunito font-semibold">
            {title}
          </h1>
        </div>
      </div>
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-primary-100 to-yellow-50 dark:from-primary-900 dark:via-primary-700 dark:to-yellow-700 opacity-20 rounded-full blur-3xl scale-125" />
    </div>
  );
};

export default HeroProject;
