/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import PopoverAppBar from 'components/PopoverAppBar';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /* Check the prop types are valid */
  static propTypes = {
    children: PropTypes.node,
  };

  /* Render the AppBar and it's children (the component beneath the AppBar) */
  render() {
    return (
      <div>
        <PopoverAppBar router={this.props.router}>
          {this.props.children}
        </PopoverAppBar>
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.any,
};
