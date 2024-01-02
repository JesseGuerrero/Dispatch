import { FC, createContext } from 'react';


type ScheduleItem = {
    date: Date;
    tag: string;
    email: {
        subject: string;
        body: string;
    };
};


type Course = {
    courseName: string;
    emails: {
        subject: string;
        body: string;
    }[];
    stages: {
        [stage: string]: string[];
    };
};

type subscribers = {
    [email: string]: {
        firstName: string;
        tags: string[];
        courses: string[];
    };
};

type tags = {
    [tagName: string]: string[];
};

type User = {
    avatar: string;
    name: string;
};

type Newsletter = {
    title: string;
};

type NewsletterContext = {
    user: User;
    newsletter: Newsletter;
    subscribers: subscribers;
    tags: tags;
    schedule: ScheduleItem[];
    courses: Course[];
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const NewsletterContext = createContext<NewsletterContext>(
    {} as NewsletterContext
);

export const NewsletterProvider: FC = ({ children }) => {
    const user = {
        avatar: '',
        name: 'Jesse',
    };

    const newsletter = {
        title: 'Newsletter1'
    }

    const tags = {
        "tagName1": ["email@gmail.com", "john@hotmail.com"],
        "tagName2": ["email2@gmail.com", "josh@yahoo.com"]
    }

    const subscribers = {
        "email1@gmail.com": {
            firstName: "George",
            tags: ["tagName1", "tagName2", "tagName3", "tagName4", "tagName5", "tagName6", "tagName7", "tagName8", "tagName9", "tagName10"],
            courses: ["course1", "course2", "course3", "course4", "course5", "course6", "course7", "course8", "course9", "course10"]
        },
        "email2@gmail.com": {
            firstName: "John",
            tags: ["tagName11", "tagName12", "tagName13", "tagName14", "tagName15", "tagName16", "tagName17", "tagName18", "tagName19", "tagName20"],
            courses: ["course11", "course12", "course13", "course14", "course15", "course16", "course17", "course18", "course19", "course20"]
        },
        "email3@gmail.com": {
            firstName: "Alice",
            tags: ["tagName1", "tagName3", "tagName5", "tagName7", "tagName9", "tagName11", "tagName13", "tagName15", "tagName17", "tagName19"],
            courses: ["course1", "course3", "course5", "course7", "course9", "course11", "course13", "course15", "course17", "course19"]
        },
        "email4@gmail.com": {
            firstName: "Bob",
            tags: ["tagName2", "tagName4", "tagName6", "tagName8", "tagName10", "tagName12", "tagName14", "tagName16", "tagName18", "tagName20"],
            courses: ["course2", "course4", "course6", "course8", "course10", "course12", "course14", "course16", "course18", "course20"]
        },
        "email5@gmail.com": {
            firstName: "Eva",
            tags: ["tagName1", "tagName2", "tagName3", "tagName4", "tagName5", "tagName6", "tagName7", "tagName8", "tagName9", "tagName10"],
            courses: ["course1", "course2", "course3", "course4", "course5", "course6", "course7", "course8", "course9", "course10"]
        },
        "email6@gmail.com": {
            firstName: "Charlie",
            tags: ["tagName11", "tagName12", "tagName13", "tagName14", "tagName15", "tagName16", "tagName17", "tagName18", "tagName19", "tagName20"],
            courses: ["course11", "course12", "course13", "course14", "course15", "course16", "course17", "course18", "course19", "course20"]
        },
        "email7@gmail.com": {
            firstName: "Diana",
            tags: ["tagName1", "tagName3", "tagName5", "tagName7", "tagName9", "tagName11", "tagName13", "tagName15", "tagName17", "tagName19"],
            courses: ["course1", "course3", "course5", "course7", "course9", "course11", "course13", "course15", "course17", "course19"]
        },
        "email8@gmail.com": {
            firstName: "Frank",
            tags: ["tagName2", "tagName4", "tagName6", "tagName8", "tagName10", "tagName12", "tagName14", "tagName16", "tagName18", "tagName20"],
            courses: ["course2", "course4", "course6", "course8", "course10", "course12", "course14", "course16", "course18", "course20"]
        },
        "email9@gmail.com": {
            firstName: "Grace",
            tags: ["tagName1", "tagName2", "tagName3", "tagName4", "tagName5", "tagName6", "tagName7", "tagName8", "tagName9", "tagName10"],
            courses: ["course1", "course2", "course3", "course4", "course5", "course6", "course7", "course8", "course9", "course10"]
        },
        "email10@gmail.com": {
            firstName: "Harry",
            tags: ["tagName11", "tagName12", "tagName13", "tagName14", "tagName15", "tagName16", "tagName17", "tagName18", "tagName19", "tagName20"],
            courses: ["course11", "course12", "course13", "course14", "course15", "course16", "course17", "course18", "course19", "course20"]
        }
    };
    const schedule = [];
    // Function to generate a random date within the next 365 days
    function getRandomFutureDate() {
        const currentDate = new Date();
        const futureDate = new Date(currentDate);
        futureDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 365));
        return futureDate;
    }

    // Function to generate random email subject and body
    function getRandomEmailContent() {
        const subjects = ["Meeting Reminder", "Important Update", "Event Notification"];
        const bodies = ["Please be reminded of our upcoming meeting.", "Exciting news! Check out the latest updates.", "Don't miss out on the upcoming event."];

        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const randomBody = bodies[Math.floor(Math.random() * bodies.length)];

        return { subject: randomSubject, body: randomBody };
    }

    // Populate the schedule array with random future dates and properties
    for (let i = 0; i < 5; i++) {
        const randomDate = getRandomFutureDate();
        const randomTag = `tagName${i + 1}`;
        const randomEmailContent = getRandomEmailContent();

        const event = {
            date: randomDate,
            tag: randomTag,
            email: {
                subject: randomEmailContent.subject,
                body: randomEmailContent.body
            }
        };

        schedule.push(event);
    }

    let courses = [
        {
            "courseName": "course1",
            "emails": [
                {
                    "subject": "subject1",
                    "body": "body1"
                },
                {
                    "subject": "subject2",
                    "body": "body2"
                },
                {
                    "subject": "subject3",
                    "body": "body3"
                },
                {
                    "subject": "subject4",
                    "body": "body4"
                },
                {
                    "subject": "subject5",
                    "body": "body5"
                }
            ],
            "stages": {
                "1": ["joe@email.com", "John@re.com"],
                "2": ["go@email.com"],
                "3": [],
                "4": [],
                "5": []
            }
        }
    ]


    return (
        <NewsletterContext.Provider
            value={{ user, newsletter, subscribers, tags, schedule, courses }}
        >
            {children}
        </NewsletterContext.Provider>
    );
};
