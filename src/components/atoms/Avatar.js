import Image from 'next/image';

const Avatar = ({src, alt, className}) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={`rounded-full border-2 border-gray-300 ${className}`}
            width={50}
            height={50}
        />
    );
}

export const AvatarList = ({ avatars }) => {
    return (
        <div className="flex">
            {avatars.map((avatar, index) => (
                <Avatar key={index} src={avatar.src} alt={avatar.alt} className={index > 0 ? "-ml-4" : ""}/>
            ))}
        </div>
    );
}

export default AvatarList;

