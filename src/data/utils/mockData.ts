import { TASK_STATUS } from '../hooks/tasks';

export const mockUser = {
    logout: () => {},
    idToken: 'no-id-token',
    asgardeoIdToken: 'no-asgardeo',
    accessToken: 'no-access-token',
    given_name: 'Anonymous',
    picture:
        'https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png',
    email: 'user@knnect.com',
    sid: 'no-sid',
    customParams: '',
};

export const mockTasks = [
    {
        id: 'S',
        name: 'Sunday',
        tasks: [
            {
                id: 't1',
                title: 'Bathing, grooming and dressing',
                status: TASK_STATUS.INPROGRSS,
            },
            {
                id: 't2',
                title: 'Household chores',
                status: 'open',
            },
            {
                id: 't3',
                title: 'Leisure',
                status: TASK_STATUS.COMPLETED,
            },
        ],
    },
    {
        id: 'M',
        name: 'Monday',
        tasks: [
            {
                id: 't4',
                title: 'Preparing meals, eating and drinking',
                status: 'open',
            },
            {
                id: 't5',
                title: 'Driving',
                status: TASK_STATUS.COMPLETED,
            },
        ],
    },
    {
        id: 'T',
        name: 'Tuesday',
        tasks: [],
    },
    {
        id: 'W',
        name: 'Wednesday',
        tasks: [],
    },
    {
        id: 'Th',
        name: 'Thursday',
        tasks: [],
    },

    {
        id: 'F',
        name: 'Friday',
        tasks: [],
    },
    {
        id: 'Sa',
        name: 'Saturday',
        tasks: [],
    },
];
