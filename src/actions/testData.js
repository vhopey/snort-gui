export const rules = [
  {
    id: 'rule_1',
    action: 'alert',
    proto: 'TCP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: 'msg: test rules',
    description: 'My first rule',
  },
  {
    id: 'rule_2',
    action: 'log',
    proto: 'TCP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '<-',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: 'msg: attack!',
    description: '',
  },
  {
    id: 'rule_3',
    action: 'alert',
    proto: 'UDP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: 'msg: whaat ',
    description: '-',
  },
  {
    id: 'rule_4',
    action: 'pass',
    proto: 'ICMP',
    source: ['any any'],
    dir: '->',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: 'msg: test pass rules',
    description: '-',
  },
  {
    id: 'rule_5',
    action: 'alert',
    proto: 'UDP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '<>',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '',
    description: '-',
  },
  {
    id: 'rule_6',
    action: 'drop',
    proto: 'ICMP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '<>',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: 'msg: test drop rules',
    description: '-',
  },
  {
    id: 'rule_7',
    action: 'reject',
    proto: 'IP',
    source: ['192.168.0.1 80', '192.168.0.1 80'],
    dir: '<>',
    dest: ['10.10.5.55 80', '10.10.5.5 80'],
    body: '',
    description: '',
  },
];

export const logs = [
  {
    name: 'За час',
    data: `  
    (Event)\n
        sensor id: 0    event id: 4 event second: 1299698138    event microsecond: 146591\n
        sig id: 1   gen id: 1   revision: 0  classification: 0\n
        priority: 0 ip source: 10.1.2.3 ip destination: 10.9.8.7\n
        src port: 60710 dest port: 80   protocol: 6 impact_flag: 0  blocked: 0\n
    
    Packet\n
        sensor id: 0    event id: 4 event second: 1299698138\n
        packet second: 1299698138   packet microsecond: 146591\n
        linktype: 1 packet_length: 54\n
    [    0] 02 09 08 07 06 05 02 01 02 03 04 05 08 00 45 00  ..............E.\n
    [   16] 00 28 00 06 00 00 40 06 5C B7 0A 01 02 03 0A 09  .(....@.\.......\n
    [   32] 08 07 ED 26 00 50 00 00 00 62 00 00 00 2D 50 10  ...&.P...b...-P.\n
    [   48] 01 00 A2 BB 00 00                                ......\n
    `,
  },
  {
    name: 'За день',
    data: `
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
[   48] 01 00 A2 BB 00 00      
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
    `
  },
  {
    name: 'За неделю',
    data: `
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
[   48] 01 00 A2 BB 00 00      
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
    `,
  },
  {
    name: 'Все',
    data: `
    (Event)\n
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
[   48] 01 00 A2 BB 00 00      
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
    `,
  }
]
;

export const admins = [
  {
    name: 'admin',
    password: 'admin',
  },
  {
    name: 'Andrew',
    password: 'andrew_admin348',
  },
  {
    name: 'Chack',
    password: 'ChackOCro9012',
  },
];

export const settings = {
  checkUpdate: 'day',
  keepLogs: 'week',
  rules: 'admin',
  logs: 'admin',
  config: 'admin',
  guiSettings: 'Chack',
}