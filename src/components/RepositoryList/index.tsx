import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as actions from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[]
}
interface DispatchProps {
  loadRequest(): void
  loadSuccess(data: Repository[]): void
  loadFailure(): void
}

class RepositoryList extends Component<StateProps, DispatchProps> {
  componentDidMount() { }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {
          repositories.map((repository) => (<li>{repository.name}</li>))
        }
      </ul>

    );
  }
}
const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
