import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
    blueDarkA,
    blackA,
    grayDark,
  } from '@radix-ui/colors';
export const { styled, config, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      ...blueDarkA,
      ...blackA,
      ...grayDark,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '20px',
    },
    radii: {
      1: '8px',
      2: '16px',
      3: '24px',
      round: '100%',
      chip: '9999px'
    }
  }
});

export type CSS = Stitches.CSS<typeof config>