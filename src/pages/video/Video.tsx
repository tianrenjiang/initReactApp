/*
 * @Author: 蒋添任
 * @Date: 2023-09-24 00:28:00
 * @LastEditTime: 2024-01-07 22:10:24
 * @LastEditors: 蒋添任
 * @Description:
 */
import React, { useEffect, useState } from "react";
import "./video.css";
import topPic from "../../assets/computer.png";
import { Pagination } from "antd";
import VideoPlayer from "./videoPlayer/VideoPlayer.tsx";

const Video = () => {
  // const [imageData, setImageData] = useState([...]); // 用于存储所有图片数据的状态
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const [selectedType, setSelectedType] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(false);
  const [url, setUrl] = useState("");
  const [videoList, setVideoList] = useState([
    { id: 1, type: 1 },
    { id: 2, type: 2 },
    { id: 3, type: 2 },
    { id: 4, type: 2 },
    { id: 5, type: 1 },
    { id: 6, type: 2 },
    { id: 7, type: 1 },
    { id: 8, type: 1 },
    { id: 9, type: 2 },
    { id: 10, type: 1 },
    { id: 11, type: 2 },
    { id: 12, type: 2 },
  ]);
  const [filteredVideoList, setFilteredVideoList] = useState<any>([]);
  const initialStringArray: string[] = []; // 初始为空字符串数组
  const [img, setImg] = useState(initialStringArray);
  // fetch("http://localhost:8080/knowledge/video/pic", {
  //   method: "GET",
  //   headers: {
  //     token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTYzMzg5NzUsInVzZXJJZCI6IjEifQ.dqPrKXsB_3LuYkDSXSQUzKbLmt7C3nAJqM8mVBBuiE4'
  //   },
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.blob(); // 获取图片流
  //     } else {
  //       throw new Error("Failed to fetch image");
  //     }
  //   })
  //   .then((imageBlob) => {
  //     // 处理获取到的图片流
  //     const imageUrl = URL.createObjectURL(imageBlob);
  //     // 将imageUrl用于显示图片
  //     setUrl(imageUrl);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  const visibleImages = filteredVideoList.slice(startIdx, endIdx);
  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    onChange: (page: any, pageSize: any) => {
      setCurrentPage(page);
      setPageSize(pageSize);
    },
  };
  // useEffect(() => {
  //     setVideoList(ll);
  //   };
  // }, [videoList]);
  const asdf = () => {
    setSelectedVideo(true);
  };
  const ssss = () => {
    setSelectedVideo(false);
  };

  const selectList = (type) => {
    setSelectedType(type);
  };
  // 点击按钮时更改 selectedType，从而触发 useEffect
  useEffect(() => {
    const filteredList = videoList.filter(
      (video) => video.type === selectedType
    );
    setFilteredVideoList(filteredList);
  }, [selectedType, videoList]);

  // useEffect(() => {
  //   filteredVideoList.forEach((item) => {
  //     const imgList: string[] = [];
  //     getVideoCover(item.name).then((res) => {
  //       imgList.push(
  //         window.URL.createObjectURL(
  //           new Blob([res.data], { type: "image/png" })
  //         )
  //       );
  //       setImg(imgList);
  //     });
  //   });
  // }, [filteredVideoList]);
  const opene=()=>{
    window.open(
      `/dama-service/api/v1/minio/static/view?fileName=西部证券数眸平台-用户操作手册与导览.pdf`,
    );
  }

  return (
    <div className="container">
      <div className="top-poster">
        <div className="text-wraper">
          <div className="title" onClick={opene}>数眸在线课程</div>
          <div className="title-dec">体系化的培训课程，快速完成学习覆盖</div>
        </div>
        <div className="pic-wraper">
          <img src={topPic} alt="" className="pic" />
        </div>
      </div>
      {selectedVideo ? (
        <div>
          <VideoPlayer/>
          <button onClick={ssss}>返回</button>
        </div>
      ) : (
        <div className="mid-content">
          <div className="discover-title">discover</div>
          <div className="discover-card">
            <div className="card-left">
              <div className="基础班">基础班</div>
              <img src={`/dama-service/api/v1/minio/static/view?fileName=西部证券数眸平台-用户操作手册与导览.pdf`} alt="" />
            </div>
            <div className="card-right">
              <div className="提高班">提高班</div>
            </div>
          </div>
          <div className="classification">
            <span className="title">分类：</span>
            <button className="item-block" onClick={() => selectList(1)}>
              基础班
            </button>
            <button className="item-block" onClick={() => selectList(2)}>
              提高班
            </button>
          </div>
          <div className="video-wraper">
            {visibleImages.map((item, index) => (
              <div className="video-item" onClick={asdf}>
                {item.id}
                <img src={img[index]} alt="" />
              </div>
            ))}
            <Pagination
              {...paginationConfig}
              total={filteredVideoList.length}
            />

            {/* <div className="video-item"></div>
          <div className="video-item"></div>
          <div className="video-item"></div>
          <div className="video-item"></div>
          <div className="video-item"></div>
          <div className="video-item"></div>
          <div className="video-item"></div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
