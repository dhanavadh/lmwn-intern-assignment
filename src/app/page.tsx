import Image from 'next/image';
import Link from 'next/link';
export default function Home(){
  return (
    <div className="relative flex sm:flex-row flex-col items-center justify-center min-h-screen bg-[#00AE35] font-[family-name:var(--font-noto-sans-thai)] mx-6 my-6">
      <div className="hidden sm:flex mr-4 md:mr-8 flex-col items-start">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>        
        <p className="text-xl text-neutral-200 mr-2">Pixel-Perfected Crafted by Dhanavadh Saito</p>                  
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
        
        <div className='flex gap-6'>
          <div className='flex flex-col'>
            <p className="mt-2 text-lg text-neutral-50 font-semibold">GitRepo</p>
            <div className='flex gap-4'>
              <div className="flex items-center justify-center">
                <Image src="/github-mark-white.svg" width={16} height={16} alt="GitHub Logo" className='mr-2'/>
                <Link href="https://github.com/dhanavadh/lmwn-assignment-frame" target='_blank' className='text-vase text-neutral-200 hover:underline'>Prototype</Link>
              </div>
              <div className="flex items-center justify-center">
                <Image src="/github-mark-white.svg" width={16} height={16} alt="GitHub Logo" className='mr-2'/>
                <Link href="https://github.com/dhanavadh/lmwn-intern-assignment" target='_blank' className='text-vase text-neutral-200 hover:underline'>This Site</Link>
              </div>
            </div>          
          </div>
          <div className='flex flex-col'>
            <p className="mt-2 text-lg text-neutral-50 font-semibold">Documentation</p>
            <Link href="https://www.figma.com/slides/l2lUYKE8vm99KOJnF8qNk3/Dhanavadh_Saito_UX_Assignment?node-id=4-816&t=eeKGRYJFGQN3L3LO-1" target='_blank' className='text-vase text-neutral-200 hover:underline'>Figma Slide</Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col items-start my-8">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>
        <p className="text-xl text-neutral-200">Crafted by Dhanavadh Saito</p>
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
        <div className='sm:flex gap-6'>
          <div className='flex flex-col'>
            <p className="mt-2 text-lg text-neutral-50 font-semibold">GitRepo</p>
            <div className='flex gap-4'>
              <div className="flex items-center justify-center">
                <Image src="/github-mark-white.svg" width={16} height={16} alt="GitHub Logo" className='mr-2'/>
                <Link href="https://github.com/dhanavadh/lmwn-assignment-frame" target='_blank' className='text-vase text-neutral-200 hover:underline'>Prototype</Link>
              </div>
              <div className="flex items-center justify-center">
                <Image src="/github-mark-white.svg" width={16} height={16} alt="GitHub Logo" className='mr-2'/>
                <Link href="https://github.com/dhanavadh/lmwn-intern-assignment" target='_blank' className='text-vase text-neutral-200 hover:underline'>This Site</Link>
              </div>
            </div>          
          </div>
          <div className='flex flex-col'>
            <p className="mt-2 text-lg text-neutral-50 font-semibold">Documentation</p>
            <Link href="https://www.figma.com/slides/l2lUYKE8vm99KOJnF8qNk3/Dhanavadh_Saito_UX_Assignment?node-id=4-816&t=eeKGRYJFGQN3L3LO-1" target='_blank' className='text-vase text-neutral-200 hover:underline'>Figma Slide</Link>
          </div>
        </div>
      </div>
      <iframe src='https://iframe-lmwn.dhanav.me/' width={375} height={812} className="flex flex-col justify-around items-center relative bg-white rounded-[48px]" allowFullScreen>
                                    

      </iframe>
      
    </div>
  );
}