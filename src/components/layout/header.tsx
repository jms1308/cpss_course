import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-card w-full relative h-14 mt-4">
      <Image
        src="https://i.postimg.cc/CxcJGcS2/Screenshot-2026-01-29-at-00-53-01.png"
        alt="Shariah Standards Pro Course"
        fill
        className="object-contain"
      />
    </header>
  );
};

export default Header;
