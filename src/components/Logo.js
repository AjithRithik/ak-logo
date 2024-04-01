import * as htmlToImage from "html-to-image";

export const Logo = () => {
  const download = (dataUrl, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = dataUrl;
    link.click();
  };

  const converImage = () => {
    htmlToImage
      .toPng(document.getElementById("my-logo"))
      .then(function (dataUrl) {
        download(dataUrl, "my-logo.png");
      });
  };

  return (
    <>
      <div className="p-10 bg-white rounded-md">
        <div id="my-logo" className="relative w-80 h-80 flex justify-center items-center flex-col">
          <div className="bg-blue-800 rounded-full w-32 h-32 relative">
            <div className="bg-purple-700 h-[102px] w-[102px] rounded-full absolute -translate-y-2 -translate-x-3 bg-opacity-70 z-20" />
            <div className="bg-yellow-500 h-[90px] w-[90px] rounded-full absolute right-0 translate-x-6 -translate-y-2 bg-opacity-70 z-10" />
            <div className="bg-red-500 h-[84px] w-[84px] rounded-full absolute bottom-0 right-0 -translate-x-1 translate-y-2 bg-opacity-70 z-30" />
            <div className="bg-red-500 h-4 w-4 rounded-full absolute right-0 -translate-x-11 -translate-y-6 bg-opacity-70" />
            <div className="bg-purple-700 h-2 w-2 rounded-full absolute left-0 -translate-x-7 translate-y-16 bg-opacity-70" />
            <div className="bg-yellow-500 h-3 w-3 rounded-full absolute left-0 top-0 -translate-x-2 translate-y-28 bg-opacity-70" />
            <div className="bg-red-500 h-3 w-3 rounded-full absolute right-0 top-0 translate-x-4 translate-y-20 bg-opacity-70" />
            <div className="bg-blue-800 h-4 w-4 rounded-full absolute right-0 top-0 translate-x-10 translate-y-14 bg-opacity-70" />
            <div className="text-white absolute z-50 text-6xl font-serif tracking-tighter left-6 top-4">{`</>`}</div>
          </div>
          <div className="pl-9" style={{ fontFamily: "Good Dog" }}>
            <div className="text-center text-7xl pt-1">Ajithkumar</div>
            <div className="text-center text-4xl pt-0.5 text-gray-700">Ak</div>
          </div>
        </div>
      </div>

      <div className="ml-8 font-sans">
        <button
          className="border-none rounded-lg shadow-none bg-purple-700 px-3 py-1 text-white uppercase font-bold"
          onClick={converImage}
        >
          Convert
        </button>
      </div>
    </>
  );
};
