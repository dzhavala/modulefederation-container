import React from 'react';

interface IComponentProps {
    children: React.ReactNode
}

interface IState {
    hasError: boolean
}

const NotFound = () => <>Component has not been loaded</>;
const Loading = () => <>Loading the remote component...</>

const AsyncLoader = ({ children }: IComponentProps) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  )
};

class ErrorBoundary extends React.Component<IComponentProps, IState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <NotFound /> : this.props.children;
  }
}

export default AsyncLoader;
