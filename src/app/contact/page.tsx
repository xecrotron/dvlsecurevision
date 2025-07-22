import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" breadcrumb="Home / Contact Us" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to help. Whether you have a question about our services or want to discuss your security needs, our team is ready to answer all your questions.
            </p>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <span>contact@sentinelshield.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <span>123 Security Lane, Protect City, PC 12345, United States</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-primary text-center">Our Location</h2>
            <div className="mt-8 h-96 rounded-lg overflow-hidden relative shadow-lg">
                <img src="https://placehold.co/1200x500" alt="Map to office" className="w-full h-full object-cover" data-ai-hint="world map" />
            </div>
        </div>
      </div>
    </div>
  );
}
