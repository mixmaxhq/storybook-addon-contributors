import addons, { makeDecorator } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

import { PARAM_KEY, SET } from './constants';

export const withAuthors = makeDecorator({
  name: 'withAuthors',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, opt) => {
    const story = getStory(context);

    const channel = addons.getChannel();

    channel.emit(SET, {
      authors: story.type.authors,
      component: {
        name: story.type.displayName,
        version: story.type.version,
      },
    });

    return story;
  },
})
