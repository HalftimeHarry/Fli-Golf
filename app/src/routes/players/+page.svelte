<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { supabase } from '../../supabaseClient';
    import { onMount } from 'svelte';

    let professionals: ArrayLike<any>|null = [];

    onMount(async () => {
        const { data, error } = await supabase.from('professional').select('*');
        if (error) console.error(error);
        else professionals = data;
    });

    // Add any other required scripts, similar to your example
</script>

<Accordion autocollapse class="card p-4 text-token">
    {#each professionals as pro}
        <AccordionItem open>
            <div slot="lead">
                <!-- Add any icon or leading content here -->
            </div>
            <div slot="summary">
                <p class="font-bold">{pro.full_name}</p>
            </div>
            <div slot="content">
                <!-- You can add detailed information about the professional here -->
                <p>{pro.description}</p>
            </div>
        </AccordionItem>
    {/each}
</Accordion>

<!-- Slot: Usage -->
<!-- Add any other usage instructions or information similar to your example -->

<style>
    /* Add any required styles for this page */
</style>
