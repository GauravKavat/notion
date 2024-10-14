import Image from 'next/image';

export const Heros = () => {
  return (
    <div className="flex flex-col justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]">
          <Image
            src="/light.png"
            fill
            className="object-contain dark:hidden"
            alt={''}
          />
          <Image
            src="/dark.png"
            fill
            className="object-contain hidden dark:block"
            alt={''}
          />
        </div>
        <div className="relative h-[400]"></div>
      </div>
    </div>
  );
};
