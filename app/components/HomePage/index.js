 /*
  * index.js - HomePage
  * The HomePage component contains for the homepage of the application.
  *
  * Created by Bethany Eastman on 06/21/17.
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
 /* eslint-disable */
import React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui';
import ADInjuryTopicsLg from '../img/ad_injury_topics_lg.png';

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class HomePage extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("AD Physical Injury"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  render() {
    return (
      <div className="homepage">
        <Card style={styles}>
          <CardMedia style={{maxHeight: 500}}
            overlay={<CardTitle title="Physical Injury" subtitle="Overview" />}
          >
            <img style={{maxHeight: 500}} src={ADInjuryTopicsLg} alt="ad physical injury" />
          </CardMedia>
          <CardText>
            Injuries challenge almost everything we thought we knew about ourselves. There are almost as many reactions to injuries as there are injured service members. What makes the difference between someone who survives, grows, and ultimately thrives in the presence of a serious injury and someone who doesn't? Our material on Physical Injury is designed to help you begin to answer that question. If you are caring for someone with a physical injury you can take an assessment to get feedback on how you are doing or jump into the workshops to learn about managing feelings about physical injuries and adapting. Check out the videos of others who are dealing with physical injuries, and explore the e-library for in-depth information.
          </CardText>
        </Card>
      </div>
    );
  }
}
