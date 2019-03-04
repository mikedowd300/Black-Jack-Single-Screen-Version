const EmptyTableScenario = {
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S6',
                value: 6
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
          {
            cards: [
             {
               code: 'D8',
               value: 8
             },
             {
               code: 'ST',
               value: 10
             },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
            cards: [
              {
                code: 'DA',
                value: 11
              },
              {
                code: 'S5',
                value: 5
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            handPlayActions: [
              {
                type: 'STAY',
                action: () => console.log("STAY"),
              },
            ],
            isBlackJack: () => false,
            updateHandBet: () => {},
            getDoubleBetAmount: () => 2,
            getSplitBetAmount: () => 2,
            isBusted: () => false,
            isHittable: () => true,
            isSplittable: () => true,
            isDoubleable: () => true,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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

export default EmptyTableScenario;
