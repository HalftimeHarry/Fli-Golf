declare namespace App {
  namespace FormModels {
    interface ProPlayerInput {
      id: string;
      full_name: string;
      male: boolean;
      ranking: number;
    }

    interface VenueInput {
      id?: string;
      name: string;
      location: string;
      contact_person: string;
      contact_email: string;
      seating_capacity: number;
      created_at?: string;
      updated_at?: string;
    }

    interface SponsorInput {
      id?: string;
      company_name: string;
      company_url: string;
      contact_person: string;
      contact_email: string;
      created_at?: string;
      updated_at?: string;
    }
  }
}
