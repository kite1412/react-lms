function ContentLayout({ menu, content, className = "" }) {
  return (
    <div className={`bg-white w-full h-full text-black ${className}`}>
      <div className="border-b-1 border-gray-400 w-full h-15 text-black flex items-center px-5">
        <span className="text-3xl font-bold">{menu}</span>
      </div>
      {content}
    </div>
  );
}

export default ContentLayout;
