export const RatingApperance = {
  high: 'highRating',
  middle: 'middleRating',
  low: 'lowRating'
} as const;

export type RatingApperances =
  (typeof RatingApperance)[keyof typeof RatingApperance];
