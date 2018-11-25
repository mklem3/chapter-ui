import * as React from 'react';
import FloatingActionButton from '../../components/FloatingAtionButton';
import IssuesTable from '../../components/IssuesTable/IssuesTable';

class Issues extends React.Component {
  public render() {
    return (
      <div>
       <IssuesTable />
       <FloatingActionButton />
     </div>
    );
  }
}

export default Issues;
