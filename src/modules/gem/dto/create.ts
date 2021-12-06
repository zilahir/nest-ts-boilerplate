export interface CreateGem {
  createdAt: Date;
  name: string;
  owner: string;
  photos: Array<string>;
  hashtags: Array<string>;
}
