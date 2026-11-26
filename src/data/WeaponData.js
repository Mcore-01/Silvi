export const weapons = [
    {
        id: 1,
        name: 'Пистолет',
        description: 'полуавтомат, свойства: лёгкое',
        type: 'pistol',
        src: 'pistol.svg',
        bonusHit: 0,
        bonusDamage: 0,
        diceDamage: '1k6',
        armorPenetration: 0,
        normalDistance: 18,
        maxDistance: 60,
        magazineCapacity: 10,
        slots: [],
        conflictSlots: [4, 5]
    },
    {
        id: 2,
        name: 'Штурмовая винтовка',
        description: 'автоматика: 2 отдача: -3 свойства: двуручное',
        type: 'rifle',
        src: 'rifle.svg',
        bonusHit: 0,
        bonusDamage: 0,
        diceDamage: '2k8',
        armorPenetration: 2,
        normalDistance: 30,
        maxDistance: 120,
        magazineCapacity: 30,
        slots: []
    },
    {
        id: 3,
        name: 'Снайперская винтовка',
        description: 'полуавтоматическое свойства: двуручное, тяжелое, станковое',
        type: 'sniper_rifle',
        src: 'sniper_rifle.svg',
        bonusHit: 0,
        bonusDamage: 0,
        diceDamage: '2k10',
        armorPenetration: 5,
        normalDistance: 60,
        maxDistance: 360,
        magazineCapacity: 10,
        slots: []
    }
]