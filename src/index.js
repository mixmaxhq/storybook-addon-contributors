import addons, { makeDecorator } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

import { PARAM_KEY, SET } from './constants';

export const withContributors = makeDecorator({
  name: 'withContributors',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, opt) => {
    const story = getStory(context);

    const channel = addons.getChannel();

    channel.emit(SET, {
      contributors: story.type.contributors,
      component: {
        name: story.type.displayName,
        version: story.type.version,
      },
    });

    return story;
  },
})
