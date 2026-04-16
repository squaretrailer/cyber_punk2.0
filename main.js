// ============================================
// SLIDESHOW (for videos)
// ============================================
let slideIndex = 1;

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (!slides.length) return;
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}

function changeSlide(n) { showSlide(slideIndex += n); }
function currentSlide(n) { showSlide(slideIndex = n); }

// ============================================
// TEAM MEMBERS CRUD (with localStorage)
// ============================================
let teamMembers = [];

// Load from localStorage or use default data
function loadTeamData() {
    const stored = localStorage.getItem('cyberpunk_team');
    if (stored) {
        teamMembers = JSON.parse(stored);
    } else {
        teamMembers = [
            { id: 1, name: "Maine", role: "Leader", image: "images/Maine_Infobox_CPEDGE.webp" },
            { id: 2, name: "Dorio", role: "Vice Leader", image: "images/Dorio.jpg" },
            { id: 3, name: "David", role: "New member", image: "images/david.jpg" },
            { id: 4, name: "Lucy", role: "Net runner", image: "images/lucy2.jpg" },
            { id: 5, name: "Pilar", role: "Gun for hire", image: "images/Pilar.webp" },
            { id: 6, name: "Rebecca", role: "Gun for hire", image: "images/Rebecca.png" },
            { id: 7, name: "Falco", role: "Getaway Driver", image: "images/falco.webp" },
            { id: 8, name: "Kiwi", role: "Net runner", image: "images/Kiwi_CPEDGE.webp" }
        ];
        saveTeamToLocalStorage();
    }
    nextId = teamMembers.length > 0 ? Math.max(...teamMembers.map(m => m.id)) + 1 : 1;
}

function saveTeamToLocalStorage() {
    localStorage.setItem('cyberpunk_team', JSON.stringify(teamMembers));
}

function renderTeam() {
    const container = document.getElementById('teamContainer');
    if (!container) return;
    container.innerHTML = '';
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${escapeHtml(member.name)}</h4>
            <p>${escapeHtml(member.role)}</p>
            <div class="card-actions">
                <button class="edit-member" data-id="${member.id}">✏️ Edit</button>
                <button class="delete-member" data-id="${member.id}">🗑️ Delete</button>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.edit-member').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            editMember(id);
        });
    });
    document.querySelectorAll('.delete-member').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            deleteMember(id);
        });
    });
}

let nextId = 1;

function addMember() {
    const name = prompt("Enter member name:");
    if (!name) return;
    const role = prompt("Enter role (e.g., Leader, Net runner):");
    if (!role) return;
    let image = prompt("Enter image path (e.g., images/new.jpg):", "images/placeholder.jpg");
    if (!image) image = "images/placeholder.jpg";
    const newMember = { id: nextId++, name, role, image };
    teamMembers.push(newMember);
    saveTeamToLocalStorage();
    renderTeam();
}

function editMember(id) {
    const member = teamMembers.find(m => m.id === id);
    if (!member) return;
    const newName = prompt("Edit name:", member.name);
    if (newName) member.name = newName;
    const newRole = prompt("Edit role:", member.role);
    if (newRole) member.role = newRole;
    const newImage = prompt("Edit image path:", member.image);
    if (newImage) member.image = newImage;
    saveTeamToLocalStorage();
    renderTeam();
}

function deleteMember(id) {
    if (confirm("Remove this member?")) {
        teamMembers = teamMembers.filter(m => m.id !== id);
        saveTeamToLocalStorage();
        renderTeam();
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ============================================
// CYBERPUNK EDGERUNNERS DATABASE (Anime only)
// ============================================
const cyberpunkDatabase = {
    quotes: [
        { id: 1, character: "David Martinez", content: "I don't need a reason to fight. I just need a goal." },
        { id: 2, character: "Lucy", content: "In Night City, you either get rich or die trying." },
        { id: 3, character: "Maine", content: "A real man never dies, even when he's killed." },
        { id: 4, character: "Rebecca", content: "You're gonna make it, David. I know you will." },
        { id: 5, character: "Kiwi", content: "Trust is a weakness in this business." }
    ],
    characters: [
        { id: 1, name: "David Martinez", description: "A teenager from Arroyo who becomes an Edgerunner after a tragic loss. He struggles to balance humanity and chrome." },
        { id: 2, name: "Lucy", description: "A netrunner with a mysterious past. She dreams of going to the moon and becomes David's love interest." },
        { id: 3, name: "Maine", description: "The leader of the Edgerunner crew. A father figure to David, he suffers from cyberpsychosis." },
        { id: 4, name: "Rebecca", description: "A loud, trigger-happy gunner loyal to Maine's crew. She becomes a close friend to David." },
        { id: 5, name: "Kiwi", description: "A veteran netrunner who values professionalism and survival above all." },
        { id: 6, name: "Falco", description: "The crew's getaway driver, reliable and cool under pressure." },
        { id: 7, name: "Pilar", description: "Rebecca's brother, a tech expert with a crude sense of humor." }
    ],
    lore: [
        { id: 1, title: "Cyberpsychosis", content: "A condition caused by excessive cybernetic implants, leading to loss of empathy and violent outbursts. Several Edgerunners suffer from it." },
        { id: 2, title: "Arasaka Tower", content: "The imposing headquarters of the Arasaka corporation, where David and Lucy's fate is sealed in the final episodes." },
        { id: 3, title: "The Moon", content: "Lucy's dream destination, symbolizing escape from Night City's corruption. It becomes a recurring motif throughout the series." },
        { id: 4, title: "Sandevistan", content: "A rare military-grade cyberware that slows perception of time. David implants it and becomes a legendary Edgerunner." }
    ]
};

function loadRandomCyberpunkData() {
    const apiContent = document.getElementById('api-content');
    if (!apiContent) return;

    const allData = [
        ...cyberpunkDatabase.quotes.map(item => ({ ...item, type: 'quote' })),
        ...cyberpunkDatabase.characters.map(item => ({ ...item, type: 'character' })),
        ...cyberpunkDatabase.lore.map(item => ({ ...item, type: 'lore' }))
    ];

    if (allData.length === 0) {
        apiContent.innerHTML = '<p class="api-placeholder">No data available.</p>';
        return;
    }

    const randomIndex = Math.floor(Math.random() * allData.length);
    const item = allData[randomIndex];

    let displayHtml = `<div class="cyber-item">`;
    if (item.type === 'quote') {
        displayHtml += `<h4>Quote: ${escapeHtml(item.character)}</h4><p>"${escapeHtml(item.content)}"</p>`;
    } else if (item.type === 'character') {
        displayHtml += `<h4>Character: ${escapeHtml(item.name)}</h4><p>${escapeHtml(item.description)}</p>`;
    } else if (item.type === 'lore') {
        displayHtml += `<h4>Lore: ${escapeHtml(item.title)}</h4><p>${escapeHtml(item.content)}</p>`;
    }
    displayHtml += `</div>`;

    apiContent.innerHTML = displayHtml;
}

// ============================================
// BACK TO TOP
// ============================================
function setupBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (btn) {
        btn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Slideshow
    showSlide(slideIndex);
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentSlide(idx + 1);
        });
    });

    // Team CRUD with localStorage
    loadTeamData();
    renderTeam();
    const addBtn = document.getElementById('addMemberBtn');
    if (addBtn) addBtn.addEventListener('click', addMember);

    // Cyberpunk Database button
    const fetchBtn = document.getElementById('fetchCyberpunkBtn');
    if (fetchBtn) fetchBtn.addEventListener('click', loadRandomCyberpunkData);

    // Back to top
    setupBackToTop();
});