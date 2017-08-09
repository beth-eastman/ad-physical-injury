/*
 * assessments.js
 * Data for assessments components
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
// images
import AnxietyTreatment from 'components/img/anxiety-types-of-anxiety.jpg';
import RecognizingTrigers from 'components/img/anxiety-recognizing-triggers.jpg';
import BackInControl from 'components/img/anxiety-back-in-control.jpg';
import Worry from 'components/img/worry.jpg';

// id: a unique identifier to be used as a key
// img: the thumbnail image
// title: the title of each assessment
const assessments = [
  {
    id: 'physicalinjuryresiliance',
    img: AnxietyTreatment,
    title: 'Physical Injury Resiliance',
  },
  {
    id: 'depression',
    img: BackInControl,
    title: 'Depression',
  },
  {
    id: 'alcoholanddrugs',
    img: Worry,
    title: 'Alcohol And Drugs',
  },
  {
    id: 'optimism',
    img: BackInControl,
    title: 'Optimism',
  },
  {
    id: 'forgiveness',
    img: RecognizingTrigers,
    title: 'Forgiveness',
  },
];

export { assessments };
