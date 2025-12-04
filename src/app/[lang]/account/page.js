import React from 'react'

export default function AccountPage() {
    return (
        <div className="max-w-[1398px] mx-auto md:pt-[50px] pt-[30px] md:pb-[100px] pb-[50px] px-[15px] flex flex-col sm:gap-8 gap-[30px] items-center">
            {/* Account Information */}
            <section className="w-full  rounded-xl pt-5 sm:pb-[30px] pb-5 " style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}>
                <div className='max-w-[1249px] mx-auto px-5'>
                    <h2 className="font-black sm:text-[26px] text-2xl  leading-[30px] text-[#181D20] sm:pb-4 pb-3 border-b border-[#D8D8D8]" >Account Information</h2>
                    <div className="sm:flex block flex-row items-center justify-between gap-8 sm:mt-[30px] mt-5">
                        <div className="flex-1 flex flex-col sm:gap-2 gap-[6px] border-b border-[#D8D8D8] sm:pb-[22px] pb-4">
                            <div className="font-bold sm:text-lg text-base leading-6 text-[#878787] ">EMAIL ADDRESS</div>
                            <div className="flex items-center justify-between gap-2 ">
                                <span className="sm:text-lg text-base leading-6 font-bold text-[#2A2A33] ">admin.bullet123@gmail.com</span>
                                <button className="" aria-label="Edit Email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.05 2.71659L12.7833 1.98325C13.65 1.11659 15.1583 1.11659 16.025 1.98325L16.6167 2.57492C16.8301 2.78657 16.9996 3.0384 17.1152 3.31588C17.2308 3.59336 17.2903 3.89098 17.2903 4.19159C17.2903 4.49219 17.2308 4.78981 17.1152 5.06729C16.9996 5.34477 16.8301 5.5966 16.6167 5.80825L15.8833 6.54159L12.05 2.70825V2.71659ZM11.1667 3.59992L3.57501 11.1916C3.33334 11.4333 3.18334 11.7499 3.15834 12.0916L2.93334 14.5333C2.90834 14.8416 3.01667 15.1416 3.23334 15.3666C3.43334 15.5666 3.69167 15.6749 3.96667 15.6749H4.05834L6.50001 15.4499C6.84167 15.4166 7.15834 15.2666 7.40001 15.0249L14.9917 7.43325L11.1583 3.59992H11.1667ZM18.9583 18.3333C18.9583 17.9916 18.675 17.7083 18.3333 17.7083H1.66667C1.32501 17.7083 1.04167 17.9916 1.04167 18.3333C1.04167 18.6749 1.32501 18.9583 1.66667 18.9583H18.3333C18.675 18.9583 18.9583 18.6749 18.9583 18.3333Z" fill="#878787" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col sm:gap-2 gap-[6px] sm:border-b border-b-0 border-[#D8D8D8]  sm:pb-[22px] pb-0 sm:mt-0  mt-5">
                            <div className="font-bold sm:text-lg text-base leading-6 text-[#878787]">MEMBER SINCE</div>
                            <div className="sm:text-lg text-base leading-6 font-bold text-[#2A2A33]">January 01, 2024</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Billing Information */}
            <section className="w-full  rounded-xl py-5" style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}>
                <div className='max-w-[1249px] mx-auto px-5'>
                    <h2 className="font-black sm:text-[26px] text-2xl leading-[30px] text-[#181D20] sm:pb-4 pb-5 sm:border-b border-b-0 border-[#D8D8D8]">Billing Information</h2>
                    <form className="flex flex-col gap-4 sm:mt-[30px] mt-0">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">First Name</label>
                                <input type="text" placeholder="First Name" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">Last Name</label>
                                <input type="text" placeholder="Last Name" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">Street Address</label>
                            <input type="text" placeholder="3600 S Las Vegas Blvd, Las Vegas, NV 89109, United States" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">Country</label>
                                <input type="text" placeholder="United States America (USA)" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">City</label>
                                <input type="text" placeholder="Las Vegas" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm leading-4 font-medium text-[#2A2A33] mb-2">Pincode</label>
                                <input type="text" placeholder="015242" className="w-full border border-[#C9B6FF] bg-[#FAF9FE] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8256FF]" />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-2 py-2.5 rounded-md bg-[#8256FF] text-white font-semibold text-base shadow-sm hover:bg-[#6D50F4] transition">Save Order</button>
                    </form>
                </div>
            </section>

            {/* Subscription */}
            <section className="w-full  rounded-xl py-5" style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}>
                <div className='max-w-[1249px] mx-auto px-5'>
                    <h2 className="font-black sm:text-[26px] text-2xl leading-[30px] text-[#181D20] pb-4 border-b border-[#D8D8D8]">Subscription</h2>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                        <div className="text-xl leading-6 font-bold">06 Month Subscription Plan</div>
                        <button className=" sm:w-[207px] w-full h-[44px] rounded-md font-bold text-xl leading-6 border border-[#8256FF] text-[#8256FF] bg-white hover:bg-[#f5f0ff] transition">Cancel Subscription</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
