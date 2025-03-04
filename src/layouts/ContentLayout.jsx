import gradientBackground from "../assets/gradient-background.svg";

function ContentLayout({ menu, content, className = "" }) {
  return (
    <div className={`bg-white w-full h-full relative text-black ${className}`}>
      <span className={`text-3xl font-bold absolute z-1 mt-6 ms-6`}>{menu}</span>
      <div className={`absolute mt-20 ms-6 z-2`}>
        {content}
      </div>
      <img src={gradientBackground} className="sticky top-0" />
    </div>
  );
}

export default ContentLayout;