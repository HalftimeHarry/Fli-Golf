<style>
    @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    }

    .scrolling-list {
        animation: scroll 20s linear infinite; /* Adjust duration to modify speed */
    }
</style>

<div class="container mx-auto p-4">
    <div class="top-row flex flex-row space-x-4 mb-4">
        <a href="#" class="hover:underline">Schedule</a>
        <a href="#" class="hover:underline">Players</a>
        <a href="#" class="hover:underline">Teams</a>
        <!-- Add other links similarly -->
    </div>

    <div class="relative">
        <div class="fixed-element bg-green-500 text-white text-center py-2">
            Next Tournament
        </div>
        <div class="scrolling-list flex space-x-4 mt-4">
            <span>CHICAGO</span>
            <span>— RICH HARVEST FARMS —</span>
            <span>SEP 22—24</span>
            <!-- Repeat this list for continuous effect -->
            <span>CHICAGO</span>
            <span>— RICH HARVEST FARMS —</span>
            <span>SEP 22—24</span>
        </div>
    </div>
</div>