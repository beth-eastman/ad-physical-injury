/*
* Home.tsx
* This component displays the Home content. Home displays an image and
* text introducing the app.
*
* Created by Bethany Eastman on 08/22/2017.
*
* AD Physical Injury
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
import * as React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui';
// import ADInjuryTopicsLg from '../../res/images/AdApp/ad_injury_topics_lg.png';

const Home: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardMedia style={{maxHeight: 500}}
        overlay={<CardTitle title="Physical Injury" subtitle="Overview" />}
      >
        <img style={{maxHeight: 500}} src={require('../../res/images/AdApp/ad_injury_topics_lg.png')} alt="ad physical injury" />
      </CardMedia>
      <CardText>
        Injuries challenge almost everything we thought we knew about ourselves. There are almost as many reactions to injuries as there are injured service members. What makes the difference between someone who survives, grows, and ultimately thrives in the presence of a serious injury and someone who doesn't? Our material on Physical Injury is designed to help you begin to answer that question. If you are caring for someone with a physical injury you can take an assessment to get feedback on how you are doing or jump into the workshops to learn about managing feelings about physical injuries and adapting. Check out the videos of others who are dealing with physical injuries, and explore the e-library for in-depth information.
      </CardText>
    </Card>
  );

}

export default Home;
