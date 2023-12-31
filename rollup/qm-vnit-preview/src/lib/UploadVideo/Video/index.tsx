import React, { memo, useMemo, useState, useRef, useCallback } from 'react';
import { Tooltip } from 'antd';
import { DeleteOutlined, EyeOutlined, PictureOutlined, CloseOutlined } from '@ant-design/icons';
import Portal from '@/utils/portal';
import './index.less';

/**
 * 视频预览功能组件
 * @param { width }    video 容器的宽度
 * @param { height }   video 容器的高度
 * @param { style }    video 容器的样式
 * @param { file }     视频文件
 * @param { onDelete } 删除该视频的回调函数
 */
function Video(props: any) {
  const [showPreviewModal, setPreviewModal] = useState(false);
  const { width, height, style, file, onDelete, disabled } = props;

  // 视频元素
  const videoRef = useRef<any>();
  // 预览视频元素
  const previewVideoRef = useRef<any>();
  // 是否是第一次预览视频。我们根据该字段做了惰性加载
  const isFirstDisplayPreviewModal = useRef(true);
  // 预览视频元素的样式，通过 video 的 oncanplay 事件提前计算出预览视频元素的样式。
  const previewVideoStyle = useRef<any>({});

  const videoSrc = useMemo(() => {
    if (file?.url) {
      return file.url;
    } else {
      const url = file?.originFileObj;
      return url ? window.URL.createObjectURL(url) : '';
    }
  }, [file]);

  const type = useMemo(() => {
    const index = file?.name?.lastIndexOf?.('.') ?? -1;
    if (~index) return `video/${file.name.slice(index + 1)}`;
    return '';
  }, [file?.name]);

  const wrapperStyle = useMemo(() => {
    const newStyle = { ...style };
    if (width) newStyle.width = width;
    if (height) newStyle.height = height;
    return newStyle;
  }, [width, height, style]);

  const handleVideoCanPlay = () => {
    const { videoWidth, videoHeight } = videoRef.current;
    let width = videoWidth;
    let height = videoHeight;
    // 如果视频高度大于 800，则根据视频原有比例进行缩小，否则按照原有尺寸展示。
    if (videoHeight > 800) {
      width = (videoWidth / videoHeight) * 800;
      height = 800;
    }
    previewVideoStyle.current = { width, height };
  };

  // 打开预览
  const handlePreviewVideo = useCallback(() => {
    isFirstDisplayPreviewModal.current = false;
    document.documentElement.style.overflow = 'hidden';
    setPreviewModal(() => true);
  }, []);

  // 关闭预览
  const handleClosePreviewVideo = useCallback(() => {
    document.documentElement.style.overflow = '';
    setPreviewModal(false);
    previewVideoRef.current?.pause();
  }, []);

  const handleDeleteFile = useCallback(() => {
    onDelete?.(file);
  }, [onDelete, file]);

  if (file.status === 'uploading') {
    return (
      <div style={wrapperStyle} className="qm-vnit-uploadvideo-video-wrapper">
        <div className="qm-vnit-uploadvideo-video-loading">文件上传中</div>
        <div className="qm-vnit-uploadvideo-video-progress-bar">
          <span className="qm-vnit-uploadvideo-video-progress" style={{ width: `${file.percent}%` }} />
        </div>
      </div>
    );
  } else if (file.status === 'error') {
    return (
      <Tooltip title="上传错误">
        <div style={wrapperStyle} className="qm-vnit-uploadvideo-video-wrapper qm-vnit-uploadvideo-video-error">
          <div className="qm-vnit-uploadvideo-video-file-picture">
            <PictureOutlined />
          </div>
          <div className="qm-vnit-uploadvideo-video-filename">{file.name}</div>
          <div className="qm-vnit-uploadvideo-video-preview">
            <DeleteOutlined className="qm-vnit-uploadvideo-video-preview-icon" onClick={handleDeleteFile} />
          </div>
        </div>
      </Tooltip>
    );
  }

  return (
    <div style={wrapperStyle} className="qm-vnit-uploadvideo-video-wrapper">
      <video
        muted
        preload="auto"
        ref={videoRef}
        className="qm-vnit-uploadvideo-video-player"
        onCanPlay={handleVideoCanPlay}
      >
        <source type={type} src={videoSrc} />
      </video>
      <div className="qm-vnit-uploadvideo-video-preview">
        <EyeOutlined className="qm-vnit-uploadvideo-video-preview-icon" onClick={handlePreviewVideo} />
        {disabled ? null : (
          <DeleteOutlined className="qm-vnit-uploadvideo-video-preview-icon" onClick={handleDeleteFile} />
        )}
      </div>
      {isFirstDisplayPreviewModal.current && !showPreviewModal ? null : (
        <Portal>
          <div
            className={`qm-vnit-uploadvideo-video-preview-box${
              showPreviewModal ? ' qm-vnit-uploadvideo-video-show' : ''
            }`}
            onClick={handleClosePreviewVideo}
          >
            <video
              muted
              controls
              autoPlay
              preload="auto"
              ref={previewVideoRef}
              style={previewVideoStyle.current}
              onClick={(event: any) => event.stopPropagation()}
              className="qm-vnit-uploadvideo-video-preview-player"
            >
              <source type={type} src={videoSrc} />
            </video>
            <span className="qm-vnit-uploadvideo-video-close-icon">
              <CloseOutlined />
            </span>
          </div>
        </Portal>
      )}
    </div>
  );
}

export default memo(Video);
