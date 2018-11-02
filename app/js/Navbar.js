import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  grow: {
    flexGrow: 1,
  },
  brandImage: {
    height: '1.5rem',
  },
};

class Navbar extends React.Component {
  renderLink(to, text) {
    return (
      <Link
        smooth
        to={to}
      >
        <Button>
          {text}
        </Button>
      </Link>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <div className={classes.grow}>
              <img src="images/logo-trimmed.png" alt="WeTrust" className={classes.brandImage} />
            </div>
            {this.renderLink('#main-section', 'Home')}
            {this.renderLink('#faq-section', 'FAQ')}
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default withStyles(styles)(Navbar);