import React from 'react';

import Loading from './styles';

import loadingGIF from '../../assets/loading.gif';

const LoadingComponent: React.FC = () => {
  return (
        <Loading>
                Loading
                <img src={loadingGIF} alt="loading"/>
        </Loading>
        );
}

export default LoadingComponent;
