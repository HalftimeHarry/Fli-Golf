declare namespace App {
  namespace FormModels {
    interface ProPlayerInput {
      userId: string;
      full_name: string;
      male: boolean;
      ranking: number;
      pro_image_url: string;
    }

  interface VenueInput {
      id?: bigint; // as it is auto-generated in the database
      created_at?: string;
      userId: string;
      venue_location: string;
      venue_image_url: string;
      venue_contact?: string; // I made it optional since it might map to `venue_contact`, but that's nullable in the schema
      venue_email: string;
      venue_seating_capacity: number;
      venue_address: string;
      updated_at?: string;  // No direct column for this, but keeping in case you plan to add it later
  }

    // Updated definition for GetSponsor
    interface GetSponsor {
      id: string;
      company_name: string;  // Based on the structure you've shown
      phone_number: string;  // Based on your form
      company_url: string;
      contact_person: string;
      contact_email: string;
    }
  }

    interface OfferSponsorInputLevel {
      userId: string;
      company_name: string;
      contact_person: string;
      phone_number: string;
      level: string;
    }

    interface OfferSponsorInputLevel {
      campaign_id_ref_sponsor: string;
      sponsor_id: string;
      id: string;
      sponsor_seleted_level: number;
    }

  interface SponsorInput {
      userId?: string;
      company_name: string;
      contact_person: string;
      phone_number: string;
      contact_email: string;      // New field
      company_url: string;        // Adjusted from `website_url`
      created_at?: string;
      updated_at?: string;
  }

  declare interface SponsorInput {
      userId?: string;
      company_name: string;
      contact_person: string;
      phone_number: string;
      contact_email?: string;  // This field was in the original interface but not in the updated table schema.
      company_website?: string; // Changed from company_url for consistency.
      level?: string;
      sponsor_logo_url?: string;
      created_at?: string;
      updated_at?: string;
  }

  export {};

    
    interface Player {
      name: string;
      rank: string;
      dominance_index: string; 
      profile: string;
    }

    interface CampaignInput {
      campaign_type: 'sign' | 'get_sponsor' | 'time' | 'use of space';
      offer_type: 'amount' | 'time_start_end' | 'facility';
      notes: string[];
      start_date: Date;
      end_date: Date;
      is_active?: boolean;
      offer_status?: 'active' | 'ended' | 'suspended' | 'canceled';
      created_at?: Date;
      updated_at?: Date;
    }

    interface OfferInput {
      campaign_id_ref_pro: string;
      professional_id: string;
      id: string;
      offered: number;
    }

    interface User {
        id: string; // or number, depending on your data
        username: string;
        // any other fields that a user might have
    }

    // New type definition for GetProfessional
    interface GetProfessional {
      id: string;
      full_name: string;
    }
  }

