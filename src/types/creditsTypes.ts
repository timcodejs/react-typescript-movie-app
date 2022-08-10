export const CREDITS_ALLPOSTS_REQUEST = "CREDITS_ALLPOSTS_REQUEST" as const;
export const CREDITS_ALLPOSTS_SUCCESS = "CREDITS_ALLPOSTS_SUCCESS" as const;
export const CREDITS_ALLPOSTS_FAILURE = "CREDITS_ALLPOSTS_FAILURE" as const;

export type castType = {
  id: number,
  name: string,
  character: string,
  order: number,
  profile_path: string
}

export type crewType = {
  id: number,
  name: string,
  job: string,
  profile_path: string
}

export type CreditsType = {
  id: number,
  cast: castType[],
  crew: crewType[]
}

export type CreditsResult = {
  credits: CreditsType
}

export type CreditsProps = {
  results: CreditsResult
  loading: boolean
  success: boolean
  error: null
}