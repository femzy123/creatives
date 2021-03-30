const sharedOptions = {
    // Colors
    colorBrand: '#E5418B',
    colorBrandAccent: '#FEF6FD',
    colorBrandAccentSecondary: '#4D3960',
    colorAccent: '#3FBAEF',
    colorAccentSecondary: '#9D87B5',

    colorBlack: '#000000',
    colorWhite: '#FFFFFF',
    colorDark: '#3A3A59',
    colorGreen: '#66CC91',
    colorNotQuite: '#FFEC68',
    colorStar: '#E8BA49',
    colorSun: '#FFDF8F',

    colorLabel1: '#DE7272',
    colorLabel2: '#72DEAA',
    colorLabel3: '#72AADE',
    colorLabel4: '#DEB372',

    colorFlashcards: '#375E97',
    colorNewFlashcards: '#4675BB',
    colorShadowing: '#3F681C',
    colorDrills: '#FB6542',
    colorNative: '#FFBB00',
    colorSpeaking: '#97375E',
    colorDialogue: '#00FFBB',

    colorDashboardDarkGreen: '#4B9B87',
    colorDashboardDarkGreenAccent: '#65B4A0',

    colorTransparent: '#00000000',

    // Gradients
    gradientBrand: 'linear-gradient(219.44deg, #E5418B 12.93%, #7101A7 90.66%)',
    gradientAccent:
        'linear-gradient(221.05deg, #3FBAEF 14.66%, #14AAB8 87.51%)',
    gradientAccentSecondary:
        'linear-gradient(221.05deg, #9D87B5 14.66%, #7A6EB9 87.51%)',
    gradientGrammar:
        'linear-gradient(221.05deg, #6CCAF2 14.66%, #14AAB8 87.51%)',
    gradientVocabulary:
        'linear-gradient(221.05deg, #0FF293 14.66%, #54E0E0 87.51%)',
    gradientKanji: 'linear-gradient(221.05deg, #D68F5F 14.66%, #E51D1F 87.51%)',
    gradientN5: 'linear-gradient(221.05deg, #0E6EB8 14.66%, #2B43CE 87.51%)',
    gradientN4: 'linear-gradient(221.05deg, #14ADA6 14.66%, #328DC2 87.51%)',
    gradientN3: 'linear-gradient(221.05deg, #8FC320 14.66%, #6FC74F 87.51%)',
    gradientN2: 'linear-gradient(221.05deg, #F39514 14.66%, #E2E158 87.51%)',
    gradientN1: 'linear-gradient(221.05deg, #E5007F 14.66%, #E83049 87.51%)',

    // Brands
    brandsDiscord: '#7289DA',
};

const lightModeOptions = {
    ...sharedOptions,
    // Colors
    colorSubtext: '#6E7291',
    colorFlourish: '#E9E9EC',
    colorBg: '#F0F0F5',
    colorInputBg: '#F3F3F7',
    colorHT1: '#BAD9E3',
    colorHT2: '#D5C7FA',
    colorHT3: '#DAF6A2',
    colorHT4: '#F9B9C5',
    colorHT5: '#88F0A5',
    colorHT6: '#F9E17A',
    colorHT1A: '#DDEAEE',
    colorHT2A: '#EEE8FD',
    colorHT3A: '#ECFAD1',
    colorHT4A: '#FCE3E8',
    colorHT5A: '#CFF7DB',
    colorHT6A: '#F9EDB9',
    colorFire: '#FF9900',
    colorRed: '#E05252',
    colorSubmenuActive: 'rgba(122, 122, 159, 0.1)',
    colorGrammarSummary: 'rgba(249, 225, 122, 0.1)',
    colorInDepthLook: '#F9F2EC',
    colorBgLink: '#E4E4ED',
    colorTextBase: 'var(--color-dark)',
    colorSubtextInverse: '#A6A6BF',
    colorTextInverse: 'var(--color-white)',
    gradientThemed: 'var(--gradient-accent)',
    colorAccentThemed: 'var(--color-accent)',
    colorBrandAccentThemed: 'var(--color-brand-accent)',
    colorCardBg: 'var(--color-white)',
};

const darkModeOptions = {
    // Colors
    ...sharedOptions,
    colorBg: '#2C2D44',
    colorSubtext: '#A6A6BF',
    colorFlourish: '#434365',
    colorInputBg: '#303050',
    colorHT1: '#7C6AAF',
    colorHT2: '#B46579',
    colorHT3: '#B474B1',
    colorHT4: '#9E6B60',
    colorHT5: '#6579B4',
    colorHT6: '#669973',
    colorHT1A: '#5A4A8C',
    colorHT2A: '#9B4B5F',
    colorHT3A: '#9B4B98',
    colorHT4A: '#855247',
    colorHT5A: '#4B5F9B',
    colorHT6A: '#478557',
    colorFire: '#0597D6',
    colorRed: '#E96363',
    colorSubmenuActive: 'rgba(0, 0, 0, 0.1)',
    colorGrammarSummary: '#444054',
    colorInDepthLook: '#3F3F60',
    colorBgLink: '#27283C',
    colorTransparent: '#FF000000',
    colorTextBase: 'var(--color-white)',
    colorTextInverse: 'var(--color-dark)',
    colorSubtextInverse: '#6E7291',
    gradientThemed: 'var(--gradient-accent-secondary)',
    colorAccentThemed: 'var(--color-accent-secondary)',
    colorBrandAccentThemed: 'var(--color-brand-accent-secondary)',
    colorCardBg: 'var(--color-dark)',
};

const convertToStandardCssVariables = (obj) =>
    Object.keys(obj).reduce(
        (acc, k) => ({
            ...acc,
            [`--${k
                .match(/(^[a-z]|[A-Z0-9])[a-z]*/g)
                .map((s) => s.toLowerCase())
                .join('-')}`]: obj[k],
        }),
        {}
    );

exports.lightMode = convertToStandardCssVariables(lightModeOptions);
exports.darkMode = convertToStandardCssVariables(darkModeOptions);
exports.lightModeOptions = lightModeOptions;
exports.darkModeOptions = darkModeOptions;
