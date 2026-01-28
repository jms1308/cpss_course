import { MezonTalimLogo, MezonKengashiLogo, ADIAdvisoryLogo } from '@/components/icons';

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-16 items-center justify-center md:justify-between gap-4 md:gap-0 py-4 md:py-0 px-4 sm:px-6 lg:px-8">
        <MezonTalimLogo className="h-6 w-auto text-foreground/70" />
        <MezonKengashiLogo className="h-6 w-auto text-foreground/70" />
        <ADIAdvisoryLogo className="h-6 w-auto text-foreground/70" />
      </div>
    </header>
  );
};

export default Header;
