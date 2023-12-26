import { FC, createContext } from 'react';

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


    return (
        <NewsletterContext.Provider
            value={{ user, newsletter, subscribers, tags }}
        >
            {children}
        </NewsletterContext.Provider>
    );
};
