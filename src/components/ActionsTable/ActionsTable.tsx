import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ChapterStore from '../../mobx/chapterStore';
// @ts-ignore
import { Table } from 'evergreen-ui';

interface InjectedProps {
  store: ChapterStore;
}

@inject('store')
@observer
export class ActionsTable extends React.Component {
  private get injected() {
    return this.props as InjectedProps;
  }
  private mapStatusToIntent = (status: string) => {
    if (status === 'cancelled') {
      return 'danger';
    }
    if (status === 'pending') {
      return 'warning';
    }
    if (status === 'resolved') {
      return 'success';
    }
    return 'none';
  };

  public render() {
    const { store } = this.injected;
    const { actions } = store;

    return (
        <Table>
          <Table.Head>
            <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
              Name
            </Table.TextCell>
            <Table.TextCell>Status</Table.TextCell>
            <Table.TextCell>Created</Table.TextCell>
          </Table.Head>
          <Table.Body>
            {actions.map(action => (
              <Table.Row key={action.id} intent={this.mapStatusToIntent(action.status)}>
                <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
                  {action.name}
                </Table.TextCell>
                <Table.TextCell>{action.status}</Table.TextCell>
                <Table.TextCell>{action.createdAt}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
    );
  }
}

export default ActionsTable;
