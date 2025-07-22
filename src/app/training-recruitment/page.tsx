import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ClipboardList, Target, UserCheck, Shield, BrainCircuit } from 'lucide-react';

const trainingModules = [
    "Physical Fitness and Unarmed Combat",
    "Access Control and Patrolling Techniques",
    "Emergency Response and First Aid",
    "Customer Service and Communication Skills",
    "Threat Assessment and Risk Management",
    "Operation of Security and Surveillance Equipment",
];

export default function TrainingRecruitmentPage() {
  return (
    <div>
      <PageHeader title="Training & Recruitment" breadcrumb="Home / Training & Recruitment" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Forging Elite Security Professionals</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our strength lies in our people. Sentinel Shield's rigorous recruitment and state-of-the-art training programs ensure that every member of our team meets the highest standards of professionalism, skill, and integrity.
                </p>
                <Button className="mt-6" asChild><a href="/career">Join Our Team</a></Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://placehold.co/600x400" alt="Security training session" className="w-full h-full object-cover" data-ai-hint="security training" />
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Our Recruitment Process</h2>
                <p className="mt-2 text-lg text-muted-foreground">A multi-stage process to select the best candidates.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <Card>
                    <CardHeader className="items-center">
                        <ClipboardList className="h-10 w-10 text-accent mb-4"/>
                        <CardTitle>Application & Screening</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="items-center">
                        <UserCheck className="h-10 w-10 text-accent mb-4"/>
                        <CardTitle>Aptitude & Physical Tests</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="items-center">
                        <Target className="h-10 w-10 text-accent mb-4"/>
                        <CardTitle>In-depth Interview</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="items-center">
                         <Check className="h-10 w-10 text-accent mb-4"/>
                        <CardTitle>Background Verification</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Comprehensive Training Program</h2>
                <p className="mt-2 text-lg text-muted-foreground">Equipping our personnel with the skills to excel.</p>
            </div>
            <Card className="mt-12">
                <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {trainingModules.map((module, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                            <p>{module}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://placehold.co/600x400" alt="Intensive training drill" className="w-full h-full object-cover" data-ai-hint="obstacle course" />
            </div>
            <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Intensive & Specialized Training</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Beyond the fundamentals, our operatives undergo intensive training scenarios that simulate real-world threats. This advanced training ensures they can think critically under pressure and respond effectively to any incident.
                </p>
                <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4">
                        <Shield className="h-7 w-7 text-accent flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Scenario-Based Drills</h4>
                            <p className="text-muted-foreground text-sm">Regular, realistic drills for situations like active shooters, medical emergencies, and facility breaches.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <BrainCircuit className="h-7 w-7 text-accent flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Psychological Preparedness</h4>
                            <p className="text-muted-foreground text-sm">Training on de-escalation techniques, stress management, and maintaining composure in high-stakes environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
