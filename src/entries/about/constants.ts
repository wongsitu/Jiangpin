import i18next from 'i18next';

type ListElement = {
  year: number;
  location: string;
  title: string;
  institution: string;
  descriptionCN?: string;
  descriptionES?: string;
  descriptionEN?: string;
};

export const honorableMentions: ListElement[] = [
  {
    year: 1985,
    location: i18next.t('LIMA'),
    title: '“Salón de la Acuarela”',
    institution: 'ICPNA',
    descriptionCN: '美秘文化中心全国水彩画大奖赛',
    descriptionES: 'Gano mención Honrosa',
    descriptionEN: 'Honorable mention winner',
  },
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: '“Salón de la Acuarela”',
    institution: 'Museo de Arte Italiano',
    descriptionCN: '美秘文化中心全国水彩画大奖赛',
    descriptionES: 'Gano mención Honrosa',
    descriptionEN: 'Honorable mention winner',
  },
  {
    year: 1989,
    location: i18next.t('LIMA'),
    title: 'Concurso Exposición de Embajada Argentina',
    institution: 'Galería Banco de Comercio',
    descriptionCN: '美秘文化中心全国水彩画大奖赛',
    descriptionES: 'Gano mención Honrosa',
    descriptionEN: 'Honorable mention winner',
  },
];

export const individualExhibitions: ListElement[] = [
  {
    year: 1987,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual de Dibujos y Oleos',
    institution: 'Galería Instituto Cultural Peruano Norteamericano',
    descriptionCN: '美秘文化中心举行的第一个个人画展',
  },
  {
    year: 1988,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual Oleos',
    institution: 'Galería Goya',
    descriptionCN: '戈雅艺术画廊个人画展',
  },
  {
    year: 1989,
    location: i18next.t('LIMA'),
    title: 'Exposición Individual',
    institution: 'Galería de Arte Sol',
    descriptionCN: '太阳画廊个人画展',
  },
  {
    year: 2013,
    location: i18next.t('LIMA'),
    title: 'Exposición individual',
    institution: 'Club Empresarial',
    descriptionCN: '企业家俱乐部个人画展',
  },
  {
    year: 2016,
    location: i18next.t('SHANGAI'),
    title: 'Exposición individual',
    institution: 'Gallery "Golden Apple"',
    descriptionCN: '金苹果画廊个人画展',
  },
];
