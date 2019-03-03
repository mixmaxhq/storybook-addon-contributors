import React, { Component } from 'react';
import { Icons, IconButton, WithTooltip, TooltipMessage } from '@storybook/components';
import { styled } from '@storybook/theming';

class Tool extends Component {
  state = {
    expanded: false,
  }

  onVisibilityChange = (status) => {
    this.setState({
      expanded: status,
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <WithTooltip
        onVisibilityChange={this.onVisibilityChange}
        placement="top"
        tooltip={(
          <TooltipMessage
            title="Author"
            desc="testing"
            links={[
              {
                title: 'View Profile',
                href: 'https://google.com',
              },
            ]}
          />
        )}
        tooltipShown={expanded}
        trigger="click"
      >
        <IconButton key="" title="Component Author">
          <Icons icon="user" />
        </IconButton>
      </WithTooltip>
    );
  }
}

export default Tool;
