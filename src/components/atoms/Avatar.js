import Image from 'next/image';

export const Avatar = ({src, alt, className, width = 50, height = 50}) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={`rounded-full border-2 border-gray-400 dark:border-gray-500 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${className}`}
            width={width}
            height={height}
        />
    );
}

export const LetterAvatar = ({ letter, className }) => {
    return (
        <div className={`flex justify-center items-center rounded-full border-2 border-gray-400 dark:border-gray-500 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${className} w-12 h-12`}>
            <span className="text-lg font-semibold">{letter}</span>
        </div>
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

