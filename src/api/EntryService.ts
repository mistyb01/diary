import Entry from "../types/entry";

const mockData : Entry[] =  [
  {
    "id": 1,
    "user_id": 1001,
    "creation_timestamp": "2022-01-15T09:30:00Z",
    "title": "New Year's Resolution",
    "text_body": "I've decided to make a few New Year's resolutions this year. I want to focus on my health and start a regular exercise routine."
  },
  {
    "id": 2,
    "user_id": 1001,
    "creation_timestamp": "2022-03-20T18:15:00Z",
    "title": "Weekend Getaway",
    "text_body": "Spent the weekend in a cozy cabin in the woods. It was a great escape from the hustle and bustle of city life."
  },
  {
    "id": 3,
    "user_id": 1002,
    "creation_timestamp": "2022-06-05T14:45:00Z",
    "title": "Graduation Day",
    "text_body": "Today was my graduation day. It's been an incredible journey, and I'm excited for what the future holds."
  },
  {
    "id": 4,
    "user_id": 1002,
    "creation_timestamp": "2022-09-12T12:00:00Z",
    "title": "Job Interview",
    "text_body": "Had a job interview today. Felt nervous, but I think it went well. Keeping my fingers crossed!"
  },
  {
    "id": 5,
    "user_id": 1003,
    "creation_timestamp": "2023-02-08T19:20:00Z",
    "title": "Travel Plans",
    "text_body": "Planning a trip to Europe later this year. Can't wait to explore new places and try different cuisines."
  },
  {
    "id": 6,
    "user_id": 1003,
    "creation_timestamp": "2023-04-17T10:10:00Z",
    "title": "Family Reunion",
    "text_body": "Attended a family reunion today. It was great to catch up with relatives I haven't seen in years."
  },
  {
    "id": 7,
    "user_id": 1004,
    "creation_timestamp": "2023-07-30T16:50:00Z",
    "title": "Hiking Adventure",
    "text_body": "Went on a challenging hike in the mountains. The views from the summit were breathtaking."
  },
  {
    "id": 8,
    "user_id": 1004,
    "creation_timestamp": "2023-10-10T08:05:00Z",
    "title": "New Hobby",
    "text_body": "Started learning how to play the guitar. It's a fun and rewarding experience."
  },
  {
    "id": 9,
    "user_id": 1005,
    "creation_timestamp": "2024-01-05T11:25:00Z",
    "title": "A New Chapter",
    "text_body": "Today, I started a new job. Excited to see where this career path takes me."
  },
  {
    "id": 10,
    "user_id": 1005,
    "creation_timestamp": "2024-04-22T15:30:00Z",
    "title": "Beach Vacation",
    "text_body": "Spent a relaxing week at the beach. The sound of the waves is so soothing."
  },
  {
    "id": 11,
    "user_id": 1006,
    "creation_timestamp": "2024-09-08T10:40:00Z",
    "title": "New Pet",
    "text_body": "Adopted a cute puppy today. It's been a joy having a furry friend around."
  },
  {
    "id": 12,
    "user_id": 1006,
    "creation_timestamp": "2025-02-14T12:15:00Z",
    "title": "Valentine's Day",
    "text_body": "Celebrated Valentine's Day with a romantic dinner. Love is in the air."
  },
  {
    "id": 13,
    "user_id": 1007,
    "creation_timestamp": "2025-06-30T17:55:00Z",
    "title": "Gardening Hobby",
    "text_body": "Started a small garden in my backyard. It's therapeutic and adds beauty to my home."
  },
  {
    "id": 14,
    "user_id": 1007,
    "creation_timestamp": "2025-10-19T14:00:00Z",
    "title": "Road Trip",
    "text_body": "Embarked on a spontaneous road trip with friends. Unplanned adventures are the best."
  },
  {
    "id": 15,
    "user_id": 1008,
    "creation_timestamp": "2026-03-15T09:10:00Z",
    "title": "Promotion",
    "text_body": "Received a promotion at work today. Hard work pays off!"
  },
  {
    "id": 16,
    "user_id": 1008,
    "creation_timestamp": "2026-07-12T13:40:00Z",
    "title": "Summer Festival",
    "text_body": "Enjoyed the summer festival with friends. Music, food, and good company."
  },
  {
    "id": 17,
    "user_id": 1009,
    "creation_timestamp": "2026-11-02T11:20:00Z",
    "title": "Book Club Meeting",
    "text_body": "Attended the monthly book club meeting. Reading is a great way to escape."
  },
  {
    "id": 18,
    "user_id": 1009,
    "creation_timestamp": "2027-04-27T18:00:00Z",
    "title": "Home Renovation",
    "text_body": "Started a home renovation project. It's a lot of work, but it's going to be worth it."
  },
  {
    "id": 19,
    "user_id": 1010,
    "creation_timestamp": "2027-09-10T14:30:00Z",
    "title": "Mountain Retreat",
    "text_body": "Spent a peaceful weekend in a mountain cabin. The serenity was much needed."
  },
  {
    "id": 20,
    "user_id": 1010,
    "creation_timestamp": "2027-12-25T20:00:00Z",
    "title": "Christmas Celebration",
    "text_body": "Celebrated Christmas with family and friends. The joy and laughter are what makes this season special."
  }
]


class EntryService {
    async getEntries(): Promise<Entry[]> {
        return mockData;
    }
}

const entryService = new EntryService();

export { entryService };
