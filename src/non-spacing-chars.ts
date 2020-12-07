import { Interval } from './models';

/* sorted list of non-overlapping intervals of non-spacing characters */
/* generated by "uniset +cat=Me +cat=Mn +cat=Cf -00AD +1160-11FF +200B c" */
const combining: Interval[] = [
  { first: 0x0300, last: 0x036f },
  { first: 0x0483, last: 0x0486 },
  { first: 0x0488, last: 0x0489 },
  { first: 0x0591, last: 0x05bd },
  { first: 0x05bf, last: 0x05bf },
  { first: 0x05c1, last: 0x05c2 },
  { first: 0x05c4, last: 0x05c5 },
  { first: 0x05c7, last: 0x05c7 },
  { first: 0x0600, last: 0x0603 },
  { first: 0x0610, last: 0x0615 },
  { first: 0x064b, last: 0x065e },
  { first: 0x0670, last: 0x0670 },
  { first: 0x06d6, last: 0x06e4 },
  { first: 0x06e7, last: 0x06e8 },
  { first: 0x06ea, last: 0x06ed },
  { first: 0x070f, last: 0x070f },
  { first: 0x0711, last: 0x0711 },
  { first: 0x0730, last: 0x074a },
  { first: 0x07a6, last: 0x07b0 },
  { first: 0x07eb, last: 0x07f3 },
  { first: 0x0901, last: 0x0902 },
  { first: 0x093c, last: 0x093c },
  { first: 0x0941, last: 0x0948 },
  { first: 0x094d, last: 0x094d },
  { first: 0x0951, last: 0x0954 },
  { first: 0x0962, last: 0x0963 },
  { first: 0x0981, last: 0x0981 },
  { first: 0x09bc, last: 0x09bc },
  { first: 0x09c1, last: 0x09c4 },
  { first: 0x09cd, last: 0x09cd },
  { first: 0x09e2, last: 0x09e3 },
  { first: 0x0a01, last: 0x0a02 },
  { first: 0x0a3c, last: 0x0a3c },
  { first: 0x0a41, last: 0x0a42 },
  { first: 0x0a47, last: 0x0a48 },
  { first: 0x0a4b, last: 0x0a4d },
  { first: 0x0a70, last: 0x0a71 },
  { first: 0x0a81, last: 0x0a82 },
  { first: 0x0abc, last: 0x0abc },
  { first: 0x0ac1, last: 0x0ac5 },
  { first: 0x0ac7, last: 0x0ac8 },
  { first: 0x0acd, last: 0x0acd },
  { first: 0x0ae2, last: 0x0ae3 },
  { first: 0x0b01, last: 0x0b01 },
  { first: 0x0b3c, last: 0x0b3c },
  { first: 0x0b3f, last: 0x0b3f },
  { first: 0x0b41, last: 0x0b43 },
  { first: 0x0b4d, last: 0x0b4d },
  { first: 0x0b56, last: 0x0b56 },
  { first: 0x0b82, last: 0x0b82 },
  { first: 0x0bc0, last: 0x0bc0 },
  { first: 0x0bcd, last: 0x0bcd },
  { first: 0x0c3e, last: 0x0c40 },
  { first: 0x0c46, last: 0x0c48 },
  { first: 0x0c4a, last: 0x0c4d },
  { first: 0x0c55, last: 0x0c56 },
  { first: 0x0cbc, last: 0x0cbc },
  { first: 0x0cbf, last: 0x0cbf },
  { first: 0x0cc6, last: 0x0cc6 },
  { first: 0x0ccc, last: 0x0ccd },
  { first: 0x0ce2, last: 0x0ce3 },
  { first: 0x0d41, last: 0x0d43 },
  { first: 0x0d4d, last: 0x0d4d },
  { first: 0x0dca, last: 0x0dca },
  { first: 0x0dd2, last: 0x0dd4 },
  { first: 0x0dd6, last: 0x0dd6 },
  { first: 0x0e31, last: 0x0e31 },
  { first: 0x0e34, last: 0x0e3a },
  { first: 0x0e47, last: 0x0e4e },
  { first: 0x0eb1, last: 0x0eb1 },
  { first: 0x0eb4, last: 0x0eb9 },
  { first: 0x0ebb, last: 0x0ebc },
  { first: 0x0ec8, last: 0x0ecd },
  { first: 0x0f18, last: 0x0f19 },
  { first: 0x0f35, last: 0x0f35 },
  { first: 0x0f37, last: 0x0f37 },
  { first: 0x0f39, last: 0x0f39 },
  { first: 0x0f71, last: 0x0f7e },
  { first: 0x0f80, last: 0x0f84 },
  { first: 0x0f86, last: 0x0f87 },
  { first: 0x0f90, last: 0x0f97 },
  { first: 0x0f99, last: 0x0fbc },
  { first: 0x0fc6, last: 0x0fc6 },
  { first: 0x102d, last: 0x1030 },
  { first: 0x1032, last: 0x1032 },
  { first: 0x1036, last: 0x1037 },
  { first: 0x1039, last: 0x1039 },
  { first: 0x1058, last: 0x1059 },
  { first: 0x1160, last: 0x11ff },
  { first: 0x135f, last: 0x135f },
  { first: 0x1712, last: 0x1714 },
  { first: 0x1732, last: 0x1734 },
  { first: 0x1752, last: 0x1753 },
  { first: 0x1772, last: 0x1773 },
  { first: 0x17b4, last: 0x17b5 },
  { first: 0x17b7, last: 0x17bd },
  { first: 0x17c6, last: 0x17c6 },
  { first: 0x17c9, last: 0x17d3 },
  { first: 0x17dd, last: 0x17dd },
  { first: 0x180b, last: 0x180d },
  { first: 0x18a9, last: 0x18a9 },
  { first: 0x1920, last: 0x1922 },
  { first: 0x1927, last: 0x1928 },
  { first: 0x1932, last: 0x1932 },
  { first: 0x1939, last: 0x193b },
  { first: 0x1a17, last: 0x1a18 },
  { first: 0x1b00, last: 0x1b03 },
  { first: 0x1b34, last: 0x1b34 },
  { first: 0x1b36, last: 0x1b3a },
  { first: 0x1b3c, last: 0x1b3c },
  { first: 0x1b42, last: 0x1b42 },
  { first: 0x1b6b, last: 0x1b73 },
  { first: 0x1dc0, last: 0x1dca },
  { first: 0x1dfe, last: 0x1dff },
  { first: 0x200b, last: 0x200f },
  { first: 0x202a, last: 0x202e },
  { first: 0x2060, last: 0x2063 },
  { first: 0x206a, last: 0x206f },
  { first: 0x20d0, last: 0x20ef },
  { first: 0x302a, last: 0x302f },
  { first: 0x3099, last: 0x309a },
  { first: 0xa806, last: 0xa806 },
  { first: 0xa80b, last: 0xa80b },
  { first: 0xa825, last: 0xa826 },
  { first: 0xfb1e, last: 0xfb1e },
  { first: 0xfe00, last: 0xfe0f },
  { first: 0xfe20, last: 0xfe23 },
  { first: 0xfeff, last: 0xfeff },
  { first: 0xfff9, last: 0xfffb },
  { first: 0x10a01, last: 0x10a03 },
  { first: 0x10a05, last: 0x10a06 },
  { first: 0x10a0c, last: 0x10a0f },
  { first: 0x10a38, last: 0x10a3a },
  { first: 0x10a3f, last: 0x10a3f },
  { first: 0x1d167, last: 0x1d169 },
  { first: 0x1d173, last: 0x1d182 },
  { first: 0x1d185, last: 0x1d18b },
  { first: 0x1d1aa, last: 0x1d1ad },
  { first: 0x1d242, last: 0x1d244 },
  { first: 0xe0001, last: 0xe0001 },
  { first: 0xe0020, last: 0xe007f },
  { first: 0xe0100, last: 0xe01ef },
];

export default combining;
