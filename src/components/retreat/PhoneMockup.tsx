interface PhoneMockupProps {
  videoSrc: string;
}

const PhoneMockup = ({ videoSrc }: PhoneMockupProps) => {
  return (
    <div className="relative mx-auto w-[200px] md:w-[240px]">
      {/* Phone frame */}
      <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative bg-black rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-b-2xl z-10" />
          
          {/* Video container */}
          <div className="aspect-[9/19.5] w-full">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      
      {/* Decorative glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl -z-10" />
    </div>
  );
};

export default PhoneMockup;
