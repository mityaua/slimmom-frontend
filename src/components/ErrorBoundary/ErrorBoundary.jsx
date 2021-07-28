import { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

import styles from './ErrorBoundary.module.css';

// Компонент обработки ошибок рендера
class ErrorBoundary extends Component {
  state = { hasError: false, error: '', info: '' };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error, info: info });
  }

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? (
      <details className={styles.details}>
        <summary className={styles.summary}>Упс, произошла ошибка :(</summary>
        <div>
          {error && error.toString()}
          <br />
          {info.componentStack}
          <IconButton
            color="inherit"
            title="Обновить страницу"
            aria-label="refresh page"
            component="span"
          >
            <RefreshIcon onClick={this.reloadPage} />
          </IconButton>
        </div>
      </details>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
