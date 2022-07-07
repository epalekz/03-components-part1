import React from "react";
import Typography from "@mui/material/Typography";

const logErrorToMyService = (error, errorInfo) => {
  console.log(error, errorInfo);
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Typography variant="body2" color="text.secondary">
          Oops, something went wrong... We are doing our best to fix the issue
        </Typography>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
