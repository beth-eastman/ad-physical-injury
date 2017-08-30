import * as React from 'react';
import { assessments } from 'local-t2-assessment-suite';
// import AssessmentsList from 'local'
const { Depression, Physical, AlcoholDrugs, Optimism, Forgiveness } = assessments;

interface Props {
  match: any;
  history: any;
  basePath: any;
}

const Assessment: React.SFC<Props> = (props) => {

  const handleCancel = () => {
    return (err, assessment) => {
      props.history.push(props.basePath);
    }
  }

  const getAssessment = () => {
    let assessment = null;
    switch(props.match.params.id) {
      case '1':
        assessment = (<Depression onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Depression Module Coming Soon</h4>);
        break;
      case '2':
        assessment = (<Physical onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Physical Injury Resiliance Module Coming Soon</h4>);
        break;
      case '3':
        assessment = (<AlcoholDrugs onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Alcohol and Drugs Module Coming Soon</h4>);
        break;
      case '4':
        assessment = (<Optimism onCancel={() => {handleCancel()}} />);
        break;
      case '5':
        assessment = (<Forgiveness onCancel={() => {handleCancel()}} />);
        break;
      default:
        assessment = (<h4>Assessment not found</h4>);
        break;
    }
    return assessment;
  };

  return (
    <div>{ getAssessment() }</div>
  );

}

export default Assessment;
