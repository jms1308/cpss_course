import { Library, Award, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-center gap-12 px-4 sm:px-6 lg:px-8">
        <Library className="h-8 w-8 text-foreground/70" />
        <Award className="h-8 w-8 text-foreground/70" />
        <Users className="h-8 w-8 text-foreground/70" />
      </div>
    </header>
  );
};

export default Header;
