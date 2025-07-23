import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Bot, RadioTower, ShieldAlert } from 'lucide-react';

const techItems = [
    {
        icon: <Camera className="h-10 w-10 text-accent" />,
        title: "Advanced Surveillance Systems",
        description: "High-definition CCTV, thermal imaging, and AI-powered video analytics for proactive threat detection and real-time monitoring."
    },
    {
        icon: <Bot className="h-10 w-10 text-accent" />,
        title: "AI & Machine Learning",
        description: "Utilizing predictive analytics to identify potential security risks, optimize patrol routes, and automate incident reporting for faster response."
    },
    {
        icon: <RadioTower className="h-10 w-10 text-accent" />,
        title: "Integrated Command Center",
        description: "A state-of-the-art central hub that connects all security assets, enabling seamless communication and coordinated response."
    },
    {
        icon: <ShieldAlert className="h-10 w-10 text-accent" />,
        title: "Cybersecurity & Data Protection",
        description: "Robust protocols and technologies to protect your digital assets and sensitive information from cyber threats."
    },
];

export default function TechnologyPage() {
  return (
    <div>
      <PageHeader title="Technology" breadcrumb="Home / Technology" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Innovating for a Safer Tomorrow</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                At Sentinel Shield, we believe technology is a critical force multiplier in modern security. We invest in and integrate the latest technological advancements to provide our clients with intelligent, efficient, and effective protection.
            </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://placehold.co/600x400" alt="Futuristic control room" className="w-full h-full object-cover" data-ai-hint="futuristic control room" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-primary">Our Tech-Forward Approach</h3>
                <p className="mt-4 text-muted-foreground">
                    Our strategy combines the irreplaceable value of human intuition with the power of technology. This fusion allows us to be proactive rather than reactive, identifying and neutralizing threats before they escalate. Our systems provide our on-ground personnel with the critical information they need to make smart, swift decisions.
                </p>
            </div>
        </div>
        
        <div className="mt-24">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techItems.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex-row items-center gap-4">
                            {item.icon}
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
}
