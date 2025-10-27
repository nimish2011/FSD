// Sample movie data (you can replace this with real API data from TMDB)
const movies = {
    trending: [
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1574267432644-f86ce6a6ac59?w=300&h=450&fit=crop',
    ],
    toprated: [
        'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop',
    ],
    action: [
        'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=450&fit=crop',
    ],
    horror: [
        'https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1509207039430-5aac7bcaa3b5?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1611760700477-e2b9b0b2b733?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1630710478039-9c680b99f800?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?w=300&h=450&fit=crop',
    ],
    romance: [
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=450&fit=crop',
    ],
    documentaries: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=450&fit=crop',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=450&fit=crop',
    ]
};

// Function to load movies into rows
function loadMovies() {
    for (const [category, images] of Object.entries(movies)) {
        const container = document.getElementById(category);
        if (container) {
            images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Movie Poster';
                img.className = 'movie-poster';
                
                // Add click event to show alert (you can expand this to show movie details)
                img.addEventListener('click', () => {
                    alert('Movie clicked! You can add a modal here to show more details.');
                });
                
                container.appendChild(img);
            });
        }
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for movie rows
document.querySelectorAll('.row-posters').forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        row.style.cursor = 'grabbing';
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    
    // Add cursor style for movie rows
    document.querySelectorAll('.row-posters').forEach(row => {
        row.style.cursor = 'grab';
    });
});

// Optional: You can integrate with TMDB API for real movie data
// Example API endpoint: https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_API_KEY
// You'll need to sign up at https://www.themoviedb.org/ to get an API key
