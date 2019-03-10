const TableData = {
  conditions: {},
  activeSeatIndex: 0,
  stage: 'payout',
  shoe: {},
  dealerHand: {
    isBlackJack: () => false,
    isBusted: () => false,
    mustHit: () => true,
    is21: () => false,
    getAceCount: () => 0,
    getHandValue: () => 17,
    hasAceUp: () => false,
    isComplete: () => false,
    cards: [
     {
       code: 'H4',
       value: 4,
       isHoleCard: false,
     },
     {
       code: 'DA',
       value: 11,
       isHoleCard: true,
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
              {
                code: 'D3',
                value: 3
              },
              {
                code: 'D4',
                value: 4
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            index: 0,
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
            index: 1,
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
                code: 'DA',
                value: 11
              },
              {
                code: 'S6',
                value: 6
              },
              {
                code: 'D3',
                value: 3
              },
              {
                code: 'D4',
                value: 4
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            index: 2,
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
            index: 3,
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
            isHittable: () => false,
            isSplittable: () => true,
            isDoubleable: () => false,
            isBlackJack: () => false,
            is21: () => false,
            getAceCount: () => 0,
            getHandValue: () => 17,
          },
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
              {
                code: 'D3',
                value: 3
              },
              {
                code: 'D4',
                value: 4
              },
            ],
            shoe: {},
            hasBeenPaid: false,
            handBetSize: 2,
            index: 4,
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
        activeHandIndex: 3,
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
            index: 0,
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
            index: 0,
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
            index: 0,
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
            index: 0,
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
            index: 0,
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
            index: 0,
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

export default TableData;
