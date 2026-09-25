export type TrackData = {
    title: string;
    year: number;
    description: string;
    cover: string;
};

export type AlbumData = {
    slug: string;
    title: string;
    subtitle: string;
    datePublished: string;
    description: string;
    cover: string;
    tracks: TrackData[];
};

export const albums: AlbumData[] = [
    {
        slug: "all-there-ever-was",
        title: "All There Ever Was",
        subtitle: "Remastered Edition",
        datePublished: "2025",
        description: "Description Placeholder",
        cover: "cover.jpg",
        tracks: [
            {
                title: "Track 1",
                year: 2025,
                description: "Description Placeholder",
                cover: "cover.jpg",
            }
        ]
    },
    {
        slug: "10th-anniversary",
        title: "quindecim",
        subtitle: "10th anniversary ep",
        datePublished: "2026",
        description: "Description Placeholder",
        cover: "cover.jpg",
        tracks: [
            {
                title: "Track 1",
                year: 2025,
                description: "Description Placeholder",
                cover: "cover.jpg",
            }
        ]
    },
    {
        slug: "master-colletcion",
        title: "quindecim",
        subtitle: "the master collection",
        datePublished: "2025",
        description: "Description Placeholder",
        cover: "cover.jpg",
        tracks: [
            {
                title: "Track 1",
                year: 2025,
                description: "Description Placeholder",
                cover: "cover.jpg",
            }
        ]
    }
    
]
