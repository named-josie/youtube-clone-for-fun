import "./VideoCard.css"
import { Avatar } from '@mui/material';

export default function VideoCard({
  image,
  title,
  channel,
  timestamp,
  views,
  channelImage,
}) {
  return (
    <div className='video-card'>
      <img className='video-thumbnail' src={image} alt='' />
      <div className='video-info'>
        <Avatar className='video-avatar' alt={channel} src={channelImage} />
      </div>
      <div className='video-text'>
        <h4>{title} hi</h4>
      <p>{channel}loves</p>
      <p> 
        {views} ・ {timestamp}
      </p>
      </div>

    </div>
  );
}
