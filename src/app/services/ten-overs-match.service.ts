import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenOversMatchService {

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
    3: 'Shakib Al Hasan',
    4: 'Mushfiqur Rahim',
    5: 'Mahmudullah Riyad',
    6: 'Mosaddek Hossain',
    7: 'Afif Hossain',
    8: 'Mohammad Saifuddin',
    9: 'Mehedi Hasan Miraz',
    10: 'Taskin Ahmed',
    11: 'Mustafizur Rahman'
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Hazratullah Zazai',
    2: 'Ibrahim Zadran',
    3: 'Hashmatullah Shahidi',
    4: 'Azmatullah Omarzai',
    5: 'Najibullah Zadran',
    6: 'Mohammad Nabi',
    7: 'Gulbadin Naib',
    8: 'Ikram Alikhil',
    9: 'Rashid Khan Arman',
    10: 'Fazalhaq Farooqi',
    11: 'Mujeeb Ur Rahman'
  },
  {
    ID: 2,
    name: "India",
    
    1: 'KL Rahul', 
    2: 'Rohit Sharma',
    3: 'Virat Kohli',
    4: 'Suryakumar Yadav',
    5: 'Rishabh Pant',
    6: 'Shreyas Iyer',
    7: 'Ravindra Jadeja',
    8: 'Shardul Thakur',
    9: 'Yuzvendra Chahal',
    10: 'Mohammed Shami',
    11: 'Jasprit Bumrah'
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Mohammad Rizwan',
    2: 'Babar Azam',
    3: 'Fakhar Zaman',
    4: 'Asif Ali',
    5: 'Shoaib Malik',
    6: 'Mohammad Hafeez',
    7: 'Imad Wasim',
    8: 'Shadab khan',
    9: 'Hasan Ali',
    10: 'Shaheen Afridi',
    11: 'Haris Rauf'
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Pathum Nissanka',
    2: 'Kusal Perera',
    3: 'Charith Asalanka',
    4: 'Dasun Shanaka',
    5: 'Chamika Karunaratne',
    6: 'Avishka Fernando',
    7: 'Bhanuka Rajapaksa',
    8: 'Wanindu Hasaranga',
    9: 'Dusmantha Chameera',
    10: 'Maheesh Theekshana',
    11: 'Binura Fernando'
  },
  {
    ID: 5,
    name: "Australia",

    1: 'David Warner',
    2: 'Aaron Finch',
    3: 'Mitchell Marsh',
    4: 'Glenn Maxwell',
    5: 'Steve Smith',
    6: 'Marcus Stoinis',
    7: 'Matthew Wade',
    8: 'Pat Cummins',
    9: 'Mitchell Starc',
    10: 'Adam Zampa',
    11: 'Josh Hazlewood'
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Quinton de Kock',
    2: 'Reeza Hendricks',
    3: 'Rassie van der Dussen',
    4: 'Aiden Markram',
    5: 'Temba Bavuma',
    6: 'David Miller',
    7: 'Dwaine Pretorius',
    8: 'Kagiso Rabada',
    9: 'Keshav Maharaj',
    10: 'Anrich Nortje',
    11: 'Tabraiz Shamsi'
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Martin Guptill',
    2: 'Daryl Mitchell',
    3: 'Kane Williamson',
    4: 'Devon Conway',
    5: 'Glenn Phillips',
    6: 'James Neesham',
    7: 'Mitchell Santner',
    8: 'Adam Milne',
    9: 'Tim Southee',
    10: 'Ish Sodhi',
    11: 'Trent Boult'
  },
  {
    ID: 8,
    name: "England",

    1: 'Jos Buttler',
    2: 'Jonny Bairstow',
    3: 'Dawid Malan',
    4: 'Moeen Ali',
    5: 'Liam Livingstone',
    6: 'Eoin Morgan',
    7: 'Sam Billings',
    8: 'Chris Woakes',
    9: 'Chris Jordan',
    10: 'Adil Rashid',
    11: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    1: 'Chris Gayle',
    2: 'Evin Lewis',
    3: 'Nicholas Pooran',
    4: 'Roston Chase',
    5: 'Shimran Hetmyer',
    6: 'Kieron Pollard',
    7: 'Dwayne Bravo',
    8: 'Andre Russell',
    9: 'Jason Holder',
    10: 'Akeal Hossain',
    11: 'Hayden Walsh Jr.'
  }
]

const Bowlers = [
  {
    ID: 0,
    name: "Bangladesh",

    1: 'Mohammad Saifuddin',
    2: 'Mehedi Hasan Miraz',
    3: 'Taskin Ahmed',
    4: 'Mustafizur Rahman',
    5: 'Shaki Al Hasan'
  },
  {
    ID: 1,
    name: "Afghanistan",

    1: 'Mohammad Nabi',
    2: 'Gulbadin Naib',
    3: 'Rashid Khan Arman',
    4: 'Fazalhaq Farooqi',
    5: 'Mujeeb Ur Rahman'
  },
  {
    ID: 2,
    name: "India",

    1: 'Ravindra Jadeja',
    2: 'Shardul Thakur',
    3: 'Yuzvendra Chahal',
    4: 'Mohammed Shami',
    5: 'Jasprit Bumrah'
  },
  {
    ID: 3,
    name: "Pakistan",

    1: 'Imad Wasim',
    2: 'Shadab khan',
    3: 'Hasan Ali',
    4: 'Shaheen Afridi',
    5: 'Haris Rauf'
  },
  {
    ID: 4,
    name: "Sri Lanka",

    1: 'Bhanuka Rajapaksa',
    2: 'Wanindu Hasaranga',
    3: 'Dusmantha Chameera',
    4: 'Maheesh Theekshana',
    5: 'Binura Fernando'
  },
  {
    ID: 5,
    name: "Australia",
    
    1: 'Marcus Stoinis',
    2: 'Pat Cummins',
    3: 'Mitchell Starc',
    4: 'Adam Zampa',
    5: 'Josh Hazlewood'
  },
  {
    ID: 6,
    name: "South Africa",

    1: 'Dwaine Pretorius',
    2: 'Kagiso Rabada',
    3: 'Keshav Maharaj',
    4: 'Anrich Nortje',
    5: 'Tabraiz Shamsi'
  },
  {
    ID: 7,
    name: "New Zealand",

    1: 'Mitchell Santner',
    2: 'Adam Milne',
    3: 'Tim Southee',
    4: 'Ish Sodhi',
    5: 'Trent Boult'
  },
  {
    ID: 8,
    name: "England",

    1: 'Sam Billings',
    2: 'Chris Woakes',
    3: 'Chris Jordan',
    4: 'Adil Rashid',
    5: 'Mark Wood'
  },
  {
    ID: 9,
    name: "West Indies",
    
    1: 'Dwayne Bravo',
    2: 'Andre Russell',
    3: 'Jason Holder',
    4: 'Akeal Hossain',
    5: 'Hayden Walsh Jr.'
  }
]