import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoOversMatchService {

  constructor() { }
  getPlayerList(ID: number) {
    return TeamPlayers[ID];
  }
}

const TeamPlayers = [
  {
    ID: 0,
    name: "Bangladesh",

    1: 'Tamim Iqbal',
    2: 'Liton Das(wk)',
    3: 'Shakib Al Hasan(c)',
    4: 'Mushfiqur Rahim',
    5: 'Mustafizur Rahman'
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Hazratullah Zazai',
    2: 'Najibullah Zadran(wk)',
    3: 'Mohammad Nabi',
    4: 'Rashid Khan(c)',
    5: 'Mujeeb Ur Rahman'
  },
  {
    ID: 2,
    name: "India",
    
    1: 'KL Rahul(wk)', 
    2: 'Rohit Sharma(c)',
    3: 'Virat Kohli',
    4: 'Yuzvendra Chahal',
    5: 'Jasprit Bumrah'
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Mohammad Rizwan(wk)',
    2: 'Babar Azam(c)',
    3: 'Asif Ali',
    4: 'Shadab khan',
    5: 'Shaheen Afridi',
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Kusal Perera(wk)',
    2: 'Charith Asalanka',
    3: 'Dasun Shanaka(c)',
    4: 'Wanindu Hasaranga',
    5: 'Dusmantha Chameera'
  },
  {
    ID: 5,
    name: "Australia",

    1: 'David Warner(c)',
    3: 'Glenn Maxwell',
    4: 'Matthew Wade(wk)',
    5: 'Pat Cummins',
    6: 'Mitchell Starc',
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Quinton de Kock(wk)',
    2: 'Rassie van der Dussen',
    3: 'David Miller(c)',
    4: 'Kagiso Rabada',
    5: 'Anrich Nortje'
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Martin Guptill(wk)',
    2: 'Kane Williamson(c)',
    3: 'James Neesham',
    4: 'Tim Southee',
    5: 'Trent Boult'
  },
  {
    ID: 8,
    name: "England",

    1: 'Jos Buttler(wk)',
    2: 'Jonny Bairstow',
    3: 'Moeen Ali(c)',
    4: 'Chris Woakes',
    5: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    1: 'Chris Gayle',
    2: 'Nicholas Pooran(wk)',
    3: 'Shimran Hetmyer',
    4: 'Kieron Pollard(c)',
    5: 'Andre Russell',
  }
]

const Bowlers = [
  {
    ID: 0,
    name: "Bangladesh",

    1: 'Mustafizur Rahman',
    2: 'Shaki Al Hasan',
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Mujeeb Ur Rahman',
    2: 'Rashid Khan',
  },
  {
    ID: 2,
    name: "India",

    1: 'Jasprit Bumrah',
    2: 'Yuzvendra Chahal',
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Shaheen Afridi',
    2: 'Shadab khan',
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Dusmantha Chameera',
    2: 'Wanindu Hasaranga',
  },
  {
    ID: 5,
    name: "Australia",
    
    1: 'Pat Cummins',
    2: 'Mitchell Starc',
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Kagiso Rabada',
    2: 'Anrich Nortje',
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Trent Boult',
    2: 'Tim Southee',
  },
  {
    ID: 8,
    name: "England",

    1: 'Chris Woakes',
    2: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    
    1: 'Andre Russell',
    2: 'Kieron Pollard',
  }
]
