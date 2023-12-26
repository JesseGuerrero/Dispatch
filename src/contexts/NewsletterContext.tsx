import { FC, createContext } from 'react';

type subscribers = {
    [email: string]: string;
}

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
        "email@gmail.com": "George",
        "john@hotmail.com": "John",
        "email2@gmail.com": "George2",
        "josh@yahoo.com": "Josh"
    }

    return (
        <NewsletterContext.Provider
            value={{ user, newsletter, subscribers, tags }}
        >
            {children}
        </NewsletterContext.Provider>
    );
};
