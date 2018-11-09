import * as React from 'react';
import ChaptersTable from '../../components/ChaptersTable';
import FloatingActionButton from '../../components/FloatingAtionButton';

class Chapters extends React.Component {
  public render() {
    return (
      <div>
       <ChaptersTable />
       <FloatingActionButton />
     </div>
    );
  }
}

export default Chapters;
