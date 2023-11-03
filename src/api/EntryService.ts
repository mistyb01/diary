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
    "creation_timestamp": "2022-12-08T19:20:00Z",
    "title": "Travel Plans",
    "text_body": "Planning a trip to Europe next year. Can't wait to explore new places and try different cuisines."
  },
  {
    "id": 6,
    "user_id": 1003,
    "creation_timestamp": "2023-02-17T10:10:00Z",
    "title": "Family Reunion",
    "text_body": "Attended a family reunion today. It was great to catch up with relatives I haven't seen in years."
  },
  {
    "id": 7,
    "user_id": 1004,
    "creation_timestamp": "2023-04-30T16:50:00Z",
    "title": "Hiking Adventure",
    "text_body": "Went on a challenging hike in the mountains. The views from the summit were breathtaking."
  },
  {
    "id": 8,
    "user_id": 1004,
    "creation_timestamp": "2023-07-10T08:05:00Z",
    "title": "New Hobby",
    "text_body": "Started learning how to play the guitar. It's a fun and rewarding experience."
  },
  {
    "id": 9,
    "user_id": 1005,
    "creation_timestamp": "2023-09-05T11:25:00Z",
    "title": "A New Chapter",
    "text_body": "Today, I started a new job. Excited to see where this career path takes me."
  },
  {
    "id": 10,
    "user_id": 1005,
    "creation_timestamp": "2023-11-22T15:30:00Z",
    "title": "Beach Vacation",
    "text_body": "Spent a relaxing week at the beach. The sound of the waves is so soothing."
  }
]



class EntryService {
    async getEntries(): Promise<Entry[]> {
        return mockData;
    }
}

const entryService = new EntryService();

export { entryService };
