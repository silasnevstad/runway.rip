import Carousel from "@/components/molecules/Carousel";
import Badge from "@/components/atoms/Badge";

const getRandomColor = () => {
    const colors = ['primary', 'green', 'blue', 'red', 'yellow', 'purple', 'orange', 'gray'];
    return colors[Math.floor(Math.random() * colors.length)];
};

const BadgeCarousel = ({
    words,
    shape = 'pill',
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
                    <Badge color={getRandomColor()} shape={shape}>
                        {word}
                    </Badge>
                </div>
            ))}
        </Carousel>
    );
};


export default BadgeCarousel;