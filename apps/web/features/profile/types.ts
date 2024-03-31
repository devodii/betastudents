export type ProfileCreationProps = {
  photo_url: string;
  handle: string;
  country: string;
  education_level: string;
  school_name?: string;
  graduation_year?: number;
};

export interface Profile extends ProfileCreationProps {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
