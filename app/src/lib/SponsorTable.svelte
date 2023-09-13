<script lang="ts">
    import { supabase } from '../supabaseClient';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';

    let tableSimple: TableSource = {
        head: [],
        body: [],
        meta: [],
        foot: []
    };

    // Define the base URL and folder for your bucket
    const BUCKET_BASE_URL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/';
    const FOLDER = 'sponsor_logos/';

    onMount(async () => {
        let { data: sponsors, error: sponsorsError } = await supabase
            .from('sponsors')
            .select('id, company_name, company_url, contact_person, contact_email, created_at, is_sponsoring, sponsor_logo_url, level');
        
        if (sponsorsError) {
            console.error('Error fetching sponsors:', sponsorsError);
        } else {
            // Concatenate the bucket base URL, folder, and the logo URL
            sponsors = sponsors.map((sponsor) => ({
                ...sponsor,
                sponsor_logo_url: `<img src="${BUCKET_BASE_URL}${FOLDER}${sponsor.sponsor_logo_url}" alt="Sponsor Logo" width="50">`
            }));

            tableSimple = {
                head: [
                    'Company Name',
                    'Company URL',
                    'Contact Person',
                    'Contact Email',
                    'Created At',
                    'Is Sponsoring',
                    'Sponsor Logo',
                    'Level'
                ],
                body: tableMapperValues(sponsors, [
                    'company_name',
                    'company_url',
                    'contact_person',
                    'contact_email',
                    'created_at',
                    'is_sponsoring',
                    'sponsor_logo_url',
                    'level'
                ]),
                meta: tableMapperValues(sponsors, [
                    'id',
                    'company_name',
                    'company_url',
                    'contact_person',
                    'contact_email',
                    'created_at',
                    'is_sponsoring',
                    'sponsor_logo_url',
                    'level'
                ]),
                foot: ['Total', '', '', '', '', '', '', `${sponsors.length}`]
            };
        }
    });
</script>

<div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4 text-white">Sponsors</h1>
    <Table source={tableSimple} />
</div>
