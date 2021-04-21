import { movePlayerTo } from '@decentraland/RestrictedActions'

@Component("Teleport")
export class Teleport{
  entity: Entity
  targetLocation: Vector3
  constructor(entity: Entity, targetLocation: Vector3, hoverText: string = "Teleport"){
    this.entity = entity
    this.targetLocation = targetLocation
    this.entity.addComponent(
      new OnClick(() => {
        this.teleportPlayer()
      }, {
        hoverText: hoverText
      })
    )
  }
  teleportPlayer(target: Vector3 = this.targetLocation){
    movePlayerTo({x: target.x, y: target.y, z: target.z})
  }
}