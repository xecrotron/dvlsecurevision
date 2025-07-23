import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Quote } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const leadershipTeam = [
  {
    name: 'General Armitage',
    title: 'Chairman & CEO',
    image: 'https://placehold.co/400x500',
    bio: 'A visionary leader with over 30 years of experience in global security operations and strategic command.',
    linkedin: '#',
    dataAiHint: 'male portrait',
    vision: "My vision for DVL Secure Vision is to be the undisputed global leader in security, not just by size, but by the trust we earn and the peace of mind we provide. We will innovate relentlessly and uphold the highest standards of integrity to protect our clients in an ever-evolving world. Our team of highly trained and experienced security personnel is committed to ensuring your safety and that of your property at all times. We understand the importance of security in today's world, and we have invested heavily in the latest technologies and equipment to give you the best Service possible."
  },
  {
    name: 'Colonel Eva Rostova',
    title: 'Chief Operating Officer',
    image: 'https://placehold.co/400x500',
    bio: 'Expert in operational efficiency and tactical deployment, ensuring flawless execution of all security protocols.',
    linkedin: '#',
    dataAiHint: 'female portrait',
    vision: "Operational excellence is the backbone of reliable security. My focus is on honing our processes, empowering our teams, and leveraging technology to ensure that DVL Secure Vision delivers flawless, efficient, and proactive protection every single day. In addition to our regular security Services, we also offer specialized security solutions tailored to meet your specific needs. Our team works closely with you to identify potential threats and vulnerabilities, and we develop a comprehensive security plan to mitigate those risks."
  },
  {
    name: 'Dr. Alistair Finch',
    title: 'Chief Technology Officer',
    image: 'https://placehold.co/400x500',
    bio: 'A pioneer in security technology, driving innovation in surveillance, cyber defense, and AI-driven threat analysis.',
    linkedin: '#',
    dataAiHint: 'male portrait',
    vision: "The future of security lies in the intelligent fusion of human expertise and cutting-edge technology. I am dedicated to building a tech ecosystem that anticipates threats, empowers our personnel, and provides our clients with an impenetrable shield of security. We are constantly striving to improve our Services, and we welcome your feedback and suggestions. Your satisfaction is our top priority, and we will do everything in our power to ensure that you receive the highest level of Service."
  },
];

const boardOfDirectors = [
    { name: 'Director 1', title: 'Lead Independent Director' },
    { name: 'Director 2', title: 'Chair of Audit Committee' },
    { name: 'Director 3', title: 'Chair of Compensation Committee' },
    { name: 'Director 4', title: 'Technology & Cybersecurity Expert' }
];

export default function LeadershipPage() {
  return (
    <div>
      <PageHeader title="Leadership" breadcrumb="Home / Leadership" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary">Our Executive Team</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced leaders guiding DVL Secure Vision's mission to provide unparalleled security and peace of mind.
          </p>
        </div>
        <div className="mt-12 space-y-20">
          {leadershipTeam.map((member) => (
            <div key={member.name} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <h3 className="text-2xl font-bold font-headline text-primary">A Message from our {member.title}</h3>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{member.vision}</p>
                    <Link href={member.linkedin} passHref>
                        <Button variant="outline" className="mt-6">
                            <Linkedin className="mr-2 h-4 w-4"/>
                            Connect on LinkedIn
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl">
                        <img src={member.image} alt={member.name} className="w-full h-auto object-cover" data-ai-hint={member.dataAiHint} />
                    </div>
                    <div className="mt-4 text-center">
                        <h4 className="text-xl font-bold">{member.name}</h4>
                        <p className="text-accent font-semibold">{member.title}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Board of Directors</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our board provides critical oversight and strategic guidance, ensuring our commitment to excellence and integrity.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {boardOfDirectors.map((director) => (
                    <Card key={director.name} className="text-center p-6">
                        <CardTitle className="text-lg">{director.name}</CardTitle>
                        <CardDescription>{director.title}</CardDescription>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
