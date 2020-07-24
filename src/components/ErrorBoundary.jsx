import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      if (fallback) return fallback;
      return <React.Fragment />;
    }

    return children;
  }
}
export default ErrorBoundary;
