import { MezonTalimLogo, MezonKengashiLogo, ADIAdvisoryLogo } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  return (
    <header className="bg-card w-full pt-6">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <MezonTalimLogo className="h-6 text-foreground/80" />
        <Separator orientation="vertical" className="h-6 hidden sm:block bg-border" />
        <MezonKengashiLogo className="h-7 text-foreground/80" />
        <Separator orientation="vertical" className="h-6 hidden sm:block bg-border" />
        <ADIAdvisoryLogo className="h-6 text-foreground/80" />
      </div>
    </header>
  );
};

export default Header;
