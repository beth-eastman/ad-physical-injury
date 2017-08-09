 /*
  * index.js - Links
  * A Link component is a resource page containing text information and links to external websites.
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
/* eslint-disable */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { links } from 'data/resources';

export default class Links extends React.Component { // eslint-disable-line

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Links"); // eslint-disable-line
    this.props.changeIcon('Back', '/resources/'); // eslint-disable-line
  }

  /* Iterate over every link and display the title, the link, and descriptive text */
  render() {
    return (
      <Card>
        <CardText>
          <div className="links-content" dangerouslySetInnerHTML={{ __html: links.text }}></div>
        </CardText>
      </Card>
    );
  }
}
