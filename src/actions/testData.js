export let rules = [
  {
    id: 'rule_1',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_2',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_3',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_4',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_5',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_6',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_7',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_8',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
  {
    id: 'rule_9',
    action: 'alert',
    proto: 'tcp',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '(msg: whaat)',
    description: 'lal',
  },
];

export let logs = `
(Event)
    sensor id: 0    event id: 4 event second: 1299698138    event microsecond: 146591
    sig id: 1   gen id: 1   revision: 0  classification: 0
    priority: 0 ip source: 10.1.2.3 ip destination: 10.9.8.7
    src port: 60710 dest port: 80   protocol: 6 impact_flag: 0  blocked: 0

Packet
    sensor id: 0    event id: 4 event second: 1299698138
    packet second: 1299698138   packet microsecond: 146591
    linktype: 1 packet_length: 54
[    0] 02 09 08 07 06 05 02 01 02 03 04 05 08 00 45 00  ..............E.
[   16] 00 28 00 06 00 00 40 06 5C B7 0A 01 02 03 0A 09  .(....@.\.......
[   32] 08 07 ED 26 00 50 00 00 00 62 00 00 00 2D 50 10  ...&.P...b...-P.
[   48] 01 00 A2 BB 00 00                                ......
sensor id               4 bytes
event id                4 bytes
event second            4 bytes
event microsecond       4 bytes
signature id            4 bytes
generator id            4 bytes
signature revision      4 bytes
classification id       4 bytes
priority id             4 bytes
ip source               16 bytes
ip destination          16 bytes
source port/icmp type   2 bytes
dest. port/icmp code    2 bytes
protocol                1 byte
impact flag             1 byte
impact                  1 byte
blocked                 1 byte
`;

export let settings = {
  checkUpdate: '1', // days
  admins: [
    {
      name: 'admin',
      password: 'admin',
      access: 'full',
    },
    {
      name: 'Andrew',
      password: 'andrew',
      access: 'medium',
    },
    {
      name: 'Chack',
      password: 'chackChack',
      access: 'small',
    },
  ],
  keepLogs: '5',  // week
};

export let feedbacks = [
  {
    status: 'прочитано',
    text: 'Благодарю за приложение! Хотелось бы добавить более понятный вывод логов.',
    answer: 'Спасибо, мы работаем над этим! Постараемся выпустить в следующем релизе.',
  },
  {
    status: 'отправлено',
    text: 'Будет ли возможность менять тему интерфейса?',
  },
];