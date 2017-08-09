 /* eslint-disable */
 /*
  * index.js - Page
  * Page component will use Jack Lightfoot's npm module contatining
  * different T2 Assessments quizzes
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
import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui';
// import { assessments } from 'local-t2-assessment-suite';
// const { Depression, AlcoholDrugs, Physical } = assessments;

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class Page extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessment");
    this.props.changeIcon('Back', '/assessments');
  }

  handleCancel = (error, assessment) => {
      this.props.router.push('/assessments/');
  }

  render() {
    let assessment = null;

    switch (this.props.params.assessmentId) {
      case 'depression':
        // assessment = (<Depression onCancel={() => {this.handleCancel()}} />);
        assessment = (<h4>Depression Module Coming Soon</h4>);
        break;
      case 'physicalinjuryresiliance':
        // assessment = (<Physical onCancel={() => {this.handleCancel()}} />);
        assessment = (<h4>Physical Injury Resiliance Module Coming Soon</h4>);
        break;
      case 'alcoholanddrugs':
        // assessment = (<AlcoholDrugs onCancel={() => {this.handleCancel()}} />);
        assessment = (<h4>Alcohol and Drugs Module Coming Soon</h4>);
        break;
      case 'optimism':
        assessment = (<h4>Optimism Module Coming Soon</h4>);
        break;
      case 'forgiveness':
        assessment = (<h4>Forgiveness Module Coming Soon</h4>);
        break;
      default:
        assessment = (<h4>Assessment not found</h4>);
        break;
    }

    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
            {assessment}
          </CardText>
        </Card>
      </div>
    );
  }
}

/* What proptypes to expect */
Page.propTypes = {
  assessmentId: PropTypes.string,
  params: PropTypes.any,
};
