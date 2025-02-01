export default function Home(){
  return (
    <div className="relative flex sm:flex-row flex-col items-center justify-center min-h-screen bg-[#00AE35] font-[family-name:var(--font-noto-sans-thai)] mx-6 my-6">
      <div className="hidden sm:flex mr-4 md:mr-8 flex-col items-start">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>        
        <p className="text-xl text-neutral-200 mr-2">Pixel-Perfected Crafted by Dhanavadh Saito</p>                  
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
      </div>
      <div className="sm:hidden flex flex-col items-start my-8">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>
        <p className="text-xl text-neutral-200">Crafted by Dhanavadh Saito</p>
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
      </div>
      <iframe src='https://iframe-lmwn.dhanav.me/' width={375} height={812} className="flex flex-col justify-around items-center relative bg-white rounded-[48px]" allowFullScreen>
                                    

      </iframe>
      
    </div>
  );
}