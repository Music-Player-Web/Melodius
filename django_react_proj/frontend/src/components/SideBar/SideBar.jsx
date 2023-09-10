import React from "react";
import "./waveAnimation.css";
import "./progressCircle.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 20;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={strokePct !== circ ? color : ""}
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
};

export default function CombinedAnimation({
    waveAnimationIsPlaying,
    progressPercentage,
    progressIsPlaying,
    progressSize,
    progressColor,
    progressImage,
}) {
    const waveClass = waveAnimationIsPlaying ? "box active" : "box";

    return (
        <div className="combined-animation-container flex">
            <div className={`${waveClass} box1`}></div>
            <div className={`${waveClass} box2`}></div>
            <div className={`${waveClass} box3`}></div>
            <div className={`${waveClass} box4`}></div>
            <div className={`${waveClass} box5`}></div>
            <div className={`${waveClass} box6`}></div>
            <div className={`${waveClass} box7`}></div>
            <div className={`${waveClass} box2`}></div>
            <div className={`${waveClass} box3`}></div>
            <div className={`${waveClass} box4`}></div>
            <div className={`${waveClass} box5`}></div>
            <div className={`${waveClass} box6`}></div>
            <div className={`${waveClass} box7`}></div>

            <svg width={progressSize} height={progressSize}>
                <g>
                    <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={progressSize} />
                    <Circle
                        strokeWidth={"0.6rem"}
                        color={progressColor}
                        percentage={progressPercentage}
                        size={progressSize}
                    />
                </g>
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="50%" cy="50%" r={progressSize / 2 - 30} fill="#FFFFFF" />
                    </clipPath>
                    <clipPath id="myInnerCircle">
                        <circle cx="50%" cy="50%" r={progressSize / 2 - 100} fill="#FFFFFF" />
                    </clipPath>
                </defs>
                <image
                    className={progressIsPlaying ? "active" : ""}
                    x={30}
                    y={30}
                    width={2 * (progressSize / 2 - 30)}
                    height={2 * (progressSize / 2 - 30)}
                    href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
                    clipPath="url(#myCircle)"
                />
                <image
                    className={progressIsPlaying ? "active" : ""}
                    x={100}
                    y={100}
                    width={2 * (progressSize / 2 - 100)}
                    height={2 * (progressSize / 2 - 100)}
                    href={progressImage}
                    clipPath="url(#myInnerCircle)"
                />
            </svg>
        </div>
    );
}