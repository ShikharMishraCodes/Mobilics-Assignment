// Mock API for job listings
const mockJobListings = [
    { title: "Software Engineer", company: "Tech Japan", location: "Tokyo" },
    { title: "English Teacher", company: "ABC Academy", location: "Osaka" },
    { title: "Marketing Specialist", company: "Global Marketing", location: "Kyoto" }
];

// Function to fetch job listings from API
function fetchJobListings() {
    setTimeout(() => {
        displayJobListings(mockJobListings);
    }, 1000);
}

// Function to display job listings
function displayJobListings(listings) {
    const jobListingsContainer = document.getElementById("job-listings");
    jobListingsContainer.innerHTML = "";

    listings.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
    <h3>${job.title}</h3>
    <p>Company: ${job.company}</p>
    <p>Location: ${job.location}</p>
    <button>Apply Now</button>
`;
        jobListingsContainer.appendChild(jobCard);
    });
}


// Function to toggle between English and Japanese
function toggleLanguage() {
    const languageButton = document.querySelector("header button");
    const currentLanguage = languageButton.textContent.trim();
    if (currentLanguage === "Switch Language") {
        languageButton.textContent = "言語を切り替える";
        updateLanguage("jp");
    } else {
        languageButton.textContent = "Switch Language";
        updateLanguage("en");
    }
}

// Function to update language-specific content
function updateLanguage(language) {
    const languageData = {
        en: {
            welcomeHeading: "Welcome to Work Opportunities in Japan",
            welcomeText: "Explore exciting job opportunities in Japan.",
            jobListingsHeading: "Job Listings",
            aboutHeading: "About Japan",
            aboutText: "Japan, known as the Land of the Rising Sun, is a fascinating country rich in culture, history, and tradition...",
        },
        jp: {
            welcomeHeading: "日本の仕事の機会へようこそ",
            welcomeText: "日本でのエキサイティングな仕事の機会をご覧ください。",
            jobListingsHeading: "求人情報",
            aboutHeading: "日本について",
            aboutText: "日本は、日の出の国として知られ、文化、歴史、伝統に富んだ魅力的な国です...",
        }
    };

    document.getElementById("welcome-heading").textContent = languageData[language].welcomeHeading;
    document.getElementById("welcome-text").textContent = languageData[language].welcomeText;
    document.getElementById("job-listings-heading").textContent = languageData[language].jobListingsHeading;
    document.getElementById("about-heading").textContent = languageData[language].aboutHeading;
    document.getElementById("about-text").textContent = languageData[language].aboutText;
}

// Function to filter job listings based on search input
function filterJobListings() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const jobListings = document.querySelectorAll(".job-card");

    jobListings.forEach(job => {
        const title = job.querySelector("h3").textContent.toLowerCase();
        const company = job.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        const location = job.querySelector("p:nth-of-type(2)").textContent.toLowerCase();

        if (title.includes(searchInput) || company.includes(searchInput) || location.includes(searchInput)) {
            job.style.display = "block"; // Show job listing
        } else {
            job.style.display = "none"; // Hide job listing
        }
    });
}

// Event listener for search input
document.getElementById("search").addEventListener("input", filterJobListings);


// Initial fetch of job listings and language update
fetchJobListings();
updateLanguage("en");