import {PlainPlacement, SupplyAgent} from '../../decentraland/src/index'

const agent = SupplyAgent.fromWallet('https://app.web3ads.net', 'ads', '0001-00000000-9B6F')
// const agent = new SupplyAgent('https://app.web3ads.net', 'e39f6593-578e-41f0-8d06-88aff41c6a19')

const stand = new Entity()
stand.addComponent(new GLTFShape('models/stand.glb'))
stand.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
}))

const frontPlacement = new PlainPlacement('Stand front', {
    position: new Vector3(0, 2.4, -0.28),
    width: 1.88,
    ratio: '9:16',
})
frontPlacement.setParent(stand)

const backPlacement = new PlainPlacement('Stand back', {
    position: new Vector3(0, 2.4, 0.28),
    rotation: Quaternion.Euler(0, 180, 0),
    width: 1.88,
    ratio: '9:16',
    types: ['image', 'video'],
    mimes: ['image/jpeg', 'image/png', 'video/mp4'],
})
backPlacement.setParent(stand)

engine.addEntity(stand)
agent.addPlacement(frontPlacement, backPlacement).spawn()
