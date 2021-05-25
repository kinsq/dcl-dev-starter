var entity12198 = new Entity("Quad")
engine.addEntity(entity12198)
entity12198.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
entity12198.getComponent(Transform).rotation.set(0.7071068, 0, 0, 0.7071068)
entity12198.getComponent(Transform).scale.set(16, 16, 1)
entity12198.addComponent(new GLTFShape("unity_assets/entity12198.gltf"))
entity12198.getComponent(GLTFShape).withCollisions = false
entity12198.getComponent(Transform).rotation.set(-3.090862E-08, 0.7071068, 0.7071069, -3.090862E-08)
var entity14870n = new Entity("LinkText (1)")
engine.addEntity(entity14870n)
entity14870n.addComponent(new Transform({ position: new Vector3(7.33, 1.183, 7.27) }))
entity14870n.getComponent(Transform).rotation.set(0, -0.5202005, 0, 0.8540442)
entity14870n.getComponent(Transform).scale.set(0.3506964, 0.3506963, 7.013927)
entity14870n.addComponent(new TextShape())
entity14870n.getComponent(TextShape).value = "Hello\ World HERE WE ARE IN THE CENTER OF STUPIDITY"
entity14870n.getComponent(TextShape).color = new Color3(0, 0, 0)
entity14870n.getComponent(TextShape).width = 30
entity14870n.getComponent(TextShape).height = 15
entity14870n.getComponent(TextShape).fontSize = 30
entity14870n.getComponent(TextShape).textWrapping = true

