import { parseListPeopleByKnownIdResponse } from './getPersonDetails';

test('parseListPeopleByKnownIdResponse (non-contact)', () => {
  expect(
    parseListPeopleByKnownIdResponse([
      [['meichentest4@gmail.com', ['114259725022185895402']]],
      [
        [
          '114259725022185895402',
          [
            '114259725022185895402',
            [
              {
                '22': [
                  null,
                  ['meichentest4@gmail.com'],
                  [
                    [
                      null,
                      '114259725022185895402',
                      null,
                      null,
                      '#JeiugWUHOlY=',
                      1,
                    ],
                  ],
                ],
              },
            ],
            null,
            [
              [
                [
                  null,
                  null,
                  1,
                  null,
                  null,
                  0,
                  null,
                  null,
                  '114259725022185895402',
                  { '15': 1 },
                ],
                'https://lh3.googleusercontent.com/a-/ALV-UjVmyF5dT5e7W3wWAsFoNIdRkIqfZTedEWqV8bE_dK0R',
                1,
              ],
            ],
            {
              '10': [
                [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    '114259725022185895402',
                    { '15': 1 },
                  ],
                  'meichentest4@gmail.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1, null, null, 1],
                ],
              ],
              '26': '%EgkBAgMJCyg9Pj8aBAECBwg=',
            },
          ],
        ],
      ],
    ]),
  ).toEqual({
    imageUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVmyF5dT5e7W3wWAsFoNIdRkIqfZTedEWqV8bE_dK0R',
  });
});

test('parseListPeopleByKnownIdResponse (contact)', () => {
  expect(
    parseListPeopleByKnownIdResponse([
      [['agentme49@gmail.com', ['c7764437121276542189']]],
      [
        [
          'c7764437121276542189',
          [
            'c7764437121276542189',
            [
              null,
              null,
              null,
              null,
              null,
              ['7764437121276542189'],
              {
                '22': [
                  null,
                  ['agentme49@gmail.com'],
                  [
                    [null, '6bc0d26c8e8b7ced', null, null, '#rsate13FfoY=', 2],
                    [
                      null,
                      '110017752385141990485',
                      null,
                      null,
                      '#NtWZoVBLBLY=',
                      1,
                    ],
                  ],
                ],
              },
            ],
            [
              [
                [
                  1,
                  null,
                  1,
                  null,
                  null,
                  null,
                  null,
                  '7764437121276542189',
                  '6bc0d26c8e8b7ced',
                  { '15': 2 },
                ],
                'Chris Cowan',
                null,
                'Chris',
                'Cowan',
                { '13': 'Cowan, Chris', '16': 'Chris Cowan' },
              ],
            ],
            [
              [
                [
                  null,
                  null,
                  1,
                  null,
                  null,
                  0,
                  null,
                  null,
                  '110017752385141990485',
                  { '15': 1 },
                ],
                'https://lh3.googleusercontent.com/a-/ALV-UjXUUXsdDjcFCXPLktNLhWTtUmCU_XykA6aUI4TYiaIEVhQ-',
              ],
              [
                [
                  1,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  '7764437121276542189',
                  '6bc0d26c8e8b7ced',
                  { '15': 2 },
                ],
                'https://lh3.googleusercontent.com/cm/AJSPFBz5eLuiRBoXLueFh9y2x_DWgDP_DuWN4U7dwJQ1bsMeiuK_P7HkdB6WcDxmkEfg',
                1,
                null,
                null,
                null,
                1,
                '00897B',
              ],
            ],
            {
              '10': [
                [
                  [
                    1,
                    null,
                    1,
                    null,
                    null,
                    null,
                    null,
                    '7764437121276542189',
                    '6bc0d26c8e8b7ced',
                    {
                      '12': 1,
                      '13': [['110017752385141990485', 1, 1]],
                      '15': 2,
                    },
                  ],
                  'agentme49@gmail.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1],
                ],
                [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    '110017752385141990485',
                    { '15': 1 },
                  ],
                  'agentme49@gmail.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1, null, null, 1],
                ],
              ],
              '26': '%EgkBAgMJCyg9Pj8aBAECBwgiDHJzYXRlMTNGZm9ZPQ==',
            },
          ],
        ],
      ],
    ]),
  ).toEqual({
    fullName: 'Chris Cowan',
    fullNameSortOrder: 'Cowan, Chris',
    firstName: 'Chris',
    lastName: 'Cowan',
    imageUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjXUUXsdDjcFCXPLktNLhWTtUmCU_XykA6aUI4TYiaIEVhQ-',
  });
});

