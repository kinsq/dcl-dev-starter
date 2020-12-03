import { TagComponent } from "./imports/index"
var entity4112 = new Entity("Main Camera")
entity4112.addComponent(new TagComponent())
entity4112.getComponent(TagComponent).tag = "MainCamera" 
engine.addEntity(entity4112)
entity4112.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity4112.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity4112.getComponent(Transform).scale.set(1, 1, 1)

var entity4250 = new Entity("Directional Light")
engine.addEntity(entity4250)
entity4250.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity4250.getComponent(Transform).rotation.set(0.4619398, 0.1913417, 0.1913417, 0.8446233)
entity4250.getComponent(Transform).scale.set(1, 1, 1)

var entity4142 = new Entity("Cube")
engine.addEntity(entity4142)
entity4142.addComponent(new Transform({ position: new Vector3(8, 3.1, 8) }))
entity4142.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity4142.getComponent(Transform).scale.set(2.2156, 2.2156, 2.2156)
entity4142.addComponent(new GLTFShape("unity_assets/entity4142.gltf"))
entity4142.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
