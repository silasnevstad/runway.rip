import { AvatarList } from "@/components/atoms/Avatar";
import StarRating from "@/components/atoms/StarRating";

export default function TrustBy() {
  return (
    <section className="flex items-center space-x-4 justify-center">
        <AvatarList
            avatars={[
                {name: "Elon Musk", src: "/images/elon-avatar.png"},
                {name: "Elon Musk", src: "/images/elon-avatar.png"},
                {name: "Elon Musk", src: "/images/elon-avatar.png"},
                {name: "Elon Musk", src: "/images/elon-avatar.png"},
            ]}
        />
        <div className="flex flex-col gap-1">
            <StarRating numStars={5} />

            <p className="text-1xl">Trusted by 1000+ people</p>
        </div>
    </section>
  );
}

