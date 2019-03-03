import React, { Fragment, Component } from 'react';
import { Badge, Icons, IconButton, Link, WithTooltip } from '@storybook/components';
import { css, keyframes, styled } from '@storybook/theming';

import { SET } from './constants';

const Title = styled.div`
  font-weight: ${props => props.theme.typography.weight.black};
`;

const StyledBadge = styled(Badge)`
  margin-left: 5px;
  vertical-align: middle;
`;

const Description = styled.div`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 280px;
  padding: 15px;
  box-sizing: border-box;
  color: ${props => props.theme.color.darker};
  line-height: 18px;
`;

const loading = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: .4;
  }
`;

const Loader = styled.span`
  ${props => props.loading
    && css`
      background: rgba(0, 0, 0, 0.1);
      animation: ${loading} 1.5s ease-in-out infinite;
      color: transparent;
      pointer-events: none;

      * {
        opacity: 0;
      }
    `}
`;

class Tool extends Component {
  state = {
    authors: [],
    component: {},
    loading: true,
    expanded: false,
  };

  componentDidMount() {
    const { api } = this.props;

    api.on(SET, (data) => this.setState({
      loading: false,
      ...data
    }));
  }

  onVisibilityChange = (status) => {
    this.setState({
      expanded: status,
    });
  }

  renderComponentInfo = () => {
    const { component, loading } = this.state;

    return (
      <Loader loading={loading}>
        {component.name || 'Component name was not defined'}
        {component.version && (
          <StyledBadge status="neutral">{component.version}</StyledBadge>
        )}
      </Loader>
    );
  }

  renderAuthorsInfo = () => {
    const { authors, loading } = this.state;

    if (authors.length === 0) {
      return (
        <Loader loading={loading}>
          Authors was not defined
        </Loader>
      )
    }

    return authors.map(({ name, url}) => (
      <div key={name}>
        <Loader loading={loading}>
          <Link href={url}>
            {name || `Authors was not defined`}
          </Link>
        </Loader>
      </div>
    ));
  }

  renderContent = () => {
    const { authors, loading } = this.state;

    return (
      <Wrapper>
        <Title>
          <Loader loading={loading}>
            Component
          </Loader>
        </Title>
        <Description>
          {this.renderComponentInfo()}
        </Description>
        <Title>
          <Loader loading={loading}>
            {authors.length > 1 ? 'Authors' : 'Author'}
          </Loader>
        </Title>
        <Description>
          {this.renderAuthorsInfo()}
        </Description>
      </Wrapper>
    );
  }

  render() {
    const { expanded } = this.state;

    return (
      <WithTooltip
        onVisibilityChange={this.onVisibilityChange}
        placement="top"
        tooltip={this.renderContent()}
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
