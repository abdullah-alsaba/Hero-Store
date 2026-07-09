const StatusCard = () => {
  return (
    <section className="bg-linear-to-r from-[#7C3AED] to-[#A855F7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-5xl font-bold mb-14">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10">
          <div>
            <p className="text-sm text-white/70 mb-4">Total Downloads</p>

            <h3 className="text-6xl font-bold text-white">29.6M</h3>

            <p className="mt-3 text-sm text-white/70">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm text-white/70 mb-4">Total Reviews</p>

            <h3 className="text-6xl font-bold text-white">906K</h3>

            <p className="mt-3 text-sm text-white/70">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm text-white/70 mb-4">Active Apps</p>

            <h3 className="text-6xl font-bold text-white">132+</h3>

            <p className="mt-3 text-sm text-white/70">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusCard;
