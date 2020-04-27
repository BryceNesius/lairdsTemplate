import * as React from 'react';

export interface IHomeScreenProps {
}

export interface IHomeScreenState {
}

/**
 * This is a class component skeleton with props, state, and constructor. [typescript snippets - tsrcfull]
 */
export default class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {
  constructor(props: IHomeScreenProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <>
      <h1>Hello World!</h1>
      <p>This is the home page</p>
      </>
    );
  }
}
