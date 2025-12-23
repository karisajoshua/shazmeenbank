const HeroTextSection = () => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl heading-elegant font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          If you've landed here, you're ready to{" "}
          <span className="text-shazmeen-red">heal</span>, take responsibility
          and{" "}
          <span className="text-shazmeen-blush">begin again</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Whether you're navigating anxious attachment, healing from heartbreak,
          or trying to reconnect with your partner—this is a safe space to
          unlearn old patterns, rebuild your sense of self, and step into
          relationships that truly honor you.
        </p>
      </div>
    </section>
  );
};

export default HeroTextSection;
