const menus = [
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-volume',
    selectedClassName: 'video-volume-selected video-control-menus-selected',
    mark: 'volume',
    ariaLabel: '播放音量'
  },
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-speed',
    selectedClassName: 'video-speed-selected video-control-menus-selected',
    mark: 'speed',
    ariaLabel: '播放速度'
  },
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-cut-duration',
    selectedClassName: 'video-cut-duration-selected video-control-menus-selected',
    mark: 'clipVideo',
    ariaLabel: '视频剪裁'
  },
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-cut-mark',
    selectedClassName: 'video-cut-mark-selected video-control-menus-selected',
    mark: 'clipMark',
    ariaLabel: '水印裁剪'
  },
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-text',
    selectedClassName: 'video-text-selected video-control-menus-selected',
    mark: 'text',
    ariaLabel: '文字水印'
  },
  {
    className: 'video-control-menus hint--top hint--rounded',
    unselectedClassName: 'video-image',
    selectedClassName: 'video-image-selected video-control-menus-selected',
    mark: 'image',
    ariaLabel: '图片水印'
  }
]
type Selected_Menu = 'volume' | 'clipMark' | 'clipVideo' | 'speed' | 'text' | 'image' | 'voice'

export {
  menus,
  Selected_Menu
}