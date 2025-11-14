import React from "react";

const WhyChooseSection = () => {
  const features = [
    {
      title: "Instant Background Removal",
      desc: "Easy and fast to delete background online without any technical skills or installing complicated software.",
      imgBefore: "https://i.ibb.co/Rh0Rp0q/bg1-before.jpg",
      imgAfter: "https://i.ibb.co/Rh0Rp0q/bg1-before.jpg",
      tag: "",
    },
    {
      title: "High-Quality Result",
      desc: "Our bg remover delivers high-quality, clean photo cutting. Export transparent images in HD quality.",
      imgBefore: "https://i.ibb.co/3sZLs9y/bg2-before.jpg",
      imgAfter: "https://i.ibb.co/3sZLs9y/bg2-before.jpg",
      tag: "HD",
    },
    {
      title: "Easy Background Editing",
      desc: "Change photo background color or add entirely new backgrounds instantly with a single click.",
      imgBefore: "https://i.ibb.co/jfpPtCK/bg3-before.jpg",
      imgAfter: "https://i.ibb.co/jfpPtCK/bg3-before.jpg",
      tag: "",
    },
  ];

  return (
    <div className="py-14 bg-white flex flex-col items-center px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
        Why Choose <span className="text-orange-500">Image Editor?</span>
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mb-10">
        Choose Image Editor to remove backgrounds effortlessly, with precise,
        automated tools that deliver clean, professional results every time.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-purple-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative flex justify-center mb-4">
              {/* Images side by side */}
              <div className="flex justify-center items-center overflow-hidden rounded-lg">
                <div className="relative flex">
                  <img
                    src={item.imgBefore}
                    alt="Before"
                    className="w-36 h-36 object-cover rounded-l-lg"
                  />
                  <img
                    src={item.imgAfter}
                    alt="After"
                    className="w-36 h-36 object-cover rounded-r-lg"
                  />
                </div>
                {item.tag && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
