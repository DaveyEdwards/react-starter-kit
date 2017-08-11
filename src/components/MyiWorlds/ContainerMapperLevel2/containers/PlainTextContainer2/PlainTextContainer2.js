/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, createFragmentContainer } from 'react-relay';
import PlainText from '../../../PlainText/PlainText';
import s from './PlainTextContainer2.css';

class PlainTextContainer2 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    n0de: PropTypes.object,
  };

  static defaultProps = {
    title: null,
    subtitle: null,
    description: null,
    value: null,
  };

  render() {
    return (
      <PlainText
        title={this.props.n0de.title}
        subtitle={this.props.n0de.subtitle}
        description={this.props.n0de.description}
        value={this.props.n0de.value}
      />
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(PlainTextContainer2),
  graphql`
    fragment PlainTextContainer2_n0de on N0de {
      title
      subtitle
      description
      value
    }
  `,
);
