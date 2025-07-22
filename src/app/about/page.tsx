import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Eye, Heart, Trophy } from 'lucide-react';
import Image from 'next/image';

const strengths = [
    {
        icon: <Trophy className="h-8 w-8 text-accent" />,
        title: "Expert Leadership",
        description: "Our management team comprises veterans from the armed forces and intelligence agencies."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-accent" />,
        title: "Quality Assurance",
        description: "We adhere to the highest standards of quality and are ISO 9001 certified."
    },
    {
        icon: <Heart className="h-8 w-8 text-accent" />,
        title: "Client-Centric Approach",
        description: "Building long-term relationships based on trust and mutual respect is our priority."
    },
    {
        icon: <Eye className="h-8 w-8 text-accent" />,
        title: "Continuous Improvement",
        description: "We constantly innovate and adapt to the evolving security landscape."
    },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About Us" breadcrumb="Home / About Us" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
             <Image src="https://placehold.co/600x800" alt="Company Building" layout="fill" objectFit="cover" data-ai-hint="office building" />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sentinel Shield was established with a singular mission: to provide unparalleled security services that our clients can rely on. We bring together a team of seasoned professionals with extensive experience in security, intelligence, and risk management.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our commitment to excellence and our client-first philosophy have made us a trusted partner for businesses and individuals across various sectors. We believe in proactive security measures, combining human expertise with cutting-edge technology to stay ahead of threats.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Mission & Vision</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 text-left">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Eye className="h-6 w-6 text-accent"/> Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To be the most respected and sought-after security solutions provider, known for our integrity, innovation, and unwavering commitment to client safety.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Heart className="h-6 w-6 text-accent" /> Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To protect our clients' assets and ensure their peace of mind through customized, intelligent, and reliable security services, delivered by a team of highly-trained professionals.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Our Strengths</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">What sets us apart in the security industry.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {strengths.map(item => (
                    <Card key={item.title} className="text-center">
                        <CardHeader className="items-center">
                            {item.icon}
                            <CardTitle className="mt-4">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
