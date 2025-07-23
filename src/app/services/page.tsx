import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Building, Search, Users, Car, HeartPulse, GraduationCap, Dog } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Manned Guarding Services',
    description: 'Highly trained security personnel for corporate, industrial, and residential properties. Our guards are vigilant, professional, and prepared for any situation.',
  },
  {
    icon: <Building className="h-8 w-8 text-accent" />,
    title: 'Facility Management',
    description: 'Integrated services to ensure the smooth and secure operation of your facilities, including access control, maintenance, and emergency response.',
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Investigation & Verification',
    description: 'Discreet and professional background checks, corporate investigations, and due diligence services to mitigate risks.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Event Security Management',
    description: 'Comprehensive security planning and execution for public and private events, from small gatherings to large-scale festivals.',
  },
  {
    icon: <Car className="h-8 w-8 text-accent" />,
    title: 'Executive Protection',
    description: 'Personalized security details for high-profile individuals, executives, and their families, ensuring safety and privacy.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-accent" />,
    title: 'Emergency Response',
    description: 'Rapid deployment of our Quick Response Teams (QRT) to handle emergencies, threats, and critical incidents 24/7.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: 'Security Training',
    description: 'State-of-the-art training programs for aspiring security professionals, covering a wide range of skills and certifications.',
  },
  {
    icon: <Dog className="h-8 w-8 text-accent" />,
    title: 'K9 Squad Services',
    description: 'Specialized canine units for detection, patrolling, and threat deterrence, adding a powerful layer to your security.',
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader title="Our Services" breadcrumb="Home / Services" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Comprehensive Security Solutions</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    DVL Secure Vision offers a holistic approach to security. We analyze your unique vulnerabilities and design a multi-layered strategy that integrates expert personnel, advanced technology, and proven protocols. Our goal is to create a secure environment where you can operate with confidence and peace of mind.
                </p>
                 <p className="mt-4 text-muted-foreground">
                    From physical guarding to complex investigations, our diverse portfolio of services ensures that we can meet any security challenge.
                </p>
            </div>
             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://placehold.co/600x450" alt="Security services collage" className="w-full h-full object-cover" data-ai-hint="security operations center" />
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Our Service Portfolio</h2>
                 <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Explore our wide range of services designed to provide complete protection.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
                <Card key={service.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
