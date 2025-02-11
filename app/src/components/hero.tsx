import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="container py-16 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
        {description}
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;