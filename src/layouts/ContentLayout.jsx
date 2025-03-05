import GradientBackground from "../assets/gradient-background.svg?react";

function ContentLayout({ menu, content, className = "" }) {
  return (
    <div className={`bg-white w-full h-full overflow-x-hidden text-black ${className} relative`}>
      <GradientBackground className="absolute w-screen h-60 " />

      <div className="w-full h-15 text-black flex items-center px-5 relative z-1">
        <span className="text-3xl font-bold">{menu}</span>
      </div>
      {content}
    </div>
  );
}

export default ContentLayout;
