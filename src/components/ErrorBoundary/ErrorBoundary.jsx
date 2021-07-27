import { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    // Если метод был вызван значит есть ошибка!
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    // Если есть ошибка...
    if (this.state.errorInfo) {
      // Рендерим fallback UI
      return (
        <div>
          <details className={styles.details}>
            <summary className={styles.summary}>
              Упс, произошла ошибка
              <span role="img" aria-label="shit">
                💩
              </span>
            </summary>
            <div>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
              <IconButton
                color="secondary"
                aria-label="refresh page"
                component="span"
              >
                <RefreshIcon onClick={this.reloadPage} />
              </IconButton>
            </div>
          </details>
        </div>
      );
    }

    // Если все ок, рендерим детей
    return this.props.children;
  }
}

export default ErrorBoundary;
