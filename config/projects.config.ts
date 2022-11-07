import { ProjectCardProps } from '../src/components/project_card/project_card';

const RECENT_PROJECTS: Array<ProjectCardProps> = [
  {
    projectTitle: 'Calculator',
    projectDescription:
      'A basic calculator app that performs addition, subtraction, multiplication, and divison.',
    previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
    techUsed: [
      { badgeTitle: 'HTML', badgeColor: 'success' },
      { badgeTitle: 'CSS', badgeColor: 'accent' },
      { badgeTitle: 'JavaScript', badgeColor: 'warning' },
    ],
    linkToDemo: 'www.google.com',
    linkToCode: 'www.google.com',
  },
  {
    projectTitle: 'To Do',
    projectDescription:
      'An app that allows user to keep track of their personal tasks. Users can create new tasks, move tasks to a later date, and delete completed tasks',
    previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
    techUsed: [
      { badgeTitle: 'HTML', badgeColor: 'success' },
      { badgeTitle: 'CSS', badgeColor: 'accent' },
      { badgeTitle: 'JavaScript', badgeColor: 'warning' },
    ],
    linkToDemo: 'www.google.com',
  },
  {
    projectTitle: 'Pomodoro Timer',
    projectDescription:
      'A timer application that allows users to create time blocks for work using the Pomodoro method',
    previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
    techUsed: [
      { badgeTitle: 'HTML', badgeColor: 'success' },
      { badgeTitle: 'CSS', badgeColor: 'accent' },
      { badgeTitle: 'JavaScript', badgeColor: 'warning' },
      { badgeTitle: 'React', badgeColor: '#FFA500' },
    ],
    linkToCode: 'www.google.com',
  },
];

export const PROJECTS_CONFIG = {
  recentProjects: RECENT_PROJECTS,
};
