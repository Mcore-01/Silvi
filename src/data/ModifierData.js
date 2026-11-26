export const modifiers  = [
    {   
        id: 1, 
        name: "Оптический прицел", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +5 к попаданию. свойства: - недостатки: помеха на дистанцию >5 метров", 
        hit: 5, 
        damage: 0
    },
    {   
        id: 2, 
        name: "Каллиматор-тепловизор", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +2 к попаданию. свойства: не требует для прицелевания игнорирует помеху от темноты и дыма", 
        hit: 2, 
        damage: 0
    },
    {   
        id: 3, 
        name: "Сошки", 
        src: "under_barrel.svg", 
        type: 'underBarrel',
        description: "бонус: если стоит в упоре, +1 на попадание, позвоялет упасть в упор за", 
        hit: 1, 
        damage: 0
    },
    {   
        id: 4, 
        name: "Укороченный магазин", 
        src: "zoom.svg", 
        type: 'magazine',
        description: "при комбинации с короченным стволом, понижает тяжесть оружия, перезарядка за недостатки: только половина боезопаса", 
        hit: 1, 
        damage: 0
    },
    {   
        id: 5, 
        name: "ДТК", 
        src: "barrel.svg", 
        type: 'barrel',
        description: "снижает порок получения повреждения оружия на 1", 
        hit: 1, 
        damage: 0
    },
]