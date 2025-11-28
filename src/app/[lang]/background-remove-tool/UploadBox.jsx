import React, { useRef, useState } from "react";

const UploadBox = () => {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="relative">

                {/* Upload Box */}
                <div
                    onClick={() => fileInputRef.current.click()}
                    className="w-[500px] h-[230px] bg-[red] rounded-2xl border-[2px] border-dashed border-[#B8C7FF] 
                     flex justify-center items-center cursor-pointer 
                     relative"
                    style={{ padding: "30px" }}   // 30px spacing between border & content
                >
                    {/* Plus Icon */}
                    <div className="w-12 h-12 bg-[#7B61FF] rounded-full flex justify-center items-center text-white text-3xl shadow-lg">
                        +
                    </div>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                </div>

                {/* Uploaded Image Preview */}
                {preview && (
                    <img
                        src={preview}
                        className="absolute bottom-[-30px] left-[50px] w-[300px] h-[180px] object-cover 
                      rounded-xl shadow-xl"
                    />
                )}
            </div>
        </div>
    );
};

export default UploadBox;
