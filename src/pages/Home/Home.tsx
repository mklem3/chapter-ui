import * as React from 'react';
import ChapterTable from '../../components/ChapterTable';
import ActionsTable from '../../components/ActionsTable'
class Home extends React.Component {
  public render() {
    return (
      <div>
       <ChapterTable />
       <ActionsTable />
     </div>
    );
  }
}

export default Home;
