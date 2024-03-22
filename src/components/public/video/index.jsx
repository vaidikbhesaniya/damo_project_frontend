const Header = () => {
    return (
        <header
        className="relative flex items-center justify-center h-screen mt-0 overflow-hidden"
      >
        
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/Bg-Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    );
  };
  
  export default Header;