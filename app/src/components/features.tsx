import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col justify-between h-full">
            <CardContent className="flex-grow">
              {feature.icon && <div className="mb-4">{feature.icon}</div>}
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;