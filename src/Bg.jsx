const Bg = () => {
  return (
    <>
      <div className="mb-80 fixed left-0 top-0 w- h-full z-[1]">
        <div className="h-dvh w-[70%] relative bg-slate-50 z-100 overflow-hidden justify-center mx-auto backdrop-blur-sm opacity-90 shadow-xl">
          <div className="absolute left-[-20%] top-[-10%] bg-[#B9C8E7] rounded-full w-full aspect-square z-31 blur-3xl"></div>
          <div className="absolute left-[40%] top-[-5%] bg-[#C3AAE8] rounded-full w-full aspect-square z-33 blur-3xl opacity-50"></div>
          <div className="absolute left-[-40%] top-[30%] bg-gradient-to-r from-bg-[#A8C2DF] to-sky-100 rounded-full w-full aspect-square z-33 blur-3xl"></div>
          <div className="absolute left-[-40%] top-[50%] bg-gradient-to-r from-blue-50 to-sky-100 rounded-full w-full aspect-square z-34 blur-3xl"></div>
          <div className="absolute left-[40%] top-[20%] bg-gradient-to-r from-bg-[#D6D3F2] to-indigo-50 rounded-full w-full aspect-square z-30 blur-3xl"></div>
          <div className="absolute left-[20%] top-[60%] bg-gradient-to-r from-teal-100 to-teal-50 rounded-full w-full aspect-square z-32 blur-3xl opacity-30"></div>
        </div>
      </div>
    </>
  );
};
export default Bg;
