import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const leadershipTeam = [
  {
    name: 'General Armitage',
    title: 'Chairman & CEO',
    image: 'https://placehold.co/400x400',
    bio: 'A visionary leader with over 30 years of experience in global security operations and strategic command.',
    linkedin: '#',
    dataAiHint: 'male portrait'
  },
  {
    name: 'Colonel Eva Rostova',
    title: 'Chief Operating Officer',
    image: 'https://placehold.co/400x400',
    bio: 'Expert in operational efficiency and tactical deployment, ensuring flawless execution of all security protocols.',
    linkedin: '#',
    dataAiHint: 'female portrait'
  },
  {
    name: 'Dr. Alistair Finch',
    title: 'Chief Technology Officer',
    image: 'https://placehold.co/400x400',
    bio: 'A pioneer in security technology, driving innovation in surveillance, cyber defense, and AI-driven threat analysis.',
    linkedin: '#',
    dataAiHint: 'male portrait'
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
            Meet the experienced leaders guiding Sentinel Shield's mission to provide unparalleled security and peace of mind.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <Avatar className="w-32 h-32 border-4 border-accent">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{member.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
                <Link href={member.linkedin} passHref>
                  <Linkedin className="h-6 w-6 text-gray-400 hover:text-accent mx-auto mt-4 transition-colors"/>
                </Link>
              </CardContent>
            </Card>
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
