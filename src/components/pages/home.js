import "./home.css"
import VideoCard from "./VideoCard"

export default function Home() {
    return (
        <section className="home-page">
                <h4>Recommended</h4>
                <div  className="videos">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                </div>
            
        </section>
    );
  };