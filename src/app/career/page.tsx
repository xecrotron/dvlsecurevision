import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CareerForm } from './career-form';

export default function CareerPage() {
  return (
    <div>
      <PageHeader title="Careers" breadcrumb="Home / Careers" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Join Our Elite Team</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    At DVL Secure Vision, we are always looking for dedicated, professional, and vigilant individuals to join our ranks. We offer a dynamic work environment, continuous training, and opportunities for growth.
                </p>
                <p className="mt-4 text-muted-foreground">
                    If you are ready to take on a new challenge and make a difference, we invite you to submit your application through the form.
                </p>

                <div className="mt-8 space-y-4">
                    <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="text-xl font-semibold">Competitive Benefits</h4>
                      <p className="mt-2 text-muted-foreground">We offer a comprehensive benefits package, including health insurance, retirement plans, and paid time off.</p>
                    </div>
                     <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="text-xl font-semibold">Professional Growth</h4>
                      <p className="mt-2 text-muted-foreground">Access to world-class training programs to advance your skills and career in the security industry.</p>
                    </div>
                     <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="text-xl font-semibold">A Culture of Respect</h4>
                      <p className="mt-2 text-muted-foreground">We foster a diverse and inclusive workplace where every team member is valued and respected.</p>
                    </div>
                </div>
            </div>
            <div>
                 <Card>
                    <CardHeader>
                        <CardTitle>Submit Your Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CareerForm />
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}