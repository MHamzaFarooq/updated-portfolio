import HeroTitle from "../ui/HeroTitle";

function UpdatedHero() {
  return (
    <div className="h-screen flex items-center">
      <section className="flex flex-wrap gap-x-6 px-4 justify-center text-center mx-auto items-center max-w-99.5 sm:max-w-172.5 md:max-w-280">
        <div className="flex gap-x-6">
          <HeroTitle fontName="retail" tracking={true} delay={0.1}>
            Hamza
          </HeroTitle>
          <HeroTitle fontName="swear" delay={0.2}>
            is
          </HeroTitle>
          <HeroTitle fontName="swear" delay={0.3}>
            a
          </HeroTitle>
        </div>
        <div className="md:flex md:gap-x-6 justify-center">
          <HeroTitle fontName="swear" delay={0.4}>
            product
          </HeroTitle>
          <HeroTitle fontName="retail" tracking={true} delay={0.5}>
            designer
          </HeroTitle>
          <HeroTitle fontName="swear" delay={0.6}>
            turned
          </HeroTitle>
        </div>
        <div className="md:flex md:gap-x-6 justify-center">
          <HeroTitle fontName="swear" delay={0.7}>
            software
          </HeroTitle>
          <HeroTitle fontName="retail" tracking={true} delay={0.8}>
            engineer
          </HeroTitle>
        </div>
      </section>
    </div>
  );
}

export default UpdatedHero;
