"use client";

const PoweredBy = () => {
  return (
    <div className="bg-black py-2 text-center relative">
      <p className="text-white text-sm font-normal">
        Powered by{" "}
        <a
          href="https://icod.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7c4ce0] text-base font-bold"
        >
          icōd.ai
        </a>
      </p>
    </div>
  );
};

export default PoweredBy;
