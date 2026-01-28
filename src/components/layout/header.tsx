import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-card w-full py-6">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src="https://i.postimg.cc/SxrGfD79/Screenshot-2026-01-29-at-00-10-21.png"
          alt="Partner logos"
          width={600}
          height={40}
          className="object-contain px-4"
        />
      </div>
    </header>
  );
};

export default Header;
