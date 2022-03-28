import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export const { styled, config, getCssText } = createStitches();

export type CSS = Stitches.CSS<typeof config>