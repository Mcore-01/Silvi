export const modifiers = [
    {   
        id: 1, 
        name: "Оптический прицел", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +5 к попаданию. свойства: - недостатки: помеха на дистанцию >5 метров", 
        hit: 5, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 2, 
        name: "Коллиматор-тепловизор", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +2 к попаданию. свойства: не требует [глаз] для прицеливания, игнорирует помеху от темноты и дыма", 
        hit: 2, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 3, 
        name: "Коллиматор", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +2 к попаданию. свойства: не требует [глаз] для прицеливания", 
        hit: 2, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 4, 
        name: "Загонный прицел", 
        src: "zoom.svg", 
        type: 'zoom',
        description: "бонус: +3 к попаданию. свойства: - недостатки: нельзя поставить на лёгкое оружие", 
        hit: 3, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 5, 
        name: "Лазерный прицел", 
        src: "mount.svg", 
        type: 'mount',
        description: "бонус: +1 к попаданию. свойства: игнорирует помеху в 5 метре, не нужно прицеливаться [глаз]. недостатки: видно", 
        hit: 1, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 6, 
        name: "Инфракрасный лазерный прицел", 
        src: "mount.svg", 
        type: 'mount',
        description: "бонус: +1 к попаданию. свойства: игнорирует помеху в 5 метре, не нужно прицеливаться [глаз]. недостатки: видно только по ПНВ", 
        hit: 1, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 7, 
        name: "Умная камера с ИД", 
        src: "mount.svg", 
        type: 'mount',
        description: "бонус: +1 к попаданию. складывается с другими прицелами. свойства: позволяет использовать 'свой-чужой'. недостатки: не работает без 'тактической ИД'", 
        hit: 1, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 8, 
        name: "Сошки", 
        src: "under_barrel.svg", 
        type: 'underBarrel',
        description: "бонус: если стоит в упоре, +1 на попадание, позволяет упасть в упор", 
        hit: 1, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 9, 
        name: "Подствольный гранатомёт", 
        src: "under_barrel.svg", 
        type: 'underBarrel',
        description: "позволяет стрелять гранатами на 8 метров. недостатки: нельзя ставить на простое оружие", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 10, 
        name: "Подствольный огнемёт", 
        src: "under_barrel.svg", 
        type: 'underBarrel',
        description: "позволяет стрелять как из огнемета на дистанции 3 метров, уроном 1к6 и свойством огнемёт. Требует батареи мк-1 и тратит её за 3 заряда", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 11, 
        name: "Штык нож", 
        src: "mount.svg", 
        type: 'mount',
        description: "на оружие теперь есть боевой нож на 1к6 кол. урона", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 12, 
        name: "Плазменный штык нож", 
        src: "mount.svg", 
        type: 'mount',
        description: "на оружие теперь есть боевой нож на 1к6 кол. + 1к6 огн.", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 13, 
        name: "Фонарик", 
        src: "mount.svg", 
        type: 'mount',
        description: "освещает до 12 метров по конусу впереди. недостатки: тебя видно", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 14, 
        name: "Укороченный магазин", 
        src: "magazine.svg", 
        type: 'magazine',
        description: "при комбинации с укороченным стволом, понижает тяжесть оружия, перезарядка за ◇. недостатки: только половина боезапаса", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 15, 
        name: "Барабанный магазин", 
        src: "magazine.svg", 
        type: 'magazine',
        description: "умножает свойство 'Магазин' на оружии в два раза. недостатки: один магазин считается за два", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol', 'shotgun']
    },
    {   
        id: 16, 
        name: "Спаренный магазин", 
        src: "magazine.svg", 
        type: 'magazine',
        description: "при перезарядке вы можете один раз сделать это за ◇. недостатки: нет на пистолете", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol', 'shotgun']
    },
    {   
        id: 17, 
        name: "Увеличенный магазин", 
        src: "magazine.svg", 
        type: 'magazine',
        description: "+2 патрона в магазин. недостатки: -", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 18, 
        name: "ДТК", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "снижает порог получения повреждения оружия на 1", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    },
    {   
        id: 19, 
        name: "Глушитель", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "делает оружие тише, полностью глушит оружие на дистанции 16 метров. недостатки: -1 урон, -2 метра дистанции", 
        hit: 0, 
        damage: -1,
        excludeTypes: []
    },
    {   
        id: 20, 
        name: "Интегрированный глушитель", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "делает оружие тише, полностью глушит оружие на дистанции 16 метров. недостатки: -2 метра дистанции, нельзя снять", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 21, 
        name: "Чокер на дробовик", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "увеличивает свойство 'Разброс' на 1 метр. недостатки: увеличивает преимущество на 1 метр", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol', 'rifle', 'sniper_rifle']
    },
    {   
        id: 22, 
        name: "Укороченный ствол", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "-1 урон. если стоит на дробовике, получает +1 на попадание и +1 свойство '+1к'. недостатки: урон преимущество на 1 метр, не ставится с длинным стволом", 
        hit: 0, 
        damage: -1,
        excludeTypes: ['pistol']
    },
    {   
        id: 23, 
        name: "Удлинённый ствол", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "дает +1 на попадание, при установке на дробовик свойство 'Разброс' на 1 метр увеличивается, точность на 1 метр -3 метров. При установке на дробовик, он теряет преимущество на 1 метр", 
        hit: 1, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 24, 
        name: "Гаситель отдачи", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "уменьшает преимущество силу два свойства 'Спуск' на 2, уменьшает свойство отдачи на 1. недостатки: повышает тяжесть оружия", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 25, 
        name: "Ускоренная подача патрон", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "повышает автоматику на 1. недостатки: повышает штраф от отдачи на 1", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 26, 
        name: "Конвертация 'Булпап'", 
        src: "gun_barrel.svg", 
        type: 'barrel',
        description: "вы можете использовать оружие лежа без штрафа. недостатки: империя мажоров не любит, вы чувствуете себя отвратительно", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol', 'shotgun']
    },
    {   
        id: 27, 
        name: "Экспансивные", 
        src: "bullet.svg", 
        type: 'bullet',
        description: "при стрельбе по противнику с КЗ ниже 3 он получает дополнительно 2к6 урона от винтовки, и 2к4 от пистолета. если КЗ выше 3-х, урон уменьшается наполовину", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 28, 
        name: "Разрывной / Флешет", 
        src: "bullet.svg", 
        type: 'bullet',
        description: "пистолеты: +1к4 урона. винтовки: +1к6 урона. дробовики: спас. Тело. сл. 15, против кровотеч. игнорирует 1 КД, если КЗ ниже пробития", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 29, 
        name: "Зажигательные", 
        src: "bullet.svg", 
        type: 'bullet',
        description: "пистолеты: Поджёг 1к4. винтовки: Поджёг 1к6. дробовики: Поджёг 1к6", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 30, 
        name: "Бронебойные / Хакан", 
        src: "bullet.svg", 
        type: 'bullet',
        description: "пистолеты\\винтовки: +1 прод. брони. дробовики: игнорируют свойство 'Разброс', +5 дистанции, класс прод. брони этого патрона = 3", 
        hit: 0, 
        damage: 0,
        excludeTypes: []
    },
    {   
        id: 31, 
        name: "Подкалиберные", 
        src: "bullet.svg", 
        type: 'bullet',
        description: "повышает класс пробития на 2, но понижают кость урона. у дробовика на 1к4 урона меньше. не ставится на пистолет", 
        hit: 0, 
        damage: 0,
        excludeTypes: ['pistol']
    }
]