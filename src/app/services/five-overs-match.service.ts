import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiveOversMatchService {

  constructor() { }
  getPlayerList(Id: number) {
    return TeamPlayers[Id];
  }
}

const TeamPlayers = [
  {
    ID: 0,
    name: "Bangladesh",

    1: 'Tamim Iqbal',
    2: 'Liton Das',
    3: 'Shakib Al Hasan(c)',
    4: 'Mushfiqur Rahim(wk)',
    5: 'Mahmudullah Riyad',
    6: 'Taskin Ahmed',
    7: 'Mustafizur Rahman'
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Hazratullah Zazai',
    2: 'Ibrahim Zadran',
    3: 'Najibullah Zadran(wk)',
    4: 'Mohammad Nabi',
    5: 'Gulbadin Naib',
    6: 'Rashid Khan(c)',
    7: 'Mujeeb Ur Rahman'
  },
  {
    ID: 2,
    name: "India",
    
    1: 'KL Rahul(wk)', 
    2: 'Rohit Sharma(c)',
    3: 'Virat Kohli',
    4: 'Suryakumar Yadav',
    5: 'Yuzvendra Chahal',
    6: 'Mohammed Shami',
    7: 'Jasprit Bumrah'
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Mohammad Rizwan(wk)',
    2: 'Babar Azam(c)',
    3: 'Fakhar Zaman',
    4: 'Asif Ali',
    5: 'Shadab khan',
    6: 'Hasan Ali',
    7: 'Shaheen Afridi',
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Pathum Nissanka',
    2: 'Kusal Perera(wk)',
    3: 'Charith Asalanka',
    4: 'Dasun Shanaka(c)',
    5: 'Bhanuka Rajapaksa',
    6: 'Wanindu Hasaranga',
    7: 'Dusmantha Chameera'
  },
  {
    ID: 5,
    name: "Australia",

    1: 'David Warner(c)',
    2: 'Mitchell Marsh',
    3: 'Glenn Maxwell',
    4: 'Matthew Wade(wk)',
    5: 'Pat Cummins',
    6: 'Mitchell Starc',
    7: 'Josh Hazlewood'
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Quinton de Kock(wk)',
    2: 'Rassie van der Dussen',
    3: 'Aiden Markram',
    4: 'David Miller(c)',
    5: 'Dwaine Pretorius',
    6: 'Kagiso Rabada',
    7: 'Anrich Nortje'
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Martin Guptill(wk)',
    2: 'Daryl Mitchell',
    3: 'Kane Williamson(c)',
    4: 'Devon Conway',
    5: 'James Neesham',
    6: 'Tim Southee',
    7: 'Trent Boult'
  },
  {
    ID: 8,
    name: "England",

    1: 'Jos Buttler(wk)',
    2: 'Jonny Bairstow',
    3: 'Moeen Ali(c)',
    4: 'Liam Livingstone',
    5: 'Chris Woakes',
    6: 'Adil Rashid',
    7: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    1: 'Chris Gayle',
    2: 'Evin Lewis',
    3: 'Nicholas Pooran(wk)',
    4: 'Shimran Hetmyer',
    5: 'Kieron Pollard(c)',
    6: 'Dwayne Bravo',
    7: 'Andre Russell',
  }
]

const Bowlers = [
  {
    ID: 0,
    name: "Bangladesh",

    1: 'Mustafizur Rahman',
    2: 'Shaki Al Hasan',
    3: 'Taskin Ahmed',
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Mujeeb Ur Rahman',
    2: 'Rashid Khan',
    3: 'Mohammad Nabi'
  },
  {
    ID: 2,
    name: "India",

    1: 'Jasprit Bumrah',
    2: 'Yuzvendra Chahal',
    3: 'Mohammed Shami',
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Shaheen Afridi',
    2: 'Shadab khan',
    3: 'Hasan Ali'
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Dusmantha Chameera',
    2: 'Wanindu Hasaranga',
    3: 'Bhanuka Rajapaksa'
  },
  {
    ID: 5,
    name: "Australia",
    
    1: 'Pat Cummins',
    2: 'Mitchell Starc',
    3: 'Josh Hazlewood'
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Kagiso Rabada',
    2: 'Anrich Nortje',
    3: 'Dwaine Pretorius'
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Trent Boult',
    2: 'Tim Southee',
    3: 'James Neesham'
  },
  {
    ID: 8,
    name: "England",

    1: 'Chris Woakes',
    2: 'Adil Rashid',
    3: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    
    1: 'Dwayne Bravo',
    2: 'Andre Russell',
    3: 'Kieron Pollard',
  }
]