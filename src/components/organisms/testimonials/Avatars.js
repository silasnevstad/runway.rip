import AvatarList from "@/components/molecules/AvatarList";
import StarRating from "@/components/atoms/StarRating";

export default function AvatarsTestimonial({
    className = "",
    text = "Trusted by 1000+ people",
    avatars = [
        { src:"/avatar1.png", alt: "Avatar 1" },
        { src:"/avatar2.png", alt: "Avatar 2" },
        { src:"/avatar3.png", alt: "Avatar 3" },
        { src:"/avatar1.png", alt: "Avatar 1" },
    ],
}) {
    return (
        <section className={`flex items-center space-x-4 justify-center pb-10 ${className}`}>
            <AvatarList
                avatars={avatars}
            />
            <div className="flex flex-col gap-1">
                <StarRating rating={5} />
                <p className="text-1xl">{text}</p>
            </div>
        </section>
    );
}

