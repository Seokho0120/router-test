import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDetail(props) {
  // const params = useParams();
  // console.log('params', params);

  const { videoId } = useParams();

  return <div>VideoDetail {videoId}</div>;
}

export default VideoDetail;
