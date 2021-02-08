import {DoorComponent, DoorTriggerBehaviour} from './doors'

export var doorTimmersArray: DoorTimmerComponent[] = []
export class Timmer{
  time: double
  bAutoActivate: boolean
  bLoop: boolean
  maxLoops: number
  callback: Function
  timeout: any

  constructor(time: double, bLoop: boolean, maxLoops: number, bAutoActivate: boolean, callback: Function = function(){}){
      this.time = time
      this.bLoop = bLoop
      this.maxLoops = maxLoops
      this.bAutoActivate = bAutoActivate
      this.callback = callback
      if (this.bAutoActivate) {
        this.start()
      }
  }
  start(nLoopsDone: number = 0){

      var self = this
      if (self.timeout) {
        self.stop(false)
      }
      self.timeout = setTimeout(() => {
        if (self.bLoop) {
          if (self.maxLoops<=0 || nLoopsDone<self.maxLoops) {
            self.start(nLoopsDone+1)
          }
        }
        self.callback()
      }, self.time*1000);

  }
  stop(fireCallback: boolean = false){
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    if (fireCallback) {
      this.callback()
    }
  }
  /*pause(){

  }
  getTimeRemaining(){

  }
  getTime(){

  }*/
}
@Component('DoorTimmerComponent')
export class DoorTimmerComponent{
  entity: IEntity
  timmer: Timmer
  doorEnititiesNames: string[]
  doorEnitities: DoorComponent[]
  doorBehaviour: DoorTriggerBehaviour
  constructor(entity: IEntity, time: double, bLoop: boolean, maxLoops: number, bAutoActivate: boolean, doorBehaviour: DoorTriggerBehaviour, doorEnititiesNames: string[]){
    this.entity = entity
    this.doorEnititiesNames = doorEnititiesNames
    this.doorBehaviour = doorBehaviour
    this.doorEnitities = []
    var self = this
    let callback = function() {
      for (let i = 0; i < self.doorEnitities.length; i++) {
        switch (self.doorBehaviour) {
          case DoorTriggerBehaviour.Close:
            self.doorEnitities[i].closeDoor()
            break;
          case DoorTriggerBehaviour.Open:
            self.doorEnitities[i].openDoor()
            break;
          case DoorTriggerBehaviour.CloseAndOpen:
            self.doorEnitities[i].callback = function() {
              self.doorEnitities[i].callback = function(){}
              self.doorEnitities[i].openDoor()
            }
            self.doorEnitities[i].closeDoor()
            break;
          case DoorTriggerBehaviour.Toggle:
            self.doorEnitities[i].toggleDoor()
            break;
          default:
            break;
        }
      }
    }
    this.timmer = new Timmer(time,bLoop,maxLoops,bAutoActivate,callback)
    doorTimmersArray.push(this)
  }
  createTimmer(){
    if (this.doorEnitities.length==0) {
      for (const entityId in engine.getEntitiesWithComponent(DoorComponent)) {
        let entity: IEntity = engine.getEntitiesWithComponent(DoorComponent)[entityId]
        if (this.doorEnititiesNames.indexOf(entity.name) != -1) {
            this.doorEnitities.push(entity.getComponent(DoorComponent))
        }
      }
    }
  }
}
