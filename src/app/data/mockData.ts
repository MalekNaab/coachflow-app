// Mock data for the Trainer Analytics Dashboard
// REALISTIC DATA - Makes the app feel production-ready

export interface Client {
  id: string;
  name: string;
  email: string;
  goal: 'Fat Loss' | 'Strength' | 'Rehab' | 'General Fitness';
  status: 'Active' | 'At Risk' | 'Inactive';
  lastSession: string;
  nextSession: string | null;
  totalSpend: number;
  joinedDate: string;
  measurements: { date: string; weight: number }[];
  sessions: {
    id: string;
    date: string;
    type: string;
    notes: string;
  }[];
  payments: {
    id: string;
    date: string;
    amount: number;
    method: string;
    status: string;
  }[];
  notes: string;
}

export interface Session {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  location: string;
  price: number;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  notes: string;
}

export interface Payment {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  amount: number;
  method: 'Card' | 'Cash' | 'Bank Transfer';
  status: 'Completed' | 'Pending' | 'Failed';
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@outlook.com',
    goal: 'Fat Loss',
    status: 'Active',
    lastSession: '2026-02-16',
    nextSession: '2026-02-19',
    totalSpend: 4850,
    joinedDate: '2025-06-12',
    measurements: [
      { date: '2025-06-12', weight: 78.5 },
      { date: '2025-07-12', weight: 76.8 },
      { date: '2025-08-12', weight: 74.2 },
      { date: '2025-09-12', weight: 72.1 },
      { date: '2025-10-12', weight: 70.3 },
      { date: '2025-11-12', weight: 68.9 },
      { date: '2025-12-12', weight: 67.5 },
      { date: '2026-01-12', weight: 66.2 },
      { date: '2026-02-12', weight: 65.1 },
    ],
    sessions: [
      { id: 's1', date: '2026-02-16', type: 'HIIT Training', notes: 'Excellent cardio endurance - hit new personal best on rowing intervals' },
      { id: 's2', date: '2026-02-13', type: 'Strength & Conditioning', notes: 'Increased goblet squats to 20kg - perfect form throughout' },
      { id: 's3', date: '2026-02-09', type: 'HIIT Training', notes: 'Full Tabata circuit completed - no breaks needed!' },
      { id: 's4', date: '2026-02-06', type: 'Core & Mobility', notes: 'Planks now holding for 90 seconds - significant improvement' },
      { id: 's5', date: '2026-02-02', type: 'HIIT Training', notes: 'Battle ropes and burpees - very strong session' },
    ],
    payments: [
      { id: 'p1', date: '2026-02-01', amount: 450, method: 'Card', status: 'Completed' },
      { id: 'p2', date: '2026-01-01', amount: 450, method: 'Card', status: 'Completed' },
      { id: 'p3', date: '2025-12-01', amount: 450, method: 'Card', status: 'Completed' },
    ],
    notes: 'Outstanding client - down 13.4kg since starting! Very motivated, always on time, and follows nutrition plan closely. Looking to maintain current weight and build lean muscle.',
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    email: 'marcus.t@gmail.com',
    goal: 'Strength',
    status: 'Active',
    lastSession: '2026-02-15',
    nextSession: '2026-02-18',
    totalSpend: 8750,
    joinedDate: '2024-09-05',
    measurements: [
      { date: '2024-09-05', weight: 82.3 },
      { date: '2024-10-05', weight: 83.1 },
      { date: '2024-11-05', weight: 84.5 },
      { date: '2024-12-05', weight: 85.8 },
      { date: '2025-01-05', weight: 86.9 },
      { date: '2025-02-05', weight: 88.2 },
      { date: '2025-03-05', weight: 89.4 },
      { date: '2025-04-05', weight: 90.1 },
    ],
    sessions: [
      { id: 's6', date: '2026-02-15', type: 'Powerlifting - Lower', notes: 'New PR on deadlift - 185kg for 3 reps! Incredible progress' },
      { id: 's7', date: '2026-02-12', type: 'Powerlifting - Upper', notes: 'Bench press working sets at 110kg - targeting 120kg by March' },
      { id: 's8', date: '2026-02-08', type: 'Powerlifting - Lower', notes: 'Squat depth perfect - 160kg for 5 reps' },
      { id: 's9', date: '2026-02-05', type: 'Powerlifting - Upper', notes: 'Overhead press at 75kg - shoulders responding well' },
    ],
    payments: [
      { id: 'p4', date: '2026-02-01', amount: 600, method: 'Bank Transfer', status: 'Completed' },
      { id: 'p5', date: '2026-01-01', amount: 600, method: 'Bank Transfer', status: 'Completed' },
    ],
    notes: 'Training for British Powerlifting Championships in April. Gained 7.8kg lean mass. Premium client - never misses sessions.',
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.patel@hotmail.co.uk',
    goal: 'Rehab',
    status: 'Active',
    lastSession: '2026-02-14',
    nextSession: '2026-02-17',
    totalSpend: 2890,
    joinedDate: '2025-10-20',
    measurements: [
      { date: '2025-10-20', weight: 64.2 },
      { date: '2025-11-20', weight: 64.8 },
      { date: '2025-12-20', weight: 65.3 },
      { date: '2026-01-20', weight: 65.7 },
    ],
    sessions: [
      { id: 's10', date: '2026-02-14', type: 'Physiotherapy', notes: 'Knee flexion now 125° - huge improvement from 90° at start' },
      { id: 's11', date: '2026-02-11', type: 'Physiotherapy', notes: 'Single-leg balance exercises going well - stability improving' },
      { id: 's12', date: '2026-02-07', type: 'Physiotherapy', notes: 'Low-impact cardio introduced - 15 mins cycling no discomfort' },
    ],
    payments: [
      { id: 'p6', date: '2026-02-01', amount: 380, method: 'Card', status: 'Completed' },
      { id: 'p7', date: '2026-01-01', amount: 380, method: 'Card', status: 'Completed' },
    ],
    notes: 'Post-ACL reconstruction recovery going excellently. Cleared by physio to start light resistance training. Very diligent with home exercises.',
  },
  {
    id: '4',
    name: 'James O\'Connor',
    email: 'james.oconnor86@icloud.com',
    goal: 'Fat Loss',
    status: 'Active',
    lastSession: '2026-02-17',
    nextSession: '2026-02-20',
    totalSpend: 6420,
    joinedDate: '2025-03-15',
    measurements: [
      { date: '2025-03-15', weight: 104.8 },
      { date: '2025-04-15', weight: 101.2 },
      { date: '2025-05-15', weight: 97.8 },
      { date: '2025-06-15', weight: 94.6 },
      { date: '2025-07-15', weight: 91.3 },
      { date: '2025-08-15', weight: 88.7 },
      { date: '2025-09-15', weight: 86.4 },
      { date: '2025-10-15', weight: 84.2 },
      { date: '2025-11-15', weight: 82.5 },
    ],
    sessions: [
      { id: 's13', date: '2026-02-17', type: 'HIIT Training', notes: 'Full circuit completed - burpees, kettlebell swings, box jumps' },
      { id: 's14', date: '2026-02-14', type: 'Boxing Fitness', notes: 'Heavy bag work and pad drills - 45 minutes continuous' },
      { id: 's15', date: '2026-02-10', type: 'HIIT Training', notes: 'Rower intervals - 500m splits under 2:00 now' },
    ],
    payments: [
      { id: 'p8', date: '2026-02-01', amount: 520, method: 'Card', status: 'Completed' },
      { id: 'p9', date: '2026-01-01', amount: 520, method: 'Card', status: 'Completed' },
    ],
    notes: 'Incredible transformation - down 22.3kg! Originally came in for general fitness but committed to serious fat loss. Now inspiring other clients.',
  },
  {
    id: '5',
    name: 'Aisha Mohammed',
    email: 'aisha.m@yahoo.co.uk',
    goal: 'General Fitness',
    status: 'Active',
    lastSession: '2026-02-16',
    nextSession: '2026-02-19',
    totalSpend: 3650,
    joinedDate: '2025-05-08',
    measurements: [
      { date: '2025-05-08', weight: 58.6 },
      { date: '2025-06-08', weight: 59.1 },
      { date: '2025-07-08', weight: 59.8 },
      { date: '2025-08-08', weight: 60.2 },
    ],
    sessions: [
      { id: 's16', date: '2026-02-16', type: 'Full Body Circuit', notes: 'Great energy today - adding 2.5kg to dumbbell presses next week' },
      { id: 's17', date: '2026-02-12', type: 'Yoga & Mobility', notes: 'Flexibility improving - now touching toes comfortably' },
      { id: 's18', date: '2026-02-09', type: 'Full Body Circuit', notes: 'Completed all three rounds without rest - fitness level up!' },
    ],
    payments: [
      { id: 'p10', date: '2026-02-01', amount: 420, method: 'Bank Transfer', status: 'Completed' },
      { id: 'p11', date: '2026-01-01', amount: 420, method: 'Bank Transfer', status: 'Completed' },
    ],
    notes: 'Consistent twice-weekly sessions. Focused on overall health and stress management. Works in healthcare so values fitness for wellbeing.',
  },
  {
    id: '6',
    name: 'Thomas Wright',
    email: 'thomas.wright@btinternet.com',
    goal: 'Strength',
    status: 'Active',
    lastSession: '2026-02-15',
    nextSession: '2026-02-18',
    totalSpend: 5980,
    joinedDate: '2025-01-22',
    measurements: [
      { date: '2025-01-22', weight: 76.4 },
      { date: '2025-02-22', weight: 77.8 },
      { date: '2025-03-22', weight: 79.2 },
      { date: '2025-04-22', weight: 80.5 },
      { date: '2025-05-22', weight: 81.7 },
    ],
    sessions: [
      { id: 's19', date: '2026-02-15', type: 'Olympic Lifting', notes: 'Clean and jerk at 95kg - technique looking sharp' },
      { id: 's20', date: '2026-02-11', type: 'Olympic Lifting', notes: 'Snatch practice - working up to 75kg successfully' },
    ],
    payments: [
      { id: 'p12', date: '2026-02-01', amount: 550, method: 'Card', status: 'Completed' },
    ],
    notes: 'Former CrossFit athlete transitioning to Olympic weightlifting. Very technical focus. Competing in regional championships.',
  },
  {
    id: '7',
    name: 'Emma Clarke',
    email: 'e.clarke@mail.com',
    goal: 'Fat Loss',
    status: 'At Risk',
    lastSession: '2026-01-30',
    nextSession: null,
    totalSpend: 1840,
    joinedDate: '2025-09-12',
    measurements: [
      { date: '2025-09-12', weight: 72.4 },
      { date: '2025-10-12', weight: 70.8 },
      { date: '2025-11-12', weight: 69.6 },
      { date: '2025-12-12', weight: 68.9 },
    ],
    sessions: [
      { id: 's21', date: '2026-01-30', type: 'Circuit Training', notes: 'Good session but mentioned work stress affecting schedule' },
      { id: 's22', date: '2026-01-23', type: 'Circuit Training', notes: 'Completed workout but seemed distracted' },
    ],
    payments: [
      { id: 'p13', date: '2026-01-15', amount: 380, method: 'Card', status: 'Pending' },
    ],
    notes: 'Has not responded to last 3 messages. Payment pending. May need to reach out via phone. Was making good progress initially.',
  },
  {
    id: '8',
    name: 'Ravi Singh',
    email: 'ravi.singh@gmail.com',
    goal: 'General Fitness',
    status: 'Active',
    lastSession: '2026-02-16',
    nextSession: '2026-02-19',
    totalSpend: 4120,
    joinedDate: '2025-04-17',
    measurements: [
      { date: '2025-04-17', weight: 81.2 },
      { date: '2025-05-17', weight: 81.8 },
      { date: '2025-06-17', weight: 82.3 },
      { date: '2025-07-17', weight: 82.7 },
    ],
    sessions: [
      { id: 's23', date: '2026-02-16', type: 'Functional Training', notes: 'Kettlebell complex going really well - up to 24kg now' },
      { id: 's24', date: '2026-02-13', type: 'Core & Cardio', notes: 'Assault bike intervals - maintaining consistent power output' },
    ],
    payments: [
      { id: 'p14', date: '2026-02-01', amount: 460, method: 'Bank Transfer', status: 'Completed' },
    ],
    notes: 'Training for general health and longevity. Tech entrepreneur with unpredictable schedule but very committed when available.',
  },
  {
    id: '9',
    name: 'Charlotte Evans',
    email: 'charlotte.evans92@live.com',
    goal: 'Strength',
    status: 'Active',
    lastSession: '2026-02-17',
    nextSession: '2026-02-20',
    totalSpend: 7250,
    joinedDate: '2024-11-03',
    measurements: [
      { date: '2024-11-03', weight: 62.8 },
      { date: '2024-12-03', weight: 63.9 },
      { date: '2025-01-03', weight: 64.7 },
      { date: '2025-02-03', weight: 65.4 },
    ],
    sessions: [
      { id: 's25', date: '2026-02-17', type: 'Hypertrophy Training', notes: 'Hip thrusts at 100kg - glute strength coming along nicely' },
      { id: 's26', date: '2026-02-14', type: 'Hypertrophy Training', notes: 'Upper body push day - dumbbell press up to 22.5kg each hand' },
    ],
    payments: [
      { id: 'p15', date: '2026-02-01', amount: 580, method: 'Card', status: 'Completed' },
    ],
    notes: 'Building strength for health and aesthetics. Works as a nurse so training helps manage physical demands of job. Very consistent.',
  },
  {
    id: '10',
    name: 'Daniel Foster',
    email: 'dan.foster@outlook.com',
    goal: 'Rehab',
    status: 'Active',
    lastSession: '2026-02-15',
    nextSession: '2026-02-18',
    totalSpend: 3420,
    joinedDate: '2025-08-09',
    measurements: [
      { date: '2025-08-09', weight: 88.6 },
      { date: '2025-09-09', weight: 87.9 },
      { date: '2025-10-09', weight: 87.3 },
      { date: '2025-11-09', weight: 86.8 },
    ],
    sessions: [
      { id: 's27', date: '2026-02-15', type: 'Physiotherapy', notes: 'Shoulder mobility at 95% - almost full range of motion restored' },
      { id: 's28', date: '2026-02-12', type: 'Physiotherapy', notes: 'Rotator cuff strengthening - bands and light weights' },
    ],
    payments: [
      { id: 'p16', date: '2026-02-01', amount: 390, method: 'Card', status: 'Completed' },
    ],
    notes: 'Recovering from rotator cuff surgery. Surgeon very pleased with progress. Will transition to general strength training next month.',
  },
  {
    id: '11',
    name: 'Sophie Taylor',
    email: 'sophie.t@protonmail.com',
    goal: 'Fat Loss',
    status: 'Active',
    lastSession: '2026-02-16',
    nextSession: '2026-02-19',
    totalSpend: 5670,
    joinedDate: '2025-02-14',
    measurements: [
      { date: '2025-02-14', weight: 86.3 },
      { date: '2025-03-14', weight: 83.7 },
      { date: '2025-04-14', weight: 81.2 },
      { date: '2025-05-14', weight: 78.9 },
      { date: '2025-06-14', weight: 76.8 },
    ],
    sessions: [
      { id: 's29', date: '2026-02-16', type: 'Bootcamp Class', notes: 'Leading the pack today - fitness levels transformed!' },
      { id: 's30', date: '2026-02-13', type: 'Strength Training', notes: 'Deadlifts at 60kg - form perfect, confidence building' },
    ],
    payments: [
      { id: 'p17', date: '2026-02-01', amount: 480, method: 'Bank Transfer', status: 'Completed' },
    ],
    notes: 'Down 9.5kg so far. Recently started bringing friend to sessions. Great community spirit and very encouraging to others.',
  },
  {
    id: '12',
    name: 'Oliver Harris',
    email: 'ollie.harris@gmail.com',
    goal: 'General Fitness',
    status: 'Inactive',
    lastSession: '2025-12-18',
    nextSession: null,
    totalSpend: 1290,
    joinedDate: '2025-08-23',
    measurements: [
      { date: '2025-08-23', weight: 74.2 },
      { date: '2025-09-23', weight: 74.8 },
      { date: '2025-10-23', weight: 75.1 },
    ],
    sessions: [
      { id: 's31', date: '2025-12-18', type: 'General Fitness', notes: 'Last session before Christmas break - mentioned new job starting' },
    ],
    payments: [
      { id: 'p18', date: '2025-12-01', amount: 320, method: 'Card', status: 'Pending' },
    ],
    notes: 'Stopped training after starting new job in December. Payment still pending. May need to follow up for closure.',
  },
];

