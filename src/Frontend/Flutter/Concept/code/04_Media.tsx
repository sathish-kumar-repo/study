import flutter from "./flutter.png";
import demo from "./demo.gif";
import video from "./VID-20250322-WA0003.mp4";
import { Title, Media, PDF, H1 } from "../../../../Backend/UI";

const MediaOverview = () => {
  return (
    <>
      <Title>Media Overview</Title>
      dfdsdf
      <Media
        media={[
          "vite.svg",
          "video/sample.mp4",
          { sequence: { base: "video/", start: 1, end: 1, ext: "mp4" } },
          "video/trailer_hd.mp4",
          { sequence: { base: "video/", start: 2, end: 2, ext: "mp4" } },
          "https://youtu.be/GXlVYDUCAwM?si=NSjH8x9zgLYMNboI",
        ]}
      />
      jkj
      <Media
        src={["video/trailer_hd.mp4", "mp3/sample.mp3", "mp3/sample.mp3"]}
        sequence={{
          base: "video/",
          start: 1,
          end: 2,
          ext: "mp4",
        }}
      />
      <PDF
        file="/candlestickpattern.pdf" // The relative path or filename
        name="Weight Loss Plan"
      />
      <PDF
        file="pdf/dummy.pdf"
        name="Plan with domain"
        // customDomain="https://cdn.example.com" // optionally
      />
      <PDF
        file="pdf/dummy.pdf"
        name="Plan with domain"
        // customDomain="https://cdn.example.com" // optionally
      />
      <H1>Image</H1>
      <Media src={demo} />
      <H1>Multiple Image</H1>
      <Media src={[flutter, demo]} />
      <H1>Video</H1>
      <Media src={video} />
      <H1>Multiple video</H1>
      <Media src={[video, video]} />
      <H1>Online Image</H1>
      <Media src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg" />
      <H1>Online Multiple Image</H1>
      <Media
        src={[
          "https://images.pexels.com/photos/3333923/pexels-photo-3333923.jpeg",
          "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg",
        ]}
      />
      <H1>Online Video</H1>
      <Media src={"video/trailer_hd.mp4"} />
      <H1>Online Multiple Video</H1>
      <Media
        src={[
          "https://videos.pexels.com/video-files/5304522/5304522-uhd_2560_1440_30fps.mp4",
          "https://videos.pexels.com/video-files/5304522/5304522-uhd_2560_1440_30fps.mp4",
        ]}
      />
      <H1>Domain Img</H1>
      <Media src={"course-images/binary-trading.jpg"} />
      <H1>Domain Muliple Img</H1>
      <Media
        src={[
          "course-images/binary-trading.jpg",
          "course-images/photography.jpg",
        ]}
      />
      <H1>Domain Video</H1>
      <Media src={"video/sample.mp4"} />
    </>
  );
};

export default MediaOverview;
