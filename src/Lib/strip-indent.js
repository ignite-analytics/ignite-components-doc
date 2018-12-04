const minIndent = str => {
    const match = str.match(/^[ \t]*(?=\S)/gm);

    if (!match) {
        return 0;
    }

    return Math.min.apply(Math, match.map(x => x.length));
};

export const stripIndent = str => {
    const indent = minIndent(str);

    if (indent === 0) {
        return str;
    }

    const re = new RegExp(`^[ \\t]{${indent}}`, "gm");

    return str.replace(re, "");
};
