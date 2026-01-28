import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-card w-full relative h-14">
      <Image
        src="https://i.postimg.cc/R00syjgB/Screenshot-2026-01-29-at-00-51-35.png"
        alt="Shariah Standards Pro Course"
        fill
        className="object-contain"
      />
    </header>
  );
};

export default Header;
