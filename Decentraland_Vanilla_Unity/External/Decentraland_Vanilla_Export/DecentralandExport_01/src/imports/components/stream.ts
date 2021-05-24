import { delay } from "../delay"

type StreamVideoInfo = {
  url: string,
  material: Material, 
  videoTexture: VideoTexture,
  //StreamVideoComponents?: StreamVideo[]
}

const videoTextureArray: StreamVideoInfo[] = []

function getVideoTexture(url: string){
  for (let i = 0; i < videoTextureArray.length; i++) {
    if (videoTextureArray[i].url==url) {
      return videoTextureArray[i]
    }
  }
  return null
}

function addVideoTexture(url: string){
  const StreamVideoClip = new VideoClip(url)
  const texture = new VideoTexture(StreamVideoClip)
  const mat = new Material()
  mat.albedoTexture = texture
  mat.roughness = 1
  videoTextureArray.push({
    url: url,
    material: mat, 
    videoTexture: texture,
    //StreamVideoComponents: []
  })
  return videoTextureArray[videoTextureArray.length-1]
}


@Component("StreamVideo")
export class StreamVideo{
    entity: Entity
    StreamVideoInfo: StreamVideoInfo
    pointerDownEvent: OnPointerDown
    volumen: number
    bLoop: boolean
    hoverPlay: string
    hoverPause: string
    constructor(entity: Entity, url: string, hoverPlay: string = "Play", hoverPause: string = "Pause", bLopp: boolean = false, volumen: number = 5, bPlay: boolean = true, bLateRestart: boolean = true){
        this.entity = entity
        this.volumen = volumen
        this.bLoop = bLopp
        this.hoverPlay = hoverPlay
        this.hoverPause = hoverPause
        this.StreamVideoInfo = getVideoTexture(url)
        if(!this.StreamVideoInfo){
          this.StreamVideoInfo = addVideoTexture(url)
          //this.StreamVideoInfo.StreamVideoComponents.push(this)
        }
        
        if (!entity.hasComponent(PlaneShape) && !entity.hasComponent(BoxShape) && !entity.hasComponent(GLTFShape)) {
            entity.addComponent(new PlaneShape())
        }
        entity.addComponentOrReplace(this.StreamVideoInfo.material)
        var self = this
        this.pointerDownEvent = new OnPointerDown(
          () => {
            self.play(!self.StreamVideoInfo.videoTexture.playing)
          },
          {
            hoverText: "Play"
          }
        )
        entity.addComponent(this.pointerDownEvent)

        this.play(bPlay)
        if (bPlay && bLateRestart) {
          this.lateRestart()
        }
        console_log(videoTextureArray)
        
    }
    lateRestart(waitSeconds: number = 20){
      var self = this
      delay(() => {
        self.play(false)
        delay(() => {
          self.play(true)
        }, 1000);
      }, waitSeconds*1000);
    }
    play(bPlay: boolean = true){
      this.StreamVideoInfo.videoTexture.playing = bPlay
      if (bPlay) {
        this.pointerDownEvent.hoverText = this.hoverPlay
      }
      else this.pointerDownEvent.hoverText = this.hoverPause
    }
    setVolumen(volumen: number){
      this.StreamVideoInfo.videoTexture.volume = volumen
    }
    setLoop(bLoop: boolean){
      this.StreamVideoInfo.videoTexture.loop = bLoop
    }
}

@Component("StreamImage")
export class StreamImage{
  entity: Entity
  url: string
  material: Material
  constructor(entity:Entity, url: string, metalic: number = 0, roughness: number = 1){
    this.entity = entity
    this.url = url
    if (!entity.hasComponent(PlaneShape) && !entity.hasComponent(BoxShape) && !entity.hasComponent(GLTFShape)) {
      entity.addComponent(new PlaneShape())
    }
    const myTexture = new Texture(url)
    this.material = new Material()
    this.material.albedoTexture = myTexture
    this.material.metallic = metalic
    this.material.roughness = roughness
    entity.addComponentOrReplace(this.material)

    entity.getComponent(Transform).scale.y = -entity.getComponent(Transform).scale.y
  }
}