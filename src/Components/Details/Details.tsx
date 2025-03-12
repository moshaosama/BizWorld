const Details = () => {
  return (
    <div className="mt-20 flex">
      <div className="w-1/2 relative transition-all opacity-30 hover:opacity-100 duration-500 hover:-translate-y-10">
        <img
          src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh1-1.jpg"
          alt="Rest.png"
          loading="lazy"
          decoding="async"
        />
        <h1 className="absolute bottom-20 left-10 text-3xl text-white z-50">
          We’re better than the rest
        </h1>
      </div>
      <div className="w-1/2 relative transition-all opacity-30 hover:opacity-100 duration-500 hover:-translate-y-10">
        <img
          src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh2-1-1.jpg"
          alt="Rest.png"
          loading="lazy"
          decoding="async"
        />
        <h1 className="absolute bottom-20 left-10 text-3xl text-white z-50">
          Compete on value, not on price.
        </h1>
      </div>
    </div>
  );
};

export default Details;
