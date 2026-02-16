import Image from "next/image";

const MediaRender = ({ url, className="" }) => {
    const isVideo = (url) => {
      const videoExtensions = ['mp4', 'webm', 'ogg'];
      const urlExtension = url.split('.').pop();
      return videoExtensions.includes(urlExtension);
    };
  
    return (
      <div className={`h-full w-full absolute left-0 right-0 top-0 bottom-0 z-[-1] panel-img overflow-hidden ${className}`}>
        {isVideo(url) ? (
          <video
            loading="lazy"
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full block object-cover"
          />
        ) : (
          <Image
            src={url}
            priority={true}
            fetchPriority="high"
            width={1720}
            height={1000}
            alt="Media"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 90vw"
            className="h-full w-full object-cover block"
          />
        )}
      </div>
    );
  };

  export default MediaRender