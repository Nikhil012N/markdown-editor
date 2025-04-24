import React from "react";
import { Box, Typography, Button } from "@mui/material";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error);
    console.error("Error info:", errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          textAlign="center"
          fontFamily="monospace"
          bgcolor="#fafafa"
          p={4}
        >
          <Typography variant="h4" gutterBottom color="error">
            Something went wrong.
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            An unexpected error has occurred. Please try again.
          </Typography>
          <Button variant="contained" color="primary" onClick={this.handleRetry}>
            Retry
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
