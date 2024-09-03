module.exports = {
    markdown: {
        entry: ['./docs/**/*.zh-CN.md'],
        entryLocale: 'zh-CN',
        entryExtension: '.zh-CN.md',
        outputLocales: ['en-US', 'ja-JP', "ru_RU"],
        outputExtensions: (locale, { getDefaultExtension }) => {
            if (locale === 'en-US') return '.md';
            return getDefaultExtension(locale);
        },
    },
};