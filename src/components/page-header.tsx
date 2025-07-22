import Image from 'next/image';

type PageHeaderProps = {
  title: string;
  breadcrumb: string;
  imageUrl?: string;
};

export default function PageHeader({ title, breadcrumb, imageUrl = "https://placehold.co/1920x400" }: PageHeaderProps) {
  return (
    <div className="relative h-64 md:h-80 w-full">
      <Image 
        src={imageUrl} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        className="brightness-50"
        data-ai-hint="abstract texture"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{title}</h1>
        <p className="mt-2 text-lg text-gray-300">{breadcrumb}</p>
      </div>
    </div>
  );
}
