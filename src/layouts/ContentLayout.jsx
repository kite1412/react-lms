import GradientBackground from "../assets/gradient-background.svg?react";

function ContentLayout({ menu, content, className = "" }) {
  return (
    <div
      className={`bg-white w-full h-full overflow-x-hidden text-black ${className} relative`}
    >
      <GradientBackground className="absolute w-screen h-60 max-md:h-50" />

      <div className="w-full h-15 text-black flex items-center max-sm:px-5 px-20 relative z-1">
        <span className="text-3xl font-bold">{menu}</span>
      </div>
      {content}
    </div>
  );
}

export default ContentLayout;
