import * as React from 'react';
import ActionsTable from '../../components/ActionsTable';
import FloatingActionButton from '../../components/FloatingAtionButton';

class Actions extends React.Component {
  public render() {
    return (
      <div>
       <ActionsTable />
       <FloatingActionButton />
     </div>
    );
  }
}

export default Actions;
