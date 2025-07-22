"use client";

import { useState } from 'react';
import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const images = [
  { src: "https://placehold.co/600x400", alt: "Training session" , dataAiHint: "training session" },
  { src: "https://placehold.co/600x400", alt: "Guard on duty", dataAiHint: "security guard" },
  { src: "https://placehold.co/600x400", alt: "Event security team", dataAiHint: "event security" },
  { src: "https://placehold.co/600x400", alt: "Control room monitoring", dataAiHint: "control room" },
  { src: "https://placehold.co/600x400", alt: "K9 unit", dataAiHint: "dog security" },
  { src: "https://placehold.co/600x400", alt: "Corporate security", dataAiHint: "corporate security" },
];

const videos = [
  {
    thumbnail: "https://placehold.co/600x400",
    alt: "Corporate promo video",
    videoId: "dQw4w9WgXcQ", // Example video ID
    dataAiHint: "corporate video"
  },
  {
    thumbnail: "https://placehold.co/600x400",
    alt: "Training highlights",
    videoId: "Y_plhk1FUQA", // Example video ID
    dataAiHint: "training course"
  },
];

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string, alt: string } | null>(null);

  return (
    <div>
      <PageHeader title="Gallery" breadcrumb="Home / Gallery" />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="images"><ImageIcon className="mr-2"/> Images</TabsTrigger>
            <TabsTrigger value="videos"><PlayCircle className="mr-2"/> Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="images">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer group">
                      <CardContent className="p-0">
                        <img src={image.src} alt={image.alt} width={600} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={image.dataAiHint} />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                     <img src={image.src} alt={image.alt} width={1200} height={800} className="w-full h-auto" data-ai-hint={image.dataAiHint}/>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Card className="overflow-hidden cursor-pointer group relative">
                            <CardContent className="p-0">
                                <img src={video.thumbnail} alt={video.alt} width={600} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={video.dataAiHint} />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
                                </div>
                            </CardContent>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 aspect-video">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.alt}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
