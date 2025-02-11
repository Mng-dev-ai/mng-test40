import { Button } from '@/components/ui/button';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="container py-16 md:py-24 text-center bg-primary text-primary-foreground">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
        {description}
      </p>
      <div className="mt-8">
        <Button asChild size="lg" variant="secondary">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;