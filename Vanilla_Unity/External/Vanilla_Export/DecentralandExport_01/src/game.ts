import { TagComponent } from "./imports/index"
var entity13984 = new Entity("Main Camera")
entity13984.addComponent(new TagComponent())
entity13984.getComponent(TagComponent).tag = "MainCamera" 
engine.addEntity(entity13984)
entity13984.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity13984.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity13984.getComponent(Transform).scale.set(1, 1, 1)

var entity13992 = new Entity("Directional Light")
engine.addEntity(entity13992)
entity13992.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity13992.getComponent(Transform).rotation.set(0.4082179, -0.2345697, 0.1093816, 0.8754261)
entity13992.getComponent(Transform).scale.set(1, 1, 1)

var entity10258n = new Entity("Cube")
engine.addEntity(entity10258n)
entity10258n.addComponent(new Transform({ position: new Vector3(7.31, 2.44, 8.11) }))
entity10258n.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity10258n.getComponent(Transform).scale.set(3.2154, 3.2154, 3.2154)
entity10258n.addComponent(new GLTFShape("unity_assets/entity10258n.gltf"))
entity10258n.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
