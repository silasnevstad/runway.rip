import Carousel from "@/components/molecules/Carousel";
import Badge from "@/components/atoms/Badge";
import { getRandomColor } from "@/utils/utils";

const getRandomShape = () => {
    const shapes = ['pill', 'square'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

const BadgeCarousel = ({
    words,
    autoPlay = false,
    interval = 3000,
    fadeLeft = false,
    fadeRight = false,
    mode = 'swipe',
    scrollSpeed = 1,
}) => {
    return (
        <Carousel
            autoPlay={autoPlay}
            interval={interval}
            fadeLeft={fadeLeft}
            fadeRight={fadeRight}
            mode={mode}
            scrollSpeed={scrollSpeed}
        >
            {words.map((word, index) => (
                <div key={index} className="flex justify-center items-center h-full px-2">
                    <Badge key={index} color={getRandomColor()} shape={getRandomShape()}>
                        {word}
                    </Badge>
                </div>
            ))}
        </Carousel>
    );
};


export default BadgeCarousel;