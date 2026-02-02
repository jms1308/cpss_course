import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-card w-full relative h-20">
      <Image
        src="https://i.postimg.cc/y6ytvbRg/Screenshot-2026-02-02-at-12-29-40.png"
        alt="Shariah Standards Pro Course"
        fill
        className="object-contain"
      />
    </header>
  );
};

export default Header;
