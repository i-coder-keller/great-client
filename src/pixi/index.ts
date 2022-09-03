import * as PIXI from "pixi.js"
import {Application} from "pixi.js"

interface VideoInfo {
    width: number;
    height: number;
    volume: number;
    duration: number;
    source: string;
}
interface CutInfo {
    left: number;
    top: number;
    width: number;
    height: number;
    rotate: number;
}
interface Scene {
    videoInfo: VideoInfo;
    voiceSource?: string;
    backgroundSource?: string;
    cutInfo?: CutInfo;
}
interface Props {
    el: HTMLElement
    width: number
    height: number
    scene: Scene
}
export default class {
  private options: Props
  private core: Application
  private target: any

  constructor(option: Props) {
    this.options = option
    this.init()
  }

  /**
     * 初始化画布
     */
  async init() {
    this.core = new PIXI.Application({
      width: this.options.width,
      height: this.options.height,
      antialias: true
    })
    this.options.el.appendChild(this.core.view)
    await this.initVideo(this.options.scene.videoInfo.source)
    this.createSprite("http://image.liuyongzhi.cn/imagesoffice-word-2.gif")
  }

  /**
     * 创建精灵
     */
  private createSprite(source: string) {
    this.core.loader.add({
      name: "videoSource",
      url: source,
      crossOrigin: true
    }
    ).load(() => {
      return this.core.stage.addChild(new PIXI.Sprite(this.core.loader.resources.videoSource.texture))
    })
  }
  private async initVideo(source: string): Promise<void> {
    const videoTexture = await PIXI.Texture.fromURL(source)
    const videoSprite = new PIXI.Sprite(videoTexture)
    const width = Math.floor(this.options.height / this.options.scene.videoInfo.height * this.options.scene.videoInfo.width)
    videoSprite.height = this.options.height
    videoSprite.width = width
    this.target = videoTexture.baseTexture.resource
    this.target.source.autoplay = "false"
    this.target.source.muted = "muted"
    this.target.autoPlay = false
    // this.target.source.setAttribute("autoplay", "false")
    console.log(this.target)
    this.core.stage.addChild(videoSprite)
  }
}