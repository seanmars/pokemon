const text = {
    1: '',
    2: '◎',
    0.5: '△',
    0: 'Ⅹ',
};

class Pokemon {
    constructor() {
        this.elements = [
            '一般',
            '格鬥',
            '飛行',
            '毒',
            '地面',
            '岩石',
            '蟲',
            '幽靈',
            '鋼',
            '火',
            '水',
            '草',
            '電',
            '超能力',
            '冰',
            '龍',
            '惡',
            '妖精',
        ];
        /** @type {Object.<number, Array<number>} */
        this.elementDataset = {
            0: [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
            1: [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5,],
            2: [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1,],
            3: [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2,],
            4: [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1,],
            5: [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1,],
            6: [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5,],
            7: [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1,],
            8: [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2,],
            9: [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1,],
            10: [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1,],
            11: [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1,],
            12: [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1,],
            13: [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1,],
            14: [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1,],
            15: [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0,],
            16: [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5,],
            17: [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1,],
        };
        /** @type {Object.<number, Array<string>} */
        this.elementStyle = {
            /** 一般 */
            0: [],
            /** 格鬥 */
            1: ['bg-red-800', 'text-white'],
            /** 飛行 */
            2: ['bg-blue-300'],
            /** 毒 */
            3: ['bg-purple-600', 'text-white'],
            /** 地面 */
            4: ['bg-yellow-500'],
            /** 岩石 */
            5: ['bg-yellow-700', 'text-white'],
            /** 蟲 */
            6: ['bg-green-400'],
            /** 幽靈 */
            7: ['bg-indigo-300'],
            /** 鋼 */
            8: ['bg-gray-500'],
            /** 火 */
            9: ['bg-red-600', 'text-white'],
            /** 水 */
            10: ['bg-blue-600', 'text-white'],
            /** 草 */
            11: ['bg-green-600', 'text-white'],
            /** 電 */
            12: ['bg-yellow-300'],
            /** 超能力 */
            13: ['bg-pink-500', 'text-white'],
            /** 冰 */
            14: ['bg-blue-200'],
            /** 龍 */
            15: ['bg-purple-300'],
            /** 惡 */
            16: ['bg-orange-700', 'text-white'],
            /** 妖精 */
            17: ['bg-pink-200'],
        };
    }
}

const cellStyle = ['border', 'border-gray-400'];
const sizeStyle = ['px-1', 'py-1'];

/**
 * @param {HTMLTableSectionElement} thead
 * @param {Pokemon} poke
 *
 * @returns {HTMLElement}
 */
function genTableHeader(thead, poke) {
    const emptyTh = document.createElement('th');
    emptyTh.classList.add(...sizeStyle);
    emptyTh.colSpan = 1;

    // row title
    let titleTr = document.createElement('tr');
    titleTr.appendChild(emptyTh.cloneNode(true));
    titleTr.appendChild(emptyTh.cloneNode(true));

    let defenseTh = document.createElement('th');
    defenseTh.classList.add(...cellStyle);
    defenseTh.classList.add(...sizeStyle);
    defenseTh.classList.add('text-gray-800');
    defenseTh.colSpan = 18;
    defenseTh.textContent = '防禦方';
    titleTr.appendChild(defenseTh);

    // row elements
    let elementsTr = document.createElement('tr');
    elementsTr.appendChild(emptyTh.cloneNode(true));
    elementsTr.appendChild(emptyTh.cloneNode(true));
    poke.elements.forEach((value, index) => {
        let eleTh = document.createElement('th');
        eleTh.classList.add(...cellStyle);
        eleTh.classList.add(...sizeStyle);
        eleTh.classList.add(...poke.elementStyle[index]);
        eleTh.classList.add('text-lg', 'text-title');
        eleTh.colSpan = 1;
        eleTh.textContent = value;
        eleTh.dataset.element = index;
        elementsTr.appendChild(eleTh);
    });

    thead.appendChild(titleTr);
    thead.appendChild(elementsTr);
    return thead;
}

/**
 * @param {HTMLTableSectionElement} tbody
 * @param {Pokemon} poke
 *
 * @returns {HTMLElement}
 */
function genTableBody(tbody, poke) {
    // column title
    let titleTr = tbody.insertRow();
    let titleTd = titleTr.insertCell();
    titleTd.classList.add(...cellStyle);
    titleTd.classList.add(...sizeStyle);
    titleTd.classList.add('text-title', 'text-gray-800', 'v-lr');
    titleTd.colSpan = 1;
    titleTd.rowSpan = 19;
    let titleSpan = document.createElement('span')
    titleSpan.textContent = '攻擊方';
    titleTd.appendChild(titleSpan);

    // column elements
    poke.elements.forEach((attackValue, attackElementId) => {
        let eleTr = tbody.insertRow();

        let titleTd = eleTr.insertCell();
        titleTd.classList.add(...cellStyle);
        titleTd.classList.add(...sizeStyle);
        titleTd.classList.add(...poke.elementStyle[attackElementId]);
        titleTd.classList.add('text-lg', 'text-title');
        titleTd.dataset.attack = attackElementId;
        titleTd.dataset.defense = -1;
        titleTd.textContent = attackValue;
        titleTd.colSpan = 1;
        titleTd.rowSpan = 1;

        // element resistance
        let resistanceDataset = poke.elementDataset[attackElementId];
        resistanceDataset.forEach((resistance, defenseElementId) => {
            let defenseTd = eleTr.insertCell();
            defenseTd.classList.add(...cellStyle);
            defenseTd.classList.add(...sizeStyle);
            defenseTd.classList.add('hover:bg-yellow-200', 'focus:bg-gray-100');
            defenseTd.dataset.attack = attackElementId;
            defenseTd.dataset.defense = defenseElementId;
            defenseTd.textContent = text[resistance];
        });
    });

    return tbody;
}

docReady(() => {
    let poke = new Pokemon();
    let table = document.getElementById('table');

    // header
    genTableHeader(table.getElementsByTagName('thead')[0], poke);
    genTableBody(table.getElementsByTagName('tbody')[0], poke);

    let ths = table.getElementsByTagName('th');
    let tds = table.getElementsByTagName('td');
    for (let td of tds) {
        td.addEventListener('mouseover', function (e) {
            let target = e.target;
            for (let linkedTd of tds) {
                if (linkedTd.dataset.attack === undefined ||
                    linkedTd.dataset.defense === undefined) {
                    continue;
                }

                if (linkedTd.dataset.attack == target.dataset.attack ||
                    linkedTd.dataset.defense == target.dataset.defense) {
                    if (linkedTd.dataset.defense == -1) {
                        linkedTd.classList.add('linked-title');
                    } else {
                        linkedTd.classList.add('linked');
                    }
                } else {
                    if (linkedTd.dataset.defense == -1) {
                        linkedTd.classList.remove('linked-title');
                    } else {
                        linkedTd.classList.remove('linked');
                    }
                }
            }

            for (let linkedTh of ths) {
                if (linkedTh.dataset.element === undefined) {
                    continue;
                }

                if (linkedTh.dataset.element == target.dataset.defense) {
                    linkedTh.classList.add('linked-title');
                } else {
                    linkedTh.classList.remove('linked-title');
                }
            }
        });
    }

    for (let th of ths) {
        th.addEventListener('mouseover', function (e) {
            let target = e.target;
            if (target.dataset.element === undefined) {
                return;
            }

            for (let linkedTh of ths) {
                linkedTh.classList.remove('linked-title');
            }
            target.classList.add('linked-title');

            for (let linkedTd of tds) {
                if (linkedTd.dataset.attack === undefined ||
                    linkedTd.dataset.defense === undefined) {
                    continue;
                }

                if (linkedTd.dataset.defense == target.dataset.element) {
                    linkedTd.classList.add('linked-title');
                } else {
                    linkedTd.classList.remove('linked-title');
                }
            }
        });
    }
});