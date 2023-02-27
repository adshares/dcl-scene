// import AdsharesBanner from '@adshares/decentraland'
// import AdsharesBanner from '../../decentraland/src/banner'

import { Publisher, Chain, Site, PlainPlacement } from '../../decentraland/src/index'

const site = new Site(Publisher.fromWallet('https://app.web3ads.net', Chain.ADS, '0001-000000F1-6451'))
// const site = new Site(new Publisher('https://app.web3ads.net', 'd64bf2a15c5de2e33b20c4b6100c2d5d'))

const placement1 = new PlainPlacement('unit1')
placement1.addComponent(new Transform({
  position: new Vector3(4, 0, 8),
  scale: new Vector3(2, 2, 0.1),
}))
engine.addEntity(placement1)

const placement2 = new PlainPlacement('unit2', ['image', 'video'], ['image/jpeg', 'image/png', 'video/mp4'])
placement2.addComponent(new Transform({
  position: new Vector3(8, 0, 4),
  scale: new Vector3(2, 2, 0.1),
}))
engine.addEntity(placement2)

site.addPlacement(placement1, placement2).start().then(log)

//
// engine.addEntity(unit1);
// adsharesBanner.spawn(
//    unit1,
//    {
//      payout_network: 'ads',
//      payout_address: '0001-000000F1-6451',
//      keywords: 'decentraland,metaverse',
//      zone_name: 'default',
//      adserver: 'https://app.web3ads.net',
//      exclude: '{"quality": ["low"], "category": ["adult"]}',
//    }
// )

// const adsharesBanner = new AdsharesBanner();
// const unit2 = new Entity('unit2');
// unit2.addComponent(new Transform({
//    position: new Vector3(6, 0, 6),
//    scale: new Vector3(2, 2, 0.1),
// }));
// engine.addEntity(unit2);
// adsharesBanner.spawn(
//    unit2,
//    {
//        payout_network: 'bsc',
//        payout_address: '0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a', // put your metamask address here (binance chain)
//        keywords: 'decentraland,metaverse',
//        zone_name: 'default',
//        adserver: 'https://app.web3ads.net',
//        exclude: '{"quality": ["low"], "category": ["adult"]}',
//    }
// )
