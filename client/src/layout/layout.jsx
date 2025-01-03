
import BackgroundVideo from "./backgroundVideo";

const layout = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <BackgroundVideo />
            <div className="relative z-10 flex items-center justify-center text-white">
                {children}
            </div>
            
        </div>
    );
};

export default layout;
