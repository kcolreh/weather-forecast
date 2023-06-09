/* eslint-disable indent */

export function createDiv(id, dClass) {
    const newDiv = document.createElement('div');

    newDiv.id = id;
    newDiv.classList.add(dClass);

    return newDiv;
}

export function createTitle(id, tClass, h) {
    const newTitle = document.createElement(`h${h}`);

    newTitle.id = id;
    newTitle.classList.add(tClass);

    return newTitle;
}

export function createParagraph(id, pClass) {
    const newParagraph = document.createElement('p');

    newParagraph.id = id;
    newParagraph.classList.add(pClass);

    return newParagraph;
}
