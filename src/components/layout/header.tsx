import { MezonTalimLogo, MezonKengashiLogo, ADIAdvisoryLogo } from '@/components/icons';

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-around md:justify-between px-4 sm:px-6 lg:px-8">
        <MezonTalimLogo className="h-6 w-auto text-foreground/70" />
        <MezonKengashiLogo className="h-6 w-auto text-foreground/70" />
        <ADIAdvisoryLogo className="h-6 w-auto text-foreground/70" />
      </div>
    </header>
  );
};

export default Header;
