 /*
  * videos.js
  * A collection of videos and their title, thumbnail poster, and video source file.
  *
  * Created by Bethany Eastman on 06/21/17.
  *
  * AD Anxiety
  *
  * Copyright © 2009-2017 United States Government as represented by
  * the Chief Information Officer of the National Center for Telehealth
  * and Technology. All Rights Reserved.
  *
  * Copyright © 2009-2017 Contributors. All Rights Reserved.
  *
  * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
  * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
  * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
  * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
  * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
  * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
  * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
  * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
  * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
  * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
  *
  * Government Agency: The National Center for Telehealth and Technology
  * Government Agency Original Software Designation: ProductName001
  * Government Agency Original Software Title: ProductName
  * User Registration Requested. Please send email
  * with your contact information to: robert.a.kayl.civ@mail.mil
  * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
  *
  */

// id: the unique identifier key of each video
// title: the title for a video
// poster: the thumnail image for each video
// src: the source file for the video
const videos = [
  {
    id: 0,
    title: 'Physical Injury Compilation',
    poster: 'https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125619761001_vs-1125613284001.jpg?pubId=1041122098001&videoId=1125587297001',
    src: ' https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125624303001_Physical-Injury---01-Physica-Injury-Compilation.mp4?pubId=1041122098001&videoId=1125587297001',
  },
  {
    id: 1,
    title: 'The Benefits of Resources',
    poster: 'https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125607709001_vs-1125607537001.jpg?pubId=1041122098001&videoId=1125586069001',
    src: 'https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125607697001_Physical-Injury---02-The-benefits-of-resources.mp4?pubId=1041122098001&videoId=1125586069001',
  },
  {
    id: 2,
    title: 'Injury Lauber',
    poster: 'https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125610235001_vs-1125609268001.jpg?pubId=1041122098001&videoId=1125606025001',
    src: 'https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125610234001_Physical-Injury---3---Inj-Lauber1.mp4?pubId=1041122098001&videoId=1125606025001',
  },
  {
    id: 3,
    title: 'Injury BClev',
    poster: 'https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125609531001_vs-1125607336001.jpg?pubId=1041122098001&videoId=1125587262001',
    src: 'https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125609530001_Physical-Injury---4---Inj-BClev1.mp4?pubId=1041122098001&videoId=1125587262001',
  },
  {
    id: 4,
    title: 'Injury Gooding',
    poster: 'https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125609474001_vs-1125600623001.jpg?pubId=1041122098001&videoId=1125586058001',
    src: 'https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125609512001_Physical-Injury---5---Inj-Gooding.mp4?pubId=1041122098001&videoId=1125586058001',
  },
  {
    id: 5,
    title: 'Injury Bussler',
    poster: ' https://brightcove.hs.llnwd.net/e1/pd/1041122098001/1041122098001_1125608428001_vs-1125598009001.jpg?pubId=1041122098001&videoId=1125606017001',
    src: 'https://brightcove.hs.llnwd.net/e1/uds/pd/1041122098001/1041122098001_1125608427001_Physical-Injury---6---Inj-Bussler.mp4?pubId=1041122098001&videoId=1125606017001',
  },
];

export { videos };
