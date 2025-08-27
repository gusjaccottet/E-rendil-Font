import type { FontMetadata, CopyrightInfo } from './types';

export const FONT_NAME = 'Eärendil';
export const FONT_TAGLINE = 'A star in the darkness, a whisper in the stone.';

export const GLYPH_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  punctuation: '. , ; : ? ! ( ) [ ] { } - – — " \' ‘ ’ “ ” *'.split(' '),
  symbols: '@ & # % $ € £ ¥ © ® ™'.split(' '),
  diacritics: 'Á À Â Ã Ä Å á à â ã ä å Ç ç É È Ê Ë é è ê ë Í Î Ï í î ï Ñ ñ Ó Ô Õ Ö ó ô õ ö Ú Û Ü ú û ü Ý ÿ'.split(' '),
  ligatures: ['fi', 'fl', 'Th', 'st', 'ct'],
  swashes: ['A', 'E', 'Q', 'R']
};

export const FONT_METADATA: Record<string, FontMetadata> = {
  regular: {
    familyName: 'Eärendil',
    styleName: 'Regular',
    fullName: 'Eärendil Regular',
    postscriptName: 'Earendil-Regular',
  },
  italic: {
    familyName: 'Eärendil',
    styleName: 'Italic',
    fullName: 'Eärendil Italic',
    postscriptName: 'Earendil-Italic',
  },
  bold: {
    familyName: 'Eärendil',
    styleName: 'Bold',
    fullName: 'Eärendil Bold',
    postscriptName: 'Earendil-Bold',
  },
  silmaril: {
    familyName: 'Eärendil',
    styleName: 'Silmaril',
    fullName: 'Eärendil Silmaril',
    postscriptName: 'Earendil-Silmaril',
  }
};

export const COPYRIGHT_INFO: CopyrightInfo = {
  designer: 'Gustavo Jaccottet Freitas',
  copyright: `© ${new Date().getFullYear()} Gustavo Jaccottet Freitas. All rights reserved.`,
  license: 'A custom license, allowing for personal and commercial use with attribution.',
  version: '1.000',
};

export const KERNING_PAIRS = ['AV', 'Wa', 'To', 'Ty', 'P.', 'r.', 'Yo', 'L’', 'We'];