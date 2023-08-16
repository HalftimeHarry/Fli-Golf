declare namespace App {
  namespace FormModels {
    interface ProPlayerInput {
      userId: string;
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
      campaign_id_ref_sponsor: string;
      sponsor_id: string;
      id: string;
      sponsor_seleted_level: number;
    }

    interface OfferSponsorInputLevel {
      campaign_id_ref_sponsor: string;
      sponsor_id: string;
      id: string;
      sponsor_seleted_level: number;
    }

    interface SponsorInput {
      id?: string;
      company_name: string;
      phone_number: string; // Added this field based on your form
      company_url: string;
      contact_person: string;
      contact_email: string;
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

