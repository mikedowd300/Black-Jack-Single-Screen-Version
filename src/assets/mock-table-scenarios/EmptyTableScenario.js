module.exports = {
  conditions: {},
  activeSeatIndex: null,
  stage: 'offerInsurance',
  shoe: {},
  dealer: {
    hand: [
     {
       code: 'H4',
       value: 4
     },
     {
       code: 'DA',
       value: 11
     }
   ]
  },
  seats: [
    {
      isActive: false,
      isInHand: false,
      seatNumber: 0,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 1,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 2,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 3,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 4,
      activeSeatIndex: null,
      player: {
        bankRoll : 50,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => true,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 5,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
    {
      isActive: false,
      isInHand: false,
      seatNumber: 6,
      activeSeatIndex: null,
      player: {
        bankRoll : 100,
        wagerSize: 2,
        handle: null,
        avatarUrl: '',
        isInsured: false,
        hands: [
          {
            cards: [],
            shoe: {},
            hasBlackJack: () => false,
          }
        ],
        activeHandIndex: 0,
        insuranceOptions: [
          {
            type: 'ACCEPT',
            action: () => console.log('ACCEPT'),
          },
          {
            type: 'DECLINE',
            action: () => console.log('DECLINE'),
          }
        ],
      }
    },
  ]
};