export const sessions: Session[] = [
  // Upcoming sessions
  {
    id: 's1',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2026-02-19',
    time: '09:00',
    location: 'Studio A',
    price: 65,
    status: 'Scheduled',
    notes: 'Lower body strength focus - squats and lunges',
  },
  {
    id: 's2',
    clientId: '2',
    clientName: 'Marcus Thompson',
    date: '2026-02-18',
    time: '14:00',
    location: 'Studio A',
    price: 85,
    status: 'Scheduled',
    notes: 'Bench press day - aiming for 115kg single',
  },
  {
    id: 's3',
    clientId: '3',
    clientName: 'Priya Patel',
    date: '2026-02-17',
    time: '16:30',
    location: 'Studio B',
    price: 70,
    status: 'Scheduled',
    notes: 'Continue knee mobility work and light cycling',
  },
  {
    id: 's4',
    clientId: '4',
    clientName: 'James O\'Connor',
    date: '2026-02-20',
    time: '10:00',
    location: 'Outdoor Training Area',
    price: 75,
    status: 'Scheduled',
    notes: 'Boxing circuit - pads and heavy bag work',
  },
  {
    id: 's5',
    clientId: '5',
    clientName: 'Aisha Mohammed',
    date: '2026-02-19',
    time: '18:00',
    location: 'Studio B',
    price: 60,
    status: 'Scheduled',
    notes: 'Full body circuit with focus on core',
  },
  {
    id: 's6',
    clientId: '6',
    clientName: 'Thomas Wright',
    date: '2026-02-18',
    time: '11:00',
    location: 'Studio A',
    price: 80,
    status: 'Scheduled',
    notes: 'Olympic lifting - snatch technique work',
  },
  {
    id: 's7',
    clientId: '8',
    clientName: 'Ravi Singh',
    date: '2026-02-19',
    time: '07:00',
    location: 'Studio A',
    price: 65,
    status: 'Scheduled',
    notes: 'Early morning functional training',
  },
  {
    id: 's8',
    clientId: '9',
    clientName: 'Charlotte Evans',
    date: '2026-02-20',
    time: '17:00',
    location: 'Studio B',
    price: 70,
    status: 'Scheduled',
    notes: 'Leg day - squats and Romanian deadlifts',
  },
  {
    id: 's9',
    clientId: '10',
    clientName: 'Daniel Foster',
    date: '2026-02-18',
    time: '15:00',
    location: 'Studio B',
    price: 68,
    status: 'Scheduled',
    notes: 'Shoulder rehab - continue rotator cuff work',
  },
  {
    id: 's10',
    clientId: '11',
    clientName: 'Sophie Taylor',
    date: '2026-02-19',
    time: '12:00',
    location: 'Outdoor Training Area',
    price: 72,
    status: 'Scheduled',
    notes: 'Bootcamp class - partner training session',
  },
  // Completed sessions (recent)
  {
    id: 's11',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2026-02-16',
    time: '09:00',
    location: 'Studio A',
    price: 65,
    status: 'Completed',
    notes: 'Excellent rowing intervals - new 500m PR',
  },
  {
    id: 's12',
    clientId: '2',
    clientName: 'Marcus Thompson',
    date: '2026-02-15',
    time: '14:00',
    location: 'Studio A',
    price: 85,
    status: 'Completed',
    notes: 'Deadlift PR - 185kg for 3 reps!',
  },
  {
    id: 's13',
    clientId: '4',
    clientName: 'James O\'Connor',
    date: '2026-02-17',
    time: '10:00',
    location: 'Outdoor Training Area',
    price: 75,
    status: 'Completed',
    notes: 'Full HIIT circuit completed - excellent effort',
  },
  {
    id: 's14',
    clientId: '3',
    clientName: 'Priya Patel',
    date: '2026-02-14',
    time: '16:30',
    location: 'Studio B',
    price: 70,
    status: 'Completed',
    notes: 'Knee flexion improving - now at 125 degrees',
  },
  {
    id: 's15',
    clientId: '5',
    clientName: 'Aisha Mohammed',
    date: '2026-02-16',
    time: '18:00',
    location: 'Studio B',
    price: 60,
    status: 'Completed',
    notes: 'Great energy - increasing weights next session',
  },
  {
    id: 's16',
    clientId: '9',
    clientName: 'Charlotte Evans',
    date: '2026-02-17',
    time: '17:00',
    location: 'Studio B',
    price: 70,
    status: 'Completed',
    notes: 'Hip thrusts at 100kg - impressive strength',
  },
  {
    id: 's17',
    clientId: '11',
    clientName: 'Sophie Taylor',
    date: '2026-02-16',
    time: '12:00',
    location: 'Outdoor Training Area',
    price: 72,
    status: 'Completed',
    notes: 'Leading the group now - fantastic transformation',
  },
  {
    id: 's18',
    clientId: '8',
    clientName: 'Ravi Singh',
    date: '2026-02-16',
    time: '07:00',
    location: 'Studio A',
    price: 65,
    status: 'Completed',
    notes: 'Early bird session - kettlebell complex with 24kg',
  },
  {
    id: 's19',
    clientId: '6',
    clientName: 'Thomas Wright',
    date: '2026-02-15',
    time: '11:00',
    location: 'Studio A',
    price: 80,
    status: 'Completed',
    notes: 'Clean and jerk at 95kg - technique excellent',
  },
  {
    id: 's20',
    clientId: '10',
    clientName: 'Daniel Foster',
    date: '2026-02-15',
    time: '15:00',
    location: 'Studio B',
    price: 68,
    status: 'Completed',
    notes: 'Shoulder mobility at 95% - fantastic progress',
  },
  // Cancelled session
  {
    id: 's21',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2026-02-11',
    time: '09:00',
    location: 'Studio A',
    price: 65,
    status: 'Cancelled',
    notes: 'Client ill - rescheduled for next week',
  },
];

