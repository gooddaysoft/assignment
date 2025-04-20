export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export interface DashboardData {
  userName: string;
  currentPlan: string;
  thisMonthUsage: number;
  dailyUsage: { date: string; count: number }[];
}

export interface User {
  id: string;
  username: string;
  password: string;
}
