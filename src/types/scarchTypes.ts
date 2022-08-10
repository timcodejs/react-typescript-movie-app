export const SEARCH_ALLPOSTS_REQUEST = "SEARCH_ALLPOSTS_REQUEST" as const;
export const SEARCH_ALLPOSTS_SUCCESS = "SEARCH_ALLPOSTS_SUCCESS" as const;
export const SEARCH_ALLPOSTS_FAILURE = "SEARCH_ALLPOSTS_FAILURE" as const;

export type SearchType = {
  id: number,
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  original_title: string,
  title: string,
}

export type SearchResult = {
  search: SearchType[]
}

export type SearchProps = {
  results: SearchResult
  loading: boolean
  success: boolean
  error: null
}