export const payments: Payment[] = [
  // February 2026
  {
    id: 'p1',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2026-02-15',
    amount: 450,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p2',
    clientId: '2',
    clientName: 'Marcus Thompson',
    date: '2026-02-14',
    amount: 600,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p3',
    clientId: '4',
    clientName: 'James O\'Connor',
    date: '2026-02-13',
    amount: 520,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p4',
    clientId: '3',
    clientName: 'Priya Patel',
    date: '2026-02-12',
    amount: 380,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p5',
    clientId: '5',
    clientName: 'Aisha Mohammed',
    date: '2026-02-11',
    amount: 420,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p6',
    clientId: '9',
    clientName: 'Charlotte Evans',
    date: '2026-02-10',
    amount: 580,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p7',
    clientId: '6',
    clientName: 'Thomas Wright',
    date: '2026-02-09',
    amount: 550,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p8',
    clientId: '8',
    clientName: 'Ravi Singh',
    date: '2026-02-08',
    amount: 460,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p9',
    clientId: '11',
    clientName: 'Sophie Taylor',
    date: '2026-02-07',
    amount: 480,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p10',
    clientId: '10',
    clientName: 'Daniel Foster',
    date: '2026-02-06',
    amount: 390,
    method: 'Card',
    status: 'Completed',
  },
  // January 2026
  {
    id: 'p11',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2026-01-15',
    amount: 450,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p12',
    clientId: '2',
    clientName: 'Marcus Thompson',
    date: '2026-01-14',
    amount: 600,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p13',
    clientId: '4',
    clientName: 'James O\'Connor',
    date: '2026-01-13',
    amount: 520,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p14',
    clientId: '7',
    clientName: 'Emma Clarke',
    date: '2026-01-15',
    amount: 380,
    method: 'Card',
    status: 'Pending',
  },
  {
    id: 'p15',
    clientId: '9',
    clientName: 'Charlotte Evans',
    date: '2026-01-12',
    amount: 580,
    method: 'Card',
    status: 'Completed',
  },
  // December 2025
  {
    id: 'p16',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2025-12-15',
    amount: 450,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p17',
    clientId: '2',
    clientName: 'Marcus Thompson',
    date: '2025-12-14',
    amount: 600,
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'p18',
    clientId: '12',
    clientName: 'Oliver Harris',
    date: '2025-12-01',
    amount: 320,
    method: 'Card',
    status: 'Pending',
  },
  {
    id: 'p19',
    clientId: '4',
    clientName: 'James O\'Connor',
    date: '2025-12-10',
    amount: 520,
    method: 'Card',
    status: 'Completed',
  },
  {
    id: 'p20',
    clientId: '11',
    clientName: 'Sophie Taylor',
    date: '2025-12-08',
    amount: 480,
    method: 'Bank Transfer',
    status: 'Completed',
  },
];

// Revenue data for charts - realistic monthly growth
export const revenueData = [
  { month: 'Sep', revenue: 4850 },
  { month: 'Oct', revenue: 5920 },
  { month: 'Nov', revenue: 7340 },
  { month: 'Dec', revenue: 6780 },
  { month: 'Jan', revenue: 8960 },
  { month: 'Feb', revenue: 9840 },
];

// Sessions per week for current month
export const sessionsPerWeek = [
  { week: 'Week 1', sessions: 23 },
  { week: 'Week 2', sessions: 28 },
  { week: 'Week 3', sessions: 26 },
  { week: 'Week 4', sessions: 31 },
];

// Client distribution by goal
export const clientsByGoal = [
  { name: 'Fat Loss', value: 42, color: '#10b981' },
  { name: 'Strength', value: 28, color: '#3b82f6' },
  { name: 'Rehab', value: 12, color: '#f59e0b' },
  { name: 'General Fitness', value: 18, color: '#8b5cf6' },
];
