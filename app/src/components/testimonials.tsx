import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="container py-16 md:py-24 bg-muted">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">What Our Users Say</h2>
      <Carousel className="mt-8 w-full" opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <CardDescription className="text-base italic">"{testimonial.quote}"</CardDescription>
                  <div className="flex items-center mt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;