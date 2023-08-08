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

    interface Player {
      name: string;
      rank: string;
      dominance_index: string; // corrected the spelling of 'dominance'
      profile: string;
    }

    interface CampaignInput {
      id?: string;
      campaign_type: string;
      offer_type: string;
      notes: string[];
      start_date: Date;
      end_date: Date;
      is_active?: boolean;
      offer_status?: string;
      target_id?: string;
      created_at?: Date;
      updated_at?: Date;
    }
  }
}
