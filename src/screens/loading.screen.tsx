/**
 * A very very basic loading screen component
 */
import * as React from 'react';

interface ILoadingScreenProps {
}

const LoadingScreen: React.FunctionComponent<ILoadingScreenProps> = (props) => {
  return <h1>Loading...</h1>
    ;
};

export default LoadingScreen;
