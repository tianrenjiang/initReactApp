/*
 * @Author: 蒋添任
 * @Date: 2023-09-26 22:41:15
 * @LastEditTime: 2023-09-26 23:45:10
 * @LastEditors: 蒋添任
 * @Description:
 */
import React from "react";
import './index.css';

const VideoPlayer = () => {
  return (
    <div className="container">
      <div className="video-title">name</div>
      <div className="video-container">
        <div className="video-player">
          <video controls>
            {/* <source src="your-video.mp4" type="video/mp4"> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-description">
          <p>
            Video description goes here. This is a sample video description.
          </p>
        </div>
      </div>
      <div className="recent-views">
        <h2>我的列表</h2>
        <ul>
          <li>
            <a href="#">Video 1</a>
          </li>
          <li>
            <a href="#">Video 2</a>
          </li>
          <li>
            <a href="#">Video 3</a>
          </li>
          <li>
            <a href="#">Video 4</a>
          </li>
          <li>
            <a href="#">Video 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default VideoPlayer;
