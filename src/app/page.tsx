"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { CheckCircle, Quote, ShieldCheck, Users, VenetianMask } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Manned Guarding',
    description: 'Professional security personnel for premises protection.',
  },
  {
    icon: <VenetianMask className="h-10 w-10 text-accent" />,
    title: 'Investigation Services',
    description: 'Discreet and thorough investigative services.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Event Security',
    description: 'Comprehensive security for events of all sizes.',
  },
];

const testimonials = [
  {
    quote: "DVL Secure Vision's professionalism and attention to detail are unmatched. We trust them completely with our security.",
    name: 'John Doe',
    title: 'CEO, TechCorp',
    avatar: 'https://placehold.co/100x100'
  },
  {
    quote: "The peace of mind their team provides is invaluable. Their guards are courteous, vigilant, and highly trained.",
    name: 'Jane Smith',
    title: 'Operations Manager, Innovate LLC',
    avatar: 'https://placehold.co/100x100'
  }
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <img src="https://placehold.co/1920x1080" alt="Security Guard" className="w-full h-full object-cover" data-ai-hint="security guard" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://placehold.co/1920x1080" alt="Surveillance" className="w-full h-full object-cover" data-ai-hint="surveillance camera" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40" />
        </Carousel>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary">About DVL Secure Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded on the principles of integrity, vigilance, and professionalism, DVL Secure Vision has grown to become a leading name in the security industry. We are dedicated to providing our clients with the highest level of protection, ensuring their safety and peace of mind.
              </p>
              <Button asChild className="mt-6">
                <Link href="/about">Discover More</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x400" alt="Our Team" className="w-full h-full object-cover" data-ai-hint="security team" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Our Core Services</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">We offer a wide range of security solutions to meet your specific requirements.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Why Choose DVL Secure Vision?</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x450" alt="Security professional" className="w-full h-full object-cover" data-ai-hint="security professional" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Experienced Professionals</h3>
                  <p className="text-muted-foreground mt-1">Our team consists of highly trained and experienced security experts from military and law enforcement backgrounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Customized Solutions</h3>
                  <p className="text-muted-foreground mt-1">We don't believe in one-size-fits-all. We tailor our security plans to your unique risks and needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground mt-1">Our command center is operational around the clock, ready to respond to any incident at a moment's notice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="mt-4 text-muted-foreground italic">{testimonial.quote}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
