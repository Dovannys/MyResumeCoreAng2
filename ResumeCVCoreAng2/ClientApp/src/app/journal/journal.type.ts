export class PostListType {
    public postTit: string;
    public postDetail: string;
    public postImg: string;
    public postVideo: string;
    public postVideoType: string;
}

export class JournalType {
    public journalTit: string;
    public posts: Array<PostListType>;
}