import Image from 'next/image';

const FeaturedImage = ({ className="", alt, src, sizes }) => {

  return (
    <div className='w-full h-[45vw] relative rounded-[10px] overflow-hidden mb-[3vw] fadeup'>
        <Image className={className} alt={alt} src={src} fill sizes={sizes} quality={100} />;
    </div>
  )
};

export default FeaturedImage;