import * as Ads from '../node_modules/@adshares/decentraland/src/index'

const agent = Ads.SupplyAgent.fromWallet('https://app.web3ads.net', 'ads', '0001-00000000-9B6F')
// const agent = new Ads.SupplyAgent('https://app.web3ads.net', 'e39f6593-578e-41f0-8d06-88aff41c6a19')

const stand = new Entity()
stand.addComponent(new GLTFShape('models/stand.glb'))
stand.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
}))

const frontPlacement = new Ads.PlainPlacement('Stand front', {
  position: new Vector3(0, 2.355, -0.288546),
  width: 1.65,
  ratio: '9:16',
})
frontPlacement.setParent(stand)

const backPlacement = new Ads.PlainPlacement('Stand back', {
  position: new Vector3(0, 2.355, 0.288546),
  rotation: Quaternion.Euler(0, 180, 0),
  width: 1.65,
  ratio: '9:16',
  types: ['image'],
  mimes: ['image/jpeg', 'image/png'],
})
backPlacement.setParent(stand)

engine.addEntity(stand)
agent.addPlacement(frontPlacement, backPlacement).spawn()
