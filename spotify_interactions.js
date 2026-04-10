// --- 1. Variables ---
// Declare variables using let and const
const BRAND_NAME = "Spotify Premium";
let likedSongsCount = 0;

// Attempt reassignment of const and observe behavior
try {
    BRAND_NAME = "Spotify Free";
} catch (error) {
    console.error("Const reassignment error observed:", error.message);
}

// Log initial variable values in the console
console.log("Brand Name:", BRAND_NAME);
console.log("Liked Songs Initial Count:", likedSongsCount);

// Ensure DOM elements are loaded before manipulating
document.addEventListener("DOMContentLoaded", () => {
    
    // Display variable values in the DOM
    document.getElementById("brand-display").innerText = BRAND_NAME;
    document.getElementById("liked-count-display").innerText = `Liked Songs: ${likedSongsCount}`;

    // --- 3. Objects & 4. Methods ---
    // Create an object representing the user profile (real-world entity)
    const userProfile = {
        name: "Guest User",
        isPremium: false,
        totalPlaylists: 2,
        
        // Method accessing object properties and using 'this' keyword
        getDetails: function() {
            return `${this.name} | ${this.isPremium ? "Premium" : "Free"} Account`;
        },

        // Method updating object data
        upgradeAccount: function() {
            this.isPremium = true;
            return `Congratulations ${this.name}, you are now a Premium member!`;
        }
    };

    // Console logging the object
    console.log("Initial User Profile Object:", userProfile);
    
    // Update object properties dynamically using both notations
    userProfile["totalPlaylists"] += 1; // Bracket notation access
    userProfile.name = "Music Lover";   // Dot notation access

    // Update DOM to show the profile details dynamically using the method
    document.getElementById("user-info-display").innerText = userProfile.getDetails();

    // --- 2. Functions ---
    // 1. Function declaration
    function displayWelcomeMessage() {
        console.log("Welcome to Spotify interactive prototype!");
    }
    
    // 2. Function expression (updates website content dynamically)
    const updateLikeDisplay = function() {
        document.getElementById("liked-count-display").innerText = `Liked Songs: ${likedSongsCount}`;
    };

    // 3. Arrow function with parameters and return value
    const calculateEngagement = (likes, playlists) => {
        return (likes * 10) + (playlists * 20); // Dummy points calculation
    };

    // Render the initial states and messages
    displayWelcomeMessage();

    // --- 5. Pop-up Boxes & 6. Events and Event Listeners ---
    
    // Attach event to an HTML element
    const profileBtn = document.getElementById("profile-btn");
    
    // Trigger JavaScript functions using click event
    profileBtn.addEventListener("click", () => {
        // prompt() for user input
        const newName = prompt("Enter your new profile name:", userProfile.name);
        
        if (newName) {
            // Update the object and use response to control website behavior
            userProfile.name = newName;
            
            // confirm() for yes/no decision
            const wantPremium = confirm("Would you like to upgrade to Premium for free?");
            if (wantPremium) {
                // Method triggered by user action (event)
                const upgradeMessage = userProfile.upgradeAccount();
                // alert() for notifications
                alert(upgradeMessage);
            } else {
                alert(`Okay ${userProfile.name}, continuing with a Free account!`);
            }
            
            // Display user responses on the webpage
            document.getElementById("user-info-display").innerText = userProfile.getDetails();
            console.log("New Engagement Score:", calculateEngagement(likedSongsCount, userProfile["totalPlaylists"]));
        }
    });

    // input event listener: Modifies DOM based on user interaction (live typing)
    const searchInput = document.getElementById("song-search");
    const footerText = document.getElementById("footer-text");
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value;
        if (query.trim() !== "") {
            footerText.innerText = `Searching for: ${query}...`;
        } else {
            footerText.innerText = "ENJOY THE BEST MUSIC USING SPOTIFY";
        }
    });

    // Multiple events on song cards (Hover and Click effects)
    const songCards = document.querySelectorAll(".card");
    
    songCards.forEach(card => {
        card.style.transition = "transform 0.3s ease, border 0.3s ease";
        card.style.cursor = "pointer";
        
        // mouseover event to modify style
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.border = "2px solid #1db954"; // Highlight with Spotify Green
        });
        
        // mouseout event to revert style
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.border = "none";
        });
        
        // click event to update content
        card.addEventListener("click", (e) => {
            // Avoid activating if clicking directly on audio controls or links
            if(e.target.tagName.toLowerCase() !== 'a' && e.target.tagName.toLowerCase() !== 'audio') {
                // Demonstrate reassignment using let
                likedSongsCount++;
                
                // Reuse the same function to update view
                updateLikeDisplay();
                
                // Notify user
                alert("Added to your Liked Songs!");
                console.log(`Engagement Score calculated dynamically: ${calculateEngagement(likedSongsCount, userProfile.totalPlaylists)}`);
            }
        });
    });

    // --- ADDITIONAL EVENTS: DOM MANIPULATION (Lab Task Extension) ---
    
    // 1. createElement, setAttribute, appendChild (Click Event)
    const createPlaylistBtn = document.getElementById("create-playlist-btn");
    const playlistsContainer = document.querySelector(".playlists");

    createPlaylistBtn.addEventListener("click", () => {
        // Create new element
        const newCard = document.createElement("div");
        // Modify attribute
        newCard.setAttribute("class", "card");
        newCard.style.border = "2px dashed #1db954";
        newCard.style.padding = "10px";
        
        // Add HTML inside
        newCard.innerHTML = `
            <img src="C:\\Users\\MONICA NAMBURI\\Desktop\\spotify\\spotify_image.webp" style="height:150px;width:150px;object-fit:cover;">
            <h4>New Custom Playlist</h4>
            <p>Created dynamically by ${userProfile.name}</p>
        `;
        
        // Append to DOM (Update DOM structure)
        playlistsContainer.appendChild(newCard);
    });

    // 2. focus and blur Events (Search box interactive styling)
    searchInput.addEventListener("focus", () => {
        searchInput.style.backgroundColor = "#e8f5e9"; // Light green tint
        searchInput.style.border = "2px solid #1db954";
        searchInput.style.boxShadow = "0 0 10px #1db954";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.backgroundColor = "white";
        searchInput.style.border = "none";
        searchInput.style.boxShadow = "none";
    });

    // 3. scroll Event (Window scrolling response)
    const headerElement = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            headerElement.style.backgroundColor = "rgba(30, 30, 30, 0.9)";
        } else {
            headerElement.style.backgroundColor = "transparent";
        }
    });

    // 4. dblclick Event (Double click the image specifically to play)
    songCards.forEach(card => {
        // Find the image inside the card so double-clicking the whole card text doesn't repeatedly trigger it
        const img = card.querySelector("img");
        if(img) {
            img.addEventListener("dblclick", () => {
                alert("Playing track directly from image double-click!");
            });
        }
    });

});
