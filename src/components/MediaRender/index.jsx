const MediaRender = ({ url, className="" }) => {
    const isVideo = (url) => {
      const videoExtensions = ['mp4', 'webm', 'ogg'];
      const urlExtension = url.split('.').pop();
      return videoExtensions.includes(urlExtension);
    };
  
    return (
      <div className={`h-full w-full absolute left-0 right-0 top-0 bottom-0 z-[-1] panel-img ${className}`}>
        {isVideo(url) ? (
          <video
            loading="lazy"
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-[1.1] group-hover:scale-[1] transition-all duration-500"
          />
        ) : (
          <img
            loading="lazy"
            src={url}
            alt="Media"
            className="h-full w-full object-cover scale-[1.1] group-hover:scale-[1] transition-all duration-500"
          />
        )}
      </div>
    );
  };

  export default MediaRender