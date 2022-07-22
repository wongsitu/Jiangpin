import i18next from 'i18next';

type ListElement = {
  year: number | string;
  location: string;
  title: string;
  institution: string;
  tc?: string;
  es?: string;
  en?: string;
};

export const honorableMentions: ListElement[] = [
  {
    year: 1985,
    location: i18next.t('LIMA'),
    title: '“Salón de la Acuarela”',
    institution: 'ICPNA',
    tc: '美秘文化中心全国水彩画大奖赛',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: '“Salón de la Acuarela”',
    institution: 'Museo de Arte Italiano',
    tc: '美秘文化中心全国水彩画大奖赛',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 1989,
    location: i18next.t('LIMA'),
    title: 'Concurso Exposición de Embajada Argentina',
    institution: 'Galería Banco de Comercio',
    tc: '美秘文化中心全国水彩画大奖赛',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
];

export const individualExhibitions: ListElement[] = [
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual de Dibujos y Oleos',
    institution: 'Galería Instituto Cultural Peruano Norteamericano',
    tc: '美秘文化中心举行的第一个个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 1988,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual Oleos',
    institution: 'Galería Goya',
    tc: '戈雅艺术画廊个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 1989,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual',
    institution: 'Galería de Arte Sol',
    tc: '太阳画廊个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 2013,
    location: i18next.t('LIMA'),
    title: 'Exposición individual',
    institution: 'Club Empresarial',
    tc: '企业家俱乐部个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 2016,
    location: i18next.t('SHANGAI'),
    title: 'Exposición individual',
    institution: 'Gallery "Golden Apple"',
    tc: '金苹果画廊个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
];

export const collectiveExhibitions: ListElement[] = [
  {
    year: 1978,
    location: i18next.t('SHANGAI'),
    title: 'Salón de Oleo',
    institution: '',
  },
  {
    year: 1979,
    location: i18next.t('SHANGAI'),
    title: 'Exposición Otoño',
    institution: '',
  },
  {
    year: 1980,
    location: i18next.t('SHANGAI'),
    title: 'Exposición de Pintores',
    institution: '',
  },
  {
    year: 1985,
    location: i18next.t('LIMA'),
    title: 'Salón de la Acuarela',
    institution: 'Galería del ICPNA',
    tc: '金苹果画廊个人画展',
    es: 'Ganador de mención Honrosa',
    en: 'Honorable mention winner',
  },
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual de Oleo y Dibujos',
    institution: 'Galería del ICPNA',
  },
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: 'Salón de Acuarela',
    institution: 'Museo de Arte Italiano.',
  },
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: 'Semana “Cultural China”',
    institution: 'Palacio de Osambela',
  },
  {
    year: 1988,
    location: i18next.t('LIMA'),
    title: 'Exposición de las Bodas de Oro',
    institution: 'Galería de ICPNA',
  },
  {
    year: 1988,
    location: i18next.t('LIMA'),
    title: 'Concurso de Exposición de Dibujos',
    institution: 'Embajada Argentina',
  },
  {
    year: '1993-1994-1995',
    location: i18next.t('LIMA'),
    title: 'Lima-Perú Exposición Colectiva, 16, 17 y 18 Aniversario',
    institution: 'Galería de Arte Sol',
  },
  {
    year: 1995,
    location: i18next.t('LIMA'),
    title: 'Exposición Colectiva',
    institution: 'Galería 715',
  },
  {
    year: 1995,
    location: i18next.t('LIMA'),
    title:
      'Exposición Colectiva, presentado por el Colegio Roosevelt para celebrar Bodas de Oro',
    institution: 'Museo Pedro de Osma “Pedro de Osma',
  },
  {
    year: 1996,
    location: i18next.t('LIMA'),
    title: 'Exposición Colectiva',
    institution: 'Galería la Municipalidad de Miraflores ',
  },
  {
    year: 1996,
    location: i18next.t('LIMA'),
    title: 'Encuentro de Arte para celebrar Bodas de Oro',
    institution: 'Museo Pedro de Osma',
  },
  {
    year: '1997 – 2004',
    location: i18next.t('LIMA'),
    title: 'Exposición Colectiva de Arte',
    institution: 'Centro Naval del Perú',
  },
  {
    year: '2011 - 2012',
    location: i18next.t('LIMA'),
    title: ' Exposición Colectiva de Oleo Peruano',
    institution: 'Club Empresarial, Centro Naval de Perú',
  },
  {
    year: 2014,
    location: i18next.t('BEIJING'),
    title: ' Pintura China Global',
    institution: '',
  },
];
