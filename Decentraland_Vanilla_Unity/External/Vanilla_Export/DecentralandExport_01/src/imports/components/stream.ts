import { delay } from "../delay"

type StreamInfo = {
  url: string,
  material: Material, 
  videoTexture: VideoTexture,
  //streamComponents?: Stream[]
}

const videoTextureArray: StreamInfo[] = []

function getVideoTexture(url: string){
  for (let i = 0; i < videoTextureArray.length; i++) {
    if (videoTextureArray[i].url==url) {
      return videoTextureArray[i]
    }
  }
  return null
}

function addVideoTexture(url: string){
  const streamClip = new VideoClip(url)
  const texture = new VideoTexture(streamClip)
  const mat = new Material()
  mat.albedoTexture = texture
  mat.roughness = 1
  videoTextureArray.push({
    url: url,
    material: mat, 
    videoTexture: texture,
    //streamComponents: []
  })
  return videoTextureArray[videoTextureArray.length-1]
}


@Component("Stream")
export class Stream{
    entity: Entity
    streamInfo: StreamInfo
    pointerDownEvent: OnPointerDown
    constructor(entity: Entity, url: string, bPlay: boolean = true, bLateRestart: boolean = true){
        this.entity = entity
        this.streamInfo = getVideoTexture(url)
        if(!this.streamInfo){
          this.streamInfo = addVideoTexture(url)
          //this.streamInfo.streamComponents.push(this)
        }
        
        if (!entity.hasComponent(PlaneShape) && !entity.hasComponent(BoxShape) && !entity.hasComponent(GLTFShape)) {
            entity.addComponent(new PlaneShape())
        }
        entity.addComponentOrReplace(this.streamInfo.material)
        var self = this
        this.pointerDownEvent = new OnPointerDown(
          () => {
            self.play(!self.streamInfo.videoTexture.playing)
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
      this.streamInfo.videoTexture.playing = bPlay
      if (bPlay) {
        this.pointerDownEvent.hoverText = "Pause"
      }
      else this.pointerDownEvent.hoverText = "Play"
    }
}