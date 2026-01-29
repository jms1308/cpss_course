import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-card/50 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="text-muted-foreground mt-2">info@mezonkengashi.uz</p>
            <p className="text-muted-foreground">+998901097799</p>
          </div>
          <div className="text-center md:text-right text-muted-foreground">
            <p>A professional course program for Islamic finance experts.</p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CPSS Course Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
