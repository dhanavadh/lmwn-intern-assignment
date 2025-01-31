export default function Home() {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center min-h-screen bg-[#00AE35] font-[family-name:var(--font-noto-sans-thai)] mx-6 my-6">
      <div className="hidden sm:flex mr-4 md:mr-8 flex-col items-start">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>
        <p className="text-xl text-neutral-200">Pixel-Perfected Crafted by <a className="text-neutral-50 font-semibold hover:underline underline-offset-4" href="https://dhanav.me/" target="_blank">Dhanavadh Saito</a></p>
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
      </div>
      <div className="sm:hidden flex flex-col items-start my-8">
        <p className="text-2xl font-semibold text-neutral-50">LMWN UX Assignment – Prototype</p>
        <p className="text-xl text-neutral-200">Crafted by Dhanavadh Saito</p>
        <p className="mt-2 text-lg text-neutral-50 font-semibold">Specification</p>
        <p className="text-base text-neutral-200">Portrait Dimension: iPhone 13 mini/375x812 pt (1125x2436 px @3x)</p>
      </div>
      <div className="flex flex-col justify-around items-center relative w-[375px] h-[812px] ">
                                    
        <div className="flex flex-col justify-start w-[375px] h-[812px] overflow-x-auto scrollbar-hide bg-white rounded-t-[48px]">
          
            <div className="w-[375px] h-[350px] bg-gradient-to-b from-[#920107] via-[#007A25] to-[#004716]  rounded-b-[20px]">
            <div className="flex justify-center h-[62px]">
              <img src="asset/Status_Bar_W.svg" className="absolute"></img>
              <img src="asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
            </div>            
              <div className="mx-4 z-10">
                <div className="flex flex-col items-start mt-[18px]">
                  <p className="text-base font-semibold text-white">สวัสดี โคนี่</p>
                  <p className="text-lg font-semibold text-white mt-[7px]">Bonchon ลดสูงสุด ฿60*</p>
                  <div className="flex items-center justify-between mt-[14px] bg-black bg-opacity-30 w-full h-[50px] rounded-lg shadow-md">
                    <div className="flex items-center">
                      <img src="asset/icon/location.svg" className="mx-[14px] my-[15px] w-[24px]"></img>
                      <p className="text-[14px] text-white font-semibold max-w-[230px] truncate">อาคารมหาจักรีสิรินธร, ถนนพญาไท, แขวงวังใหม่</p>
                    </div>
                    <div>                      
                      <img src="asset/icon/arrow-r.svg" className="mx-[14px] my-[15px] w-[20px]"></img>
                    </div>
                  </div>

                  {/* Item Group */}
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-3 mt-4 w-full fill-">
                            <div className="flex items-center justify-between h-[80px] w-full bg-[#f9f9f9] rounded-lg shadow-md overflow-hidden">
                              <p className="ml-6 text-[14px] font-semibold">สั่งอาหาร</p>
                              <div className="flex flex-col items-center h-full justify-between">
                                <a className="flex items-start mt-[3px] px-1 py-[0.5px] bg-[#fe1f32] rounded-full text-[11px] text-white font-semibold">ลด ฿100<a className="text-[6px]">*</a></a>
                                <img src="/asset/menu/orderfood.png" className="h-[58px] pt-[2px] mx-[10px]"></img>
                              </div>
                            </div>                
                            <div className="flex items-center justify-between h-[80px] w-full bg-[#f9f9f9] rounded-lg shadow-md overflow-hidden">
                              <p className="ml-6 text-[14px] font-semibold">เรียกรถ</p>
                              <div className="flex flex-col items-center h-full justify-between">
                              <a className="mt-[3px] px-1 py-[0.5px] text-[#fe1f32] rounded-full text-[11px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                              <img src="/asset/menu/drive.png" className="h-[58px] pt-[2px] rounded-lg"></img>
                              </div>
                            </div>                                                                          
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4 w-full">
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md ">
                              <div className="flex flex-col items-end h-full">
                                <a className="px-1 pb-[0.5px] mt-[8px] mb-[2px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                                <img src="/asset/menu/messenger.png" className="w-[54px] pt-[2px]"></img>
                              </div>
                            </div>
                            <p className="mt-[10px] text-[15px] font-semibold">แมสเซนเจอร์</p>
                          </div>                      
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md">
                              <div className="flex flex-col items-end h-full">
                                <a className="px-1 pb-[0.5px] mt-[8px] mb-[2px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                                <img src="/asset/menu/mart.png" className="w-[54px] pt-[2px]"></img>
                              </div>
                            </div>
                            <p className="mt-[10px] text-[15px] font-semibold">สั่งของ</p>
                          </div>                      
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md">
                              <div className="flex flex-col items-end h-full">
                                <a className="px-1 pb-[0.5px] mt-[8px] mb-[8px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                                <img src="/asset/menu/coupon.png" className="w-[54px] pt-[2px]"></img>
                              </div>
                            </div>
                            <p className="mt-[10px] text-[15px] font-semibold">แพ็กเกจ</p>
                          </div>                                          
                    </div>
                  </div>

                  <div className="flex items-center justify-center h-[112px] w-full mt-[26px] bg-green-200 rounded-[5px]">
                    <p>Ads</p>
                  </div>

                  <div className="flex w-full h-[203px] bg-yellow-500 rounded-[5px] mt-6">

                  </div>
                  <div className="flex w-full h-[203px] bg-yellow-500 rounded-[5px] mt-6">

                  </div>

                </div>
              </div>              
            </div>          
        </div>
        
        <div className="flex flex-col justify-center bg-white border-t-[1px] border-neutral-300 rounded-b-[48px] h-[84px]">
          <div className="flex justify-center flex-cols-4 h-[50px] mx-4 gap-12">
            <div className="flex flex-col items-center pt-2">              
              <img src="/asset/icon/home.svg" className="h-6"></img>
              <p className="mt-2 text-[12px] font-medium text-[#00AE35]">หน้าแรก</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/asset/icon/order.svg" className="h-6"></img>
              <p className="mt-2 text-[12px] font-medium">คำสั่งซื้อ</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/asset/icon/noti.svg" className="h-6"></img>
              <p className="mt-2 text-[12px] font-medium">กล่องข้อความ</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/asset/icon/other.svg" className="h-6"></img>
              <p className="mt-2 text-[12px] font-medium">อื่นๆ</p>
            </div>
            
          </div>
          <div className="h-[34px]">
            <img src="/asset/Home_Indicator.svg" className="h-full w-full"></img>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
