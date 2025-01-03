
import backgroundVideoUrl from "../assets/backVid.mp4";

const backgroundVideo = () => {
    return (
        <video
            className="fixed top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
        >
            <source src= {backgroundVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default backgroundVideo;
