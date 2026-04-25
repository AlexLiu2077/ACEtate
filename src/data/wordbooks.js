const basicElementWords = [
  { id: 'hydrogen', term: 'Hydrogen (H)', meaning: '氢' },
  { id: 'helium', term: 'Helium (He)', meaning: '氦' },
  { id: 'lithium', term: 'Lithium (Li)', meaning: '锂' },
  { id: 'beryllium', term: 'Beryllium (Be)', meaning: '铍' },
  { id: 'boron', term: 'Boron (B)', meaning: '硼' },
  { id: 'carbon', term: 'Carbon (C)', meaning: '碳' },
  { id: 'nitrogen', term: 'Nitrogen (N)', meaning: '氮' },
  { id: 'oxygen', term: 'Oxygen (O)', meaning: '氧' },
  { id: 'fluorine', term: 'Fluorine (F)', meaning: '氟' },
  { id: 'neon', term: 'Neon (Ne)', meaning: '氖' },
  { id: 'sodium', term: 'Sodium (Na)', meaning: '钠' },
  { id: 'magnesium', term: 'Magnesium (Mg)', meaning: '镁' },
  { id: 'aluminum', term: 'Aluminum (Al)', meaning: '铝' },
  { id: 'silicon', term: 'Silicon (Si)', meaning: '硅' },
  { id: 'phosphorus', term: 'Phosphorus (P)', meaning: '磷' },
  { id: 'sulfur', term: 'Sulfur (S)', meaning: '硫' },
  { id: 'chlorine', term: 'Chlorine (Cl)', meaning: '氯' },
  { id: 'argon', term: 'Argon (Ar)', meaning: '氩' },
  { id: 'potassium', term: 'Potassium (K)', meaning: '钾' },
  { id: 'calcium', term: 'Calcium (Ca)', meaning: '钙' },
];

const extendedElementWords = [
  { id: 'chromium', term: 'Chromium (Cr)', meaning: '铬' },
  { id: 'manganese', term: 'Manganese (Mn)', meaning: '锰' },
  { id: 'iron', term: 'Iron (Fe)', meaning: '铁' },
  { id: 'nickel', term: 'Nickel (Ni)', meaning: '镍' },
  { id: 'copper', term: 'Copper (Cu)', meaning: '铜' },
  { id: 'zinc', term: 'Zinc (Zn)', meaning: '锌' },
  { id: 'bromine', term: 'Bromine (Br)', meaning: '溴' },
  { id: 'silver', term: 'Silver (Ag)', meaning: '银' },
  { id: 'tin', term: 'Tin (Sn)', meaning: '锡' },
  { id: 'iodine', term: 'Iodine (I)', meaning: '碘' },
  { id: 'barium', term: 'Barium (Ba)', meaning: '钡' },
  { id: 'platinum', term: 'Platinum (Pt)', meaning: '铂' },
  { id: 'gold', term: 'Gold (Au)', meaning: '金' },
  { id: 'mercury', term: 'Mercury (Hg)', meaning: '汞' },
];

const elementChapters = [
  { id: 'basic_first_20_elements', title: '基础：前二十个元素', words: basicElementWords },
  { id: 'extended_common_elements', title: '拓展：其他常见元素', words: extendedElementWords },
];

const wordbooks = [
  {
    id: 'college_chemistry',
    name: '大学化学',
    description: '大学化学课程词库',
    image: '/assets/cats/orange_2.jpg',
    chapters: elementChapters,
  },
  {
    id: 'chemical_principles',
    name: '化学原理',
    description: '化学原理课程词库',
    image: '/assets/cats/black_2.jpg',
    chapters: elementChapters,
  },
];

export default wordbooks;