test('parseListPeopleByKnownIdResponse (self)', () => {
  expect(
    parseListPeopleByKnownIdResponse([
      [['cowan@streak.com', ['c787990805957006175']]],
      [
        [
          'c787990805957006175',
          [
            'c787990805957006175',
            [
              null,
              null,
              null,
              null,
              null,
              ['787990805957006175'],
              {
                '22': [
                  null,
                  ['cowan@streak.com'],
                  [
                    [null, 'aef81768b57535f', null, null, '#hyUFNjVCLGE=', 2],
                    [
                      null,
                      '117803499648741237428',
                      null,
                      null,
                      '#sYsY0k4OR7Q=',
                      1,
                    ],
                    [
                      null,
                      '117803499648741237428',
                      null,
                      null,
                      '#sYsY0k4OR7Q=',
                      7,
                    ],
                  ],
                ],
              },
            ],
            [
              [
                [
                  1,
                  null,
                  1,
                  null,
                  null,
                  0,
                  null,
                  null,
                  '117803499648741237428',
                  { '12': 1, '15': 1 },
                ],
                'Chris Cowan',
                null,
                'Chris',
                'Cowan',
                { '13': 'Cowan, Chris', '16': 'Chris Cowan' },
              ],
              [
                [
                  1,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  '787990805957006175',
                  'aef81768b57535f',
                  { '15': 2 },
                ],
                'Chris Cowan',
                null,
                'Chris',
                'Cowan',
                { '13': 'Cowan, Chris', '16': 'Chris Cowan' },
              ],
              [
                [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  '117803499648741237428',
                  { '15': 7 },
                ],
                'Christopher Cowan',
                null,
                'Christopher',
                'Cowan',
                { '13': 'Christopher Cowan', '16': 'Christopher Cowan' },
              ],
            ],
            [
              [
                [
                  1,
                  null,
                  1,
                  null,
                  null,
                  0,
                  null,
                  null,
                  '117803499648741237428',
                  { '15': 1 },
                ],
                'https://lh3.googleusercontent.com/a/ACg8ocIl35hDejgmC-t2qlFW0Il6NM7GRMEopAO4WTCIU8xUWyw',
              ],
              [
                [
                  1,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  '787990805957006175',
                  'aef81768b57535f',
                  { '15': 2 },
                ],
                'https://lh3.googleusercontent.com/cm/AJSPFByKpGXMEb-4czEeIKsAcL9fYqT8jtkoX3GL_6hFRWCHgBp_Okt0LHoQtcIiYmop',
                1,
                null,
                null,
                null,
                1,
                '01579B',
              ],
            ],
            {
              '10': [
                [
                  [
                    1,
                    null,
                    1,
                    null,
                    null,
                    null,
                    null,
                    '787990805957006175',
                    'aef81768b57535f',
                    {
                      '12': 1,
                      '13': [['117803499648741237428', 1, 1]],
                      '15': 2,
                    },
                  ],
                  'cowan@streak.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1],
                ],
                [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1,
                    null,
                    '117803499648741237428',
                    { '12': 1, '15': 7 },
                  ],
                  'cowan@streak.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1],
                  1,
                  { '10': [1] },
                ],
                [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1,
                    null,
                    '117803499648741237428',
                    { '15': 7 },
                  ],
                  'cowan@inboxsdk.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1],
                  1,
                ],
                [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    '117803499648741237428',
                    { '15': 1 },
                  ],
                  'cowan@streak.com',
                  null,
                  null,
                  null,
                  null,
                  null,
                  [1, null, null, 1],
                ],
              ],
              '26': '%EgkBAgMJCyg9Pj8aBAECBwgiDGh5VUZOalZDTEdFPQ==',
            },
          ],
        ],
      ],
    ]),
  ).toEqual({
    fullName: 'Chris Cowan',
    fullNameSortOrder: 'Cowan, Chris',
    firstName: 'Chris',
    lastName: 'Cowan',
    imageUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIl35hDejgmC-t2qlFW0Il6NM7GRMEopAO4WTCIU8xUWyw',
  });
